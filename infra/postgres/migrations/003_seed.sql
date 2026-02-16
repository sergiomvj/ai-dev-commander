insert into agents (name, role, status) values
  ('Astra Manager', 'manager', 'idle'),
  ('Sentinel Reviewer', 'reviewer', 'idle'),
  ('Forge QA', 'qa', 'idle'),
  ('Atlas Memory', 'memory', 'idle')
on conflict do nothing;
