
---

```md
# 02-openclaw-client-module.md
# Módulo OpenClawClient (Next.js / AI-Dev-Commander)

## Objetivo
Implementar um cliente robusto para conversar com o OpenClaw Gateway via RPC, com:
- conexão WebSocket segura (wss)
- reconexão e backoff
- timeout por operação
- streaming de eventos
- fila e correlação por request id
- suporte a múltiplos executores (multi-gateway)

## Estrutura sugerida (frontend+backend)
- **Next.js App Router**
  - UI chama **API routes** internas do Commander
  - API routes chamam `OpenClawClient` (server-side)
- Nunca conectar o browser direto no gateway (evita expor tokens).

## Arquivos (sugestão)
/src/lib/openclaw/
- `OpenClawClient.ts`
- `types.ts`
- `errors.ts`
- `retry.ts`
- `registry.ts` (multi-executor)
- `schemas.ts` (validação zod opcional)

## Tipos essenciais
- `GatewayTarget`: { id, name, wsUrl, httpUrl?, tokenRef, allowedRepos[] }
- `RPCRequest`, `RPCResponse`, `GatewayEvent`
- `JobSpec`, `JobStatus`, `JobResult`

## Fluxo de uso (server-side)
1) Dispatcher escolhe o `GatewayTarget` (por repo/labels/carga)
2) `client.connect(target)`
3) `client.request("jobs.create", payload)`
4) `client.request("jobs.start", {jobId})`
5) assina `client.subscribe(jobId)` para logs
6) `client.request("jobs.result", {jobId})`

## Requisitos não-funcionais
- Retries: 2 tentativas para `ping/status`, 1 para `create/start`
- Timeout: `create` 10s, `start` 10s, `result` 30s (ajustável)
- Concurrency: 1 conexão por gateway + multiplex por job
- Persistência: store de estados no DB do Commander (fonte de verdade)

## Implementação mínima (pseudocódigo)
- Mapa `pendingRequests: Map<id, {resolve,reject,timeout}>`
- Ao receber mensagem:
  - se `type=response` e id no mapa → resolve/reject
  - se `type=event` → emitir para listeners (jobId)

## Segurança
- Token do gateway armazenado no Commander:
  - `.env` ou secret store (recomendado)
- Nunca logar token
- mTLS opcional (futuro)

## Multi-executor
`registry.ts` mantém lista de gateways e política de seleção:
- por repo
- por capacidade
- por tipo de tarefa (frontend/backend/infra)

## Testes
- unit: parse/validate envelopes, timeouts, retries
- integration: mock gateway (ws server) para simular events/latência

## Entregável mínimo
- `OpenClawClient` com `request()` e `subscribe(jobId)`
- Suporte a 1 gateway
- Erros padronizados
