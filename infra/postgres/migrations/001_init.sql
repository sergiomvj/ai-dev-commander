create extension if not exists pgcrypto;

-- =========================
-- PROJECTS
-- =========================
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  owner text not null,
  repo text not null,
  default_branch text not null default 'main',
  status text not null default 'active', -- active | paused | archived

  -- governance defaults per project
  governance jsonb not null default jsonb_build_object(
    'default_mode','pr',                  -- pr
    'direct_labels', jsonb_build_array('direct','ai-direct'),
    'max_files_changed', 25,
    'max_loc_changed', 1500,
    'run_lint', true,
    'run_tests', true,
    'run_build', true
  ),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(owner, repo)
);

-- =========================
-- AGENTS (core staff)
-- =========================
create table if not exists agents (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null, -- manager | reviewer | qa | memory
  status text not null default 'idle', -- idle | running | paused | error
  heartbeat_at timestamptz,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- WORKERS (external contractors: OpenClaw VPS)
-- =========================
create table if not exists workers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  kind text not null default 'openclaw',   -- openclaw
  base_url text not null,                 -- http://worker-x:8080
  status text not null default 'idle',     -- idle | busy | offline | disabled
  last_heartbeat_at timestamptz,
  capacity int not null default 1,         -- concurrent jobs
  meta jsonb not null default '{}'::jsonb, -- tags, region, etc.
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- TASKS (business tasks)
-- =========================
create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,

  source text not null default 'manual',   -- manual | github_issue | api
  source_ref text,                         -- issue url/number
  title text not null,
  description text,
  kind text not null default 'chore',      -- bugfix | feature | refactor | chore | research

  priority int not null default 3,         -- 1 highest
  status text not null default 'queued',   -- queued | running | blocked | done | failed | cancelled

  -- governance resolved per task
  mode text not null default 'pr',         -- pr | direct (resolved from labels)
  labels text[] not null default '{}',     -- captured github labels

  payload jsonb not null default '{}'::jsonb,
  assigned_agent_id uuid references agents(id) on delete set null,

  scheduled_at timestamptz,
  started_at timestamptz,
  finished_at timestamptz,
  error text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- WORKER_JOBS (dispatch to OpenClaw)
-- =========================
create table if not exists worker_jobs (
  id uuid primary key default gen_random_uuid(),
  task_id uuid not null references tasks(id) on delete cascade,
  worker_id uuid references workers(id) on delete set null,

  status text not null default 'queued', -- queued | running | returned | failed | cancelled
  request jsonb not null default '{}'::jsonb,
  response jsonb not null default '{}'::jsonb,

  started_at timestamptz,
  finished_at timestamptz,
  error text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- REVIEWS (supervision of worker output)
-- =========================
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  task_id uuid not null references tasks(id) on delete cascade,
  worker_job_id uuid references worker_jobs(id) on delete set null,
  reviewer_agent_id uuid references agents(id) on delete set null,

  status text not null default 'pending', -- pending | approved | rejected | changes_requested
  summary text,
  risk_level text not null default 'medium', -- low | medium | high
  notes jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================
-- RUNS (execution cycles)
-- =========================
create table if not exists runs (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references tasks(id) on delete set null,
  project_id uuid references projects(id) on delete set null,
  agent_id uuid references agents(id) on delete set null,
  status text not null default 'running', -- running | success | failed | cancelled
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  error text,
  tokens_in int,
  tokens_out int,
  cost_cents int
);

-- =========================
-- EVENTS (append-only audit)
-- =========================
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete set null,
  agent_id uuid references agents(id) on delete set null,
  task_id uuid references tasks(id) on delete set null,
  worker_id uuid references workers(id) on delete set null,
  worker_job_id uuid references worker_jobs(id) on delete set null,
  kind text not null, -- info | warning | error | action | decision
  message text not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- =========================
-- DECISIONS (why)
-- =========================
create table if not exists decisions (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete set null,
  agent_id uuid references agents(id) on delete set null,
  task_id uuid references tasks(id) on delete set null,
  summary text not null,
  inputs jsonb not null default '{}'::jsonb,
  outputs jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- =========================
-- MEMORIES (structured memory per project)
-- =========================
create table if not exists memories (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  key text not null,
  value jsonb not null default '{}'::jsonb,
  version int not null default 1,
  updated_by_agent_id uuid references agents(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(project_id, key)
);

-- =========================
-- ARTIFACTS (commit/pr/build/report)
-- =========================
create table if not exists artifacts (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete set null,
  task_id uuid references tasks(id) on delete set null,
  kind text not null, -- commit | pr | build | report | patch
  ref text,           -- url or sha
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- =========================
-- COMMANDS (dashboard -> runtime)
-- =========================
create table if not exists commands (
  id uuid primary key default gen_random_uuid(),
  target text not null, -- agent:<id> | project:<id> | global
  kind text not null,   -- pause | resume | kill | enqueue_task | set_project_governance | retry_task
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'queued', -- queued | processed | failed
  created_at timestamptz not null default now(),
  processed_at timestamptz
);

-- =========================
-- updated_at triggers
-- =========================
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_projects_updated on projects;
create trigger trg_projects_updated before update on projects
for each row execute function set_updated_at();

drop trigger if exists trg_agents_updated on agents;
create trigger trg_agents_updated before update on agents
for each row execute function set_updated_at();

drop trigger if exists trg_workers_updated on workers;
create trigger trg_workers_updated before update on workers
for each row execute function set_updated_at();

drop trigger if exists trg_tasks_updated on tasks;
create trigger trg_tasks_updated before update on tasks
for each row execute function set_updated_at();

drop trigger if exists trg_worker_jobs_updated on worker_jobs;
create trigger trg_worker_jobs_updated before update on worker_jobs
for each row execute function set_updated_at();

drop trigger if exists trg_reviews_updated on reviews;
create trigger trg_reviews_updated before update on reviews
for each row execute function set_updated_at();

drop trigger if exists trg_memories_updated on memories;
create trigger trg_memories_updated before update on memories
for each row execute function set_updated_at();
