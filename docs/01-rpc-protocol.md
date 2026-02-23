# 01-rpc-protocol.md
# Protocolo RPC (Commander ↔ OpenClaw Gateway)

## Objetivo
Padronizar a comunicação entre o **AI-Dev-Commander** (orquestrador) e o **OpenClaw Gateway** (executor) usando RPC via **WebSocket** (ou HTTP fallback quando aplicável).

## Conceitos
- **RPC**: chamadas estruturadas “procedimento remoto” (Commander chama uma ação no Gateway).
- **Job**: unidade de trabalho (derivada de Issue/Task).
- **Workspace**: diretório isolado de execução no OpenClaw (por repo/projeto/branch).
- **Policy**: regras do Commander (labels, risco, sandbox, permissões, timeouts).
- **Approval**: autorização explícita para executar passos “perigosos” (ex.: comandos shell).

## Transporte
### WebSocket (primário)
- Endpoint: `wss://<gateway-domain>/ws` (recomendado via reverse proxy)
- Autenticação: token/bearer no header ou query param (ver Segurança)
- Mensagens JSON (UTF-8)
- Recomendação: ping/pong e reconexão exponencial

### HTTP (fallback opcional)
- Endpoint: `https://<gateway-domain>/rpc`
- Útil para chamadas pontuais sem streaming

## Autenticação e Segurança
- **Bearer Token** obrigatório (rotacionável).
- Permitir acesso **apenas** do IP da VPS do Commander via firewall (nível rede).
- Rate limit no reverse proxy.
- Logs com scrub de secrets.

## Envelope de Mensagem (todas as chamadas)
```json
{
  "v": "1.0",
  "id": "req_01J...ULID",
  "type": "request",
  "ts": "2026-02-18T12:00:00Z",
  "op": "jobs.create",
  "auth": { "token": "..." },
  "payload": {}
}


Resposta padrão
{
  "v": "1.0",
  "id": "req_01J...ULID",
  "type": "response",
  "ts": "2026-02-18T12:00:02Z",
  "ok": true,
  "result": {},
  "error": null
}

Erros (estrutura)
{
  "code": "E_POLICY_DENY",
  "message": "Sandbox required by policy.",
  "details": { "label": "sandbox-required" }
}

Operações RPC (mínimo viável)
1) gateway.ping

Verifica saúde e versão.
Request payload

{ "echo": "hello" }


Response

{ "echo": "hello", "gatewayVersion": "2026.2.18", "uptimeSec": 1234 }

2) jobs.create

Cria Job no Gateway (não executa ainda, se policy exigir).
Payload

{
  "job": {
    "jobId": "job_01J...",
    "repo": "org/repo",
    "issue": { "number": 142, "title": "..." },
    "branch": "ai/issue-142",
    "workspace": { "name": "org-repo", "mode": "isolated" },
    "policy": {
      "sandbox": true,
      "allowNetwork": false,
      "timeoutSec": 1800,
      "requireApprovals": true
    },
    "instructions": {
      "goal": "Implement feature X",
      "acceptance": ["...", "..."],
      "constraints": ["No breaking changes", "Run tests"]
    }
  }
}


Result

{ "jobId": "job_01J...", "status": "CREATED" }

3) jobs.start

Inicia execução do Job.
Payload

{ "jobId": "job_01J..." }


Result

{ "jobId": "job_01J...", "status": "RUNNING" }

4) jobs.status

Consulta estado.
Result

{
  "jobId": "job_01J...",
  "status": "RUNNING",
  "step": "modify_code",
  "progress": 0.42
}

5) jobs.stream

Streaming de logs/events (WebSocket).
Event

{
  "type": "event",
  "op": "jobs.event",
  "payload": { "jobId": "job_01J...", "level": "info", "msg": "Running tests..." }
}

6) jobs.result

Retorna artefatos: resumo, diff, arquivos alterados, comandos rodados.
Result (exemplo)

{
  "jobId": "job_01J...",
  "status": "COMPLETED",
  "summary": "Implemented X, added tests Y.",
  "git": {
    "base": "main",
    "branch": "ai/issue-142",
    "commit": "abc123",
    "filesChanged": 6
  },
  "diff": { "format": "unified", "content": "..." },
  "checks": { "tests": "pass", "lint": "pass" },
  "approvals": [
    { "kind": "shell", "requested": "rm -rf ...", "approved": false }
  ]
}

7) approvals.list / approvals.approve

Para passos sensíveis.
Approve payload

{
  "jobId": "job_01J...",
  "approvalId": "appr_01J...",
  "decision": "approve",
  "reason": "Allowed by label direct-commit"
}

Estados do Job

CREATED → QUEUED → RUNNING → REVIEW_READY → COMPLETED
Erros:
FAILED, TIMEOUT, CANCELLED, ROLLED_BACK

Idempotência

jobs.create é idempotente por jobId.

jobs.start idem (se já RUNNING/COMPLETED, não reinicia).

Observabilidade

jobId sempre em logs

logs estruturados JSON

métricas por operação (latência, erro)

Compatibilidade

Versionamento no campo v. Commander deve recusar v incompatível.