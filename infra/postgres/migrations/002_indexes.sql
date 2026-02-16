create index if not exists idx_tasks_status_priority on tasks(status, priority, created_at);
create index if not exists idx_worker_jobs_status on worker_jobs(status, created_at);
create index if not exists idx_reviews_status on reviews(status, created_at);
create index if not exists idx_events_created_at on events(created_at desc);
create index if not exists idx_commands_status on commands(status, created_at);
create index if not exists idx_projects_status on projects(status);
create index if not exists idx_memories_project on memories(project_id);
