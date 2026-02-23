# 06-enterprise-persistence.md
# Persistence Enterprise (Workstation / Estado / Backups)

## Objetivo
Garantir que a “vida” do agente e do sistema não se perca:
- persistência contínua
- redundância (2ª VPS)
- snapshots zip
- rollback rápido
- versionamento por tags
- commits automáticos dos arquivos vitais

## Diretórios vitais (OpenClaw)
- `~/.openclaw/` (state principal)
- `~/.openclaw-dev/` (se usar dev profile)
- `~/.openclaw/workspace-*` (workspaces)
- logs (ex.: `/tmp/openclaw/...` → opcional)

## Arquivos vitais (Workstation MD)
Conjunto mínimo recomendado (ajuste conforme seu padrão):
- `SOUL.md`
- `MEMORY.md`
- `HEARTBEAT.md`
- `TASKS.md`
- `AGENTS.md`
- `SYSTEM.md`
- `CONTEXT.md`

## Rotinas de commit
### A) Diário (cron)
- todo dia 02:00
- commit com mensagem padronizada
- push para repo “workstation-state”

### B) Por comando
- comando interno no Commander: “/persist now”
- ou botão no dashboard

### C) Gatilhos automáticos
- antes de execução de job
- antes de abrir PR
- antes de merge (opcional)
- ao detectar mudanças nos MDs

## Snapshots zip
- semanal (ou diário se quiser)
- arquivo: `snapshot-YYYY-MM-DD-HHMM.zip`
- inclui:
  - MDs vitais
  - configs (sanitizadas)
  - manifest de versão

## Backup para segunda VPS
- rsync incremental
- retenção: 7 diários, 4 semanais, 6 mensais (exemplo)

## Rollback
- “rollback para tag X”
- restaura MDs + configs + (opcional) workspace
- registra evento de rollback

## Padrão de versionamento
- tags: `state-YYYYMMDD-HHMM`
- commits: `chore(persist): heartbeat + memory sync`

## Entregável mínimo (MVP)
- job “persist daily”
- endpoint/ação “persist now”
- commit+push de MDs vitais
- snapshot zip manual

## Entregável enterprise (nível máximo)
- replicação 2ª VPS + retenção
- snapshot automático
- rollback automático
- commit antes de PR e antes de execução
- alertas (falha de backup)
