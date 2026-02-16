dev-command-center/
├─ infra/
│  ├─ docker-compose.yml
│  ├─ .env.example
│  └─ postgres/
│     └─ migrations/
│        ├─ 001_init.sql
│        ├─ 002_indexes.sql
│        └─ 003_seed.sql
├─ agent-runtime/
│  ├─ Dockerfile
│  ├─ requirements.txt
│  ├─ .env.example
│  └─ app/
│     ├─ main.py
│     ├─ config.py
│     ├─ db.py
│     ├─ queue.py
│     ├─ github_client.py
│     ├─ memory.py
│     ├─ tools/
│     │  ├─ repo_ops.py
│     │  ├─ node_ops.py
│     │  └─ diff_ops.py
│     └─ agents/
│        ├─ manager.py
│        ├─ coder.py
│        └─ qa.py
└─ dashboard/
   ├─ Dockerfile
   ├─ package.json
   ├─ next.config.js
   ├─ tailwind.config.js
   ├─ postcss.config.js
   ├─ .env.example
   └─ src/
      ├─ app/
      │  ├─ layout.tsx
      │  ├─ page.tsx
      │  ├─ agents/page.tsx
      │  ├─ projects/page.tsx
      │  ├─ tasks/page.tsx
      │  ├─ prs/page.tsx
      │  ├─ logs/page.tsx
      │  └─ api/
      │     ├─ agents/route.ts
      │     ├─ projects/route.ts
      │     ├─ tasks/route.ts
      │     ├─ commands/route.ts
      │     └─ stream/route.ts
      ├─ components/
      │  ├─ Shell.tsx
      │  ├─ Panel.tsx
      │  ├─ StatCard.tsx
      │  ├─ TaskBoard.tsx
      │  ├─ AgentTable.tsx
      │  └─ LogViewer.tsx
      └─ lib/
         ├─ db.ts
         ├─ redis.ts
         └─ types.ts
