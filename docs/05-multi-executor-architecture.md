
---

```md
# 05-multi-executor-architecture.md
# Arquitetura Multi-Executor (vários OpenClaw Gateways)

## Objetivo
Permitir que o AI-Dev-Commander distribua jobs para múltiplos executores, aumentando throughput e isolamento.

## Por que multi-executor?
- separar por domínio (frontend/backend/infra)
- isolar risco (jobs “perigosos” em executor dedicado)
- escalar horizontalmente
- reduzir fila e latência

## Topologia
- Commander (1)
- Gateways (N), cada um com:
  - workspace isolado
  - policies locais
  - limites de concorrência

## Tipos de Executor
- `executor-frontend`
- `executor-backend`
- `executor-infra`
- `executor-sandbox-heavy`
- `executor-docs-only`

## Seleção (routing)
Critérios:
1) repo / org
2) labels (ex.: infra-critical → infra executor)
3) paths impactados (detecção por diff planejado)
4) carga atual (jobs running)
5) custo/latência

## Capacidade e Concurrency
- cada gateway: `maxConcurrentJobs`
- Commander: fila global
- estratégia: “least loaded” com afinidade por repo

## Failover
- se gateway down:
  - requeue
  - tentar próximo disponível
  - registrar incidente

## Observabilidade
- métricas por executor:
  - jobs/min
  - success rate
  - avg duration
  - tokens/custo

## Entregável mínimo
- registry de gateways
- roteamento simples por repo
- status dashboard por gateway
