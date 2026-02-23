# 03-end-to-end-flow.md
# Fluxo Completo: Issue → Dispatcher → RPC → Review → PR

## Objetivo
Descrever o pipeline operacional do AI-Dev-Commander controlando OpenClaw.

## Entradas
- GitHub Issues (webhooks)
- Labels (policy)
- Comentários com comandos (ex.: "/dispatch", "/re-run", "/direct")

## Saídas
- Branch com mudanças
- Pull Request criado e linkado à Issue
- Comentários de resumo + checklist
- Métricas e logs do job
- Snapshots de persistência

## Etapas

### 1) Ingest (GitHub Webhook)
Eventos:
- `issues.opened`
- `issues.labeled/unlabeled`
- `issue_comment.created`
- `pull_request.*` (para feedback loop)

Ações:
- Validar assinatura
- Normalizar payload
- Criar registro `IssueRecord`
- Enfileirar `DispatchCandidate`

### 2) Policy Engine (por labels)
Exemplos:
- `auto-pr`: sempre PR
- `direct-commit`: permitir commit direto (restrito)
- `sandbox-required`: força sandbox
- `infra-critical`: revisão reforçada e bloqueios extras
- `no-execute`: apenas análise

Resultado:
- `ExecutionPolicy` anexada ao job

### 3) Dispatcher
Decide:
- Qual executor (gateway) usar
- Workspace/branch
- Timeouts e limites
- Se precisa de “plan” antes (fase de planejamento)

Cria:
- `JobSpec`

### 4) RPC Dispatch
Operações:
- `jobs.create`
- `jobs.start`
- `jobs.stream` (logs)
- `jobs.result`

Persistência:
- Commander grava estados: `CREATED/RUNNING/...`

### 5) Review Engine
Inputs:
- `JobResult.diff`
- `filesChanged`
- checks (tests/lint)
- política do repo

Saídas:
- `ReviewReport` (score, riscos, itens)
- decisão: `approve_pr` / `request_changes` / `block`

### 6) Git Engine (Branch/Commit)
Estratégia recomendada:
- OpenClaw prepara mudanças em workspace
- Commander executa push (ou OpenClaw push, dependendo do modelo)
- Commits incluem:
  - referência à Issue
  - resumo
  - “Co-authored-by” opcional

### 7) PR Engine
Cria PR via GitHub API:
- título: `[AI] <issue title>`
- descrição: resumo + checklist
- labels herdadas + `ai-generated`
- reviewers: você
- assina com bot account

### 8) Guardrails
- Se `direct-commit`:
  - restringir paths (ex.: /docs, /ui)
  - exigir testes OK
  - gerar tag de rollback
- Se falha:
  - abrir comment com logs + próximo passo
  - opcional: rollback automático

### 9) Feedback Loop
Eventos de PR:
- alterações solicitadas → gera novo Job “fixup”
- merge → fechar issue e atualizar métricas

## Estados
`QUEUED → RUNNING → REVIEW_READY → PR_CREATED → WAITING_HUMAN → MERGED`

## Entregável mínimo (MVP)
- ingest + dispatcher + rpc start + review + PR
- logs visíveis no dashboard
