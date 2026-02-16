A seguir está o pacote técnico completo, já no formato que você pode copiar para o Antigravity (como monorepo ou como docs soltas). Inclui:

Documentos (arquitetura, governança, comunicação, serviços)

SQL atualizado (incluindo workers/reviews)

Docker compose da VPS Core (AI-Dev-Commander)

Docker compose da VPS Worker (OpenClaw)

API/Contrato HTTP entre VPS (core → worker) + segurança

Fluxos operacionais (PR padrão + commit direto via label)

Premissa: OpenClaw roda em VPS separadas como “programador contratado”. O Core (AI-Dev-Commander) mantém memória, logs, revisão, QA e dashboard.

1) Documento — Serviços que você precisa subir no Projeto AI-Dev-Commander

Crie um projeto no Easypanel chamado: AI-Dev-Commander

Serviços obrigatórios (MVP funcional)

postgres (PostgreSQL 16)

Função: memória persistente, estado, auditoria, tarefas, decisões, reviews, artifacts

Volume persistente: /var/lib/postgresql/data

redis (Redis 7)

Função: fila leve, heartbeat, sinalização, comandos do dashboard, agendamento simples

Volume persistente (opcional, recomendado): /data com AOF habilitado

qdrant (Vector DB)

Função: memória semântica por projeto (RAG), embeddings de decisões, docs e trechos de código

Volume persistente: /qdrant/storage

agent-runtime (seu core, Python)

Função: “funcionários” persistentes 24/7

Scheduler/Manager (planeja e distribui)

Reviewer (supervisiona o resultado do OpenClaw)

QA (valida lint/test/build)

Memory agent (atualiza memória e padrões)

Volume persistente: /data/workspace (clones/cache/artefatos)

dashboard (Next.js)

Função: centro de comando (monitorar, controlar, aprovar PR, editar memória, kill switch)

Exposição: porta 3000 (ou via domínio)

Serviços opcionais (recomendados para evolução)

n8n

Função: integrações externas (WhatsApp/Telegram/Email/GitHub webhooks avançados, etc.)

Use quando quiser automações “fora do core”.

pgadmin (ou adminer)

Função: debug de banco (somente interno / protegido)

Serviços NÃO recomendados no Core

OpenClaw (fica nas VPS Worker)

Ferramentas pesadas de build em excesso (use as Worker para tarefas pesadas se necessário)

2) Documento — Arquitetura final e governança (resumo executivo)
Regra de ouro

PR sempre e espera por você.

Commit direto somente se a Issue tiver label GitHub: direct (ou ai-direct).

Responsabilidades

Core (AI-Dev-Commander): memória, supervisão, QA, logs, decisão final, criação de PR/commit, dashboard.

OpenClaw Worker: recebe job, faz trabalho, devolve patch + relatório.

3) SQL completo atualizado (com workers/reviews)

Crie arquivo: infra/postgres/migrations/001_init.sql (substitui o anterior)

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


Crie infra/postgres/migrations/002_indexes.sql:

create index if not exists idx_tasks_status_priority on tasks(status, priority, created_at);
create index if not exists idx_worker_jobs_status on worker_jobs(status, created_at);
create index if not exists idx_reviews_status on reviews(status, created_at);
create index if not exists idx_events_created_at on events(created_at desc);
create index if not exists idx_commands_status on commands(status, created_at);
create index if not exists idx_projects_status on projects(status);
create index if not exists idx_memories_project on memories(project_id);


Crie infra/postgres/migrations/003_seed.sql:

insert into agents (name, role, status) values
  ('Astra Manager', 'manager', 'idle'),
  ('Sentinel Reviewer', 'reviewer', 'idle'),
  ('Forge QA', 'qa', 'idle'),
  ('Atlas Memory', 'memory', 'idle')
on conflict do nothing;

4) Docker Compose — VPS Core (AI-Dev-Commander)

Crie infra/docker-compose.yml (core):

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: ${POSTGRES_DB:-dcc}
      POSTGRES_USER: ${POSTGRES_USER:-dcc}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-dcc_pass}
    ports: ["5432:5432"]
    volumes:
      - dcc_pg:/var/lib/postgresql/data
      - ./postgres/migrations:/docker-entrypoint-initdb.d:ro
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER:-dcc} -d ${POSTGRES_DB:-dcc}"]
      interval: 5s
      timeout: 3s
      retries: 10

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]
    volumes: [dcc_redis:/data]
    command: ["redis-server","--appendonly","yes"]

  qdrant:
    image: qdrant/qdrant:latest
    ports: ["6333:6333"]
    volumes: [dcc_qdrant:/qdrant/storage]

  agent_runtime:
    build: ../agent-runtime
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started
      qdrant:
        condition: service_started
    environment:
      DCC_PG_DSN: ${DCC_PG_DSN}
      DCC_REDIS_URL: ${DCC_REDIS_URL}
      DCC_QDRANT_URL: ${DCC_QDRANT_URL}
      DCC_WORKSPACE_DIR: /data/workspace
      DCC_TICK_SECONDS: ${DCC_TICK_SECONDS:-60}
      DCC_AGENTS: ${DCC_AGENTS:-3}

      # GitHub
      GITHUB_TOKEN: ${GITHUB_TOKEN}
      GITHUB_OWNER: ${GITHUB_OWNER}
      REPOS_ALLOWLIST: ${REPOS_ALLOWLIST}
      DEFAULT_BASE_BRANCH: ${DEFAULT_BASE_BRANCH:-main}

      # Worker pool (OpenClaw)
      WORKER_SHARED_SECRET: ${WORKER_SHARED_SECRET}
      WORKER_REQUEST_TIMEOUT_SECONDS: ${WORKER_REQUEST_TIMEOUT_SECONDS:-600}

      # Node pipeline defaults (can be overridden per project governance JSON)
      RUN_LINT: ${RUN_LINT:-true}
      RUN_TESTS: ${RUN_TESTS:-true}
      RUN_BUILD: ${RUN_BUILD:-true}

      # LLM placeholder
      LLM_PROVIDER: ${LLM_PROVIDER:-openai}
      OPENAI_API_KEY: ${OPENAI_API_KEY:-}
      OPENROUTER_API_KEY: ${OPENROUTER_API_KEY:-}
      LLM_MODEL: ${LLM_MODEL:-gpt-4.1-mini}
    volumes:
      - dcc_workspace:/data/workspace

  dashboard:
    build: ../dashboard
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started
    environment:
      DCC_PG_DSN: ${DCC_PG_DSN}
      DCC_REDIS_URL: ${DCC_REDIS_URL}
      DASHBOARD_ADMIN_TOKEN: ${DASHBOARD_ADMIN_TOKEN:-change_me}
    ports: ["3000:3000"]

volumes:
  dcc_pg:
  dcc_redis:
  dcc_qdrant:
  dcc_workspace:


Crie infra/.env.example (core):

POSTGRES_DB=dcc
POSTGRES_USER=dcc
POSTGRES_PASSWORD=dcc_pass

DCC_PG_DSN=postgresql://dcc:dcc_pass@postgres:5432/dcc
DCC_REDIS_URL=redis://redis:6379/0
DCC_QDRANT_URL=http://qdrant:6333

GITHUB_TOKEN=ghp_xxx
GITHUB_OWNER=facebrasilgroup
REPOS_ALLOWLIST=repo1,repo2,repo3
DEFAULT_BASE_BRANCH=main

DCC_TICK_SECONDS=60
DCC_AGENTS=3

RUN_LINT=true
RUN_TESTS=true
RUN_BUILD=true

# Shared secret used to call OpenClaw workers
WORKER_SHARED_SECRET=change_me_super_secret
WORKER_REQUEST_TIMEOUT_SECONDS=900

LLM_PROVIDER=openai
OPENAI_API_KEY=
OPENROUTER_API_KEY=
LLM_MODEL=gpt-4.1-mini

DASHBOARD_ADMIN_TOKEN=super_secret_admin_token

5) Docker Compose — VPS Worker (OpenClaw Worker)

Como OpenClaw é instável/difícil em alguns installs, o Worker deve ser um serviço HTTP simples que:

recebe job (JSON)

executa OpenClaw (ou sua automação interna)

retorna patch + report

5.1) Estrutura do Worker (repositório openclaw-worker)
openclaw-worker/
├─ Dockerfile
├─ requirements.txt
└─ app/
   ├─ server.py
   ├─ security.py
   └─ runner.py

5.2) worker/docker-compose.yml
services:
  openclaw_worker:
    build: .
    ports:
      - "8080:8080"
    environment:
      WORKER_SHARED_SECRET: ${WORKER_SHARED_SECRET}
      GITHUB_TOKEN: ${GITHUB_TOKEN}
      WORKDIR: /data/workdir
      # optionally restrict allowed repos here too
      REPOS_ALLOWLIST: ${REPOS_ALLOWLIST:-}
    volumes:
      - worker_data:/data/workdir
    restart: unless-stopped

volumes:
  worker_data:

5.3) worker/.env.example
WORKER_SHARED_SECRET=change_me_super_secret
GITHUB_TOKEN=ghp_xxx
REPOS_ALLOWLIST=repo1,repo2

5.4) Worker code (HTTP API)

requirements.txt:

fastapi==0.115.6
uvicorn[standard]==0.30.6
pydantic==2.8.2
GitPython==3.1.43


Dockerfile:

FROM python:3.11-slim

RUN apt-get update && apt-get install -y git curl ca-certificates nodejs npm \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app
ENV PYTHONUNBUFFERED=1
EXPOSE 8080

CMD ["uvicorn","app.server:app","--host","0.0.0.0","--port","8080"]


app/security.py:

import os
from fastapi import Header, HTTPException

def require_secret(x_worker_secret: str | None = Header(default=None)):
    expected = os.getenv("WORKER_SHARED_SECRET", "")
    if not expected or x_worker_secret != expected:
        raise HTTPException(status_code=401, detail="Unauthorized")


app/runner.py (stub: você pluga OpenClaw real aqui):

import os
from git import Repo

def run_job(job: dict) -> dict:
    """
    job = {
      "owner": "...",
      "repo": "...",
      "base_branch": "main",
      "task_title": "...",
      "task_description": "...",
      "constraints": {...}
    }
    """
    token = os.environ["GITHUB_TOKEN"]
    owner = job["owner"]
    repo = job["repo"]
    base_branch = job.get("base_branch","main")
    workdir = os.getenv("WORKDIR","/data/workdir")
    path = f"{workdir}/{owner}/{repo}"

    # clone/pull
    if not os.path.exists(path):
        os.makedirs(f"{workdir}/{owner}", exist_ok=True)
        url = f"https://{token}@github.com/{owner}/{repo}.git"
        Repo.clone_from(url, path, branch=base_branch)
    r = Repo(path)
    r.git.checkout(base_branch)
    r.git.pull()

    # TODO: aqui você chama OpenClaw de verdade e gera patch/diff
    # MVP placeholder: cria arquivo marker
    marker = os.path.join(path, "OPENCLAW_WORKER_NOTE.md")
    with open(marker, "a", encoding="utf-8") as f:
        f.write(f"- OpenClaw worker executed: {job.get('task_title','')}\n")

    # generate diff
    diff = r.git.diff()

    return {
        "summary": "Worker executed placeholder change (plug OpenClaw here).",
        "files_changed": ["OPENCLAW_WORKER_NOTE.md"],
        "patch": diff,
        "risk_level": "low"
    }


app/server.py:

from fastapi import FastAPI
from pydantic import BaseModel
from .security import require_secret
from .runner import run_job

app = FastAPI(title="OpenClaw Worker")

class Job(BaseModel):
    owner: str
    repo: str
    base_branch: str = "main"
    task_title: str
    task_description: str | None = None
    constraints: dict = {}

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/v1/jobs/run", dependencies=[require_secret])
def run(job: Job):
    result = run_job(job.model_dump())
    return result


Importante: esse Worker já está pronto para integração. Depois você substitui o placeholder do run_job() por chamada real do OpenClaw (CLI/API) quando ele estiver estável na VPS Worker.

6) Contrato Core → Worker (HTTP) + Segurança
Endpoint do Worker

POST http://WORKER_IP:8080/v1/jobs/run

Header: X-Worker-Secret: <WORKER_SHARED_SECRET>

Request (exemplo)
{
  "owner": "facebrasilgroup",
  "repo": "repo1",
  "base_branch": "main",
  "task_title": "Fix login redirect bug",
  "task_description": "After login, redirect should go to /dashboard",
  "constraints": {
    "max_files": 10,
    "max_lines": 500
  }
}

Response (exemplo)
{
  "summary": "Implemented redirect fix in auth callback and added test.",
  "files_changed": ["src/app/auth/callback.ts", "src/__tests__/auth.test.ts"],
  "patch": "diff --git a/... (unified diff)",
  "risk_level": "low"
}

7) Mudanças no Agent Runtime Core para usar Worker (OpenClaw)

A lógica no core muda assim:

Manager pega task

Determina mode:

por default: pr

se issue tiver label direct (ou ai-direct): direct

Seleciona worker disponível (workers.status='idle' e capacity)

Cria worker_jobs e chama o Worker HTTP

Recebe patch

Reviewer avalia → cria registro em reviews

QA aplica patch no clone local + roda lint/test/build

Se ok:

modo pr: push branch e abre PR

modo direct: commit direto na base branch (apenas via label)

Sugestão de labels (GitHub)

direct → habilita commit direto

ai-direct → mesmo efeito (se você preferir deixar mais explícito)

8) Atualização do Dashboard (novas áreas)

Adicionar no Dashboard (mínimo):

/workers (lista workers + status)

/reviews (pendentes, aprovados, rejeitados)

em /tasks mostrar:

mode (pr/direct)

labels capturadas

status do worker_job

Além disso:

botão para criar command:

global kill

pause project

resume project

retry task

9) Documento — Fluxos (PR padrão + label direct)
Fluxo normal

Issue → task → worker → patch → review → QA → branch → PR → espera você

Fluxo direct

Issue com label direct → task.mode=direct

worker → patch → review → QA → commit direto na main

se QA falhar → fallback automático:

cria branch + PR (não comita direto)

10) “Checklist de subida” no Easypanel (AI-Dev-Commander)
No projeto AI-Dev-Commander

Suba, nessa ordem:

postgres

redis

qdrant

agent-runtime (com envs + volume workspace)

dashboard (com envs)

Em cada VPS Worker

Suba:

openclaw-worker (FastAPI) + volume

configure o secret e o github token

Depois registre o Worker no banco (core):

insert into workers (name, kind, base_url, status, capacity)
values ('OpenClaw Worker 1','openclaw','http://WORKER_IP:8080','idle',1);

11) Recomendação de segurança adicional (forte)

Mesmo com secret, recomendo:

colocar worker atrás de VPN (Tailscale/Wireguard) ou IP allowlist no firewall

não expor o worker para internet pública

12) Próximo passo imediato (para você não travar agora)

Você já está montando a base no Antigravity. Então, para “fechar o ciclo”:

Suba Core (postgres/redis/qdrant/agent-runtime/dashboard)

Suba 1 Worker (openclaw-worker) em outra VPS

Registre o worker no banco (workers)

Crie um project (projects) e uma task (tasks) manual

Veja o evento stream no dashboard (/logs)

Depois a gente pluga o OpenClaw real no worker (substituindo placeholder)