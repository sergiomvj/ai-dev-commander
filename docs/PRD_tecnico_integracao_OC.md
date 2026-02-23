PRD Técnico da Integração
📘 PRD — Integração AI-Dev-Commander ↔ OpenClaw
1. Objetivo

Criar uma arquitetura distribuída onde:

AI-Dev-Commander atua como orquestrador central

OpenClaw atua como executor técnico autônomo

Execuções são supervisionadas

Toda modificação passa por revisão

Persistência é redundante

Sistema opera 24/7

2. Proposta de Valor

Desenvolvimento contínuo

Supervisão automática

Redução de erro humano

PR sempre revisado

Controle por labels

Logs estruturados

Persistência tripla

3. Arquitetura Geral
VPS 1 – AI-Dev-Commander
│
├── GitHub Webhook Listener
├── Issue Ingest Engine
├── Label Policy Engine
├── Dispatcher
├── Reviewer Agent
├── PR Creator
├── Persistence Engine
└── Metrics Engine

VPS 2 – OpenClaw Executor
│
├── Gateway (RPC)
├── Workspace Isolado
├── Agent Runtime
├── Sandbox
├── MD Lifecycle Files
└── Log Engine

4. Componentes da Integração
4.1 GitHub Issue Ingest

Trigger:

Nova issue

Mudança de label

Comentário com comando

Fluxo:

Webhook recebido

Validação de assinatura

Parse da label

Registro no banco interno

4.2 Label Policy Engine

Exemplo de labels:

Label	Comportamento
auto-pr	Sempre abrir PR
direct-commit	Permitir commit direto
sandbox-required	Executar isolado
infra-critical	Revisor obrigatório
no-execute	Apenas análise
4.3 Dispatcher

Responsável por:

Escolher OpenClaw target

Criar payload RPC

Definir timeout

Registrar job

4.4 RPC Engine

Comunicação via:

ws://openclaw-vps:19001


Payload padrão:

{
  "job_id": "job_123",
  "mode": "execute",
  "workspace": "project-x",
  "instructions": "...",
  "branch": "feature/issue-142"
}


Resposta esperada:

{
  "job_id": "job_123",
  "status": "completed",
  "files_changed": [...],
  "diff": "...",
  "execution_time": 32
}

4.5 Reviewer Engine

Antes de qualquer PR:

Analisa diff

Verifica padrões

Valida segurança

Aplica checklist arquitetural

4.6 PR Engine

Criação automática via GitHub API:

Cria branch

Push das mudanças

Abre PR

Associa issue

Comenta com resumo técnico

4.7 Persistence Engine

Arquivos vitais monitorados:

SOUL.md
MEMORY.md
HEARTBEAT.md
TASKS.md
AGENTS.md
SYSTEM.md
CONTEXT.md


Rotinas:

Commit automático diário

Commit antes de execução

Commit antes de PR

Snapshot zip semanal

Backup para segunda VPS

Tag por milestone

4.8 Health & Metrics

KPIs internos:

Execução média por tarefa

Taxa de sucesso

Tempo médio de PR

Correções pós-review

Rollbacks

Uso de tokens

5. Segurança

Gateway protegido por token

Reverse proxy HTTPS

Firewall restrito

Rate limit Nginx

Execução sandboxed

Nunca rodar como root

6. Concurrency Model

Máximo 3 jobs simultâneos por OpenClaw

Fila interna FIFO

Timeout de 15 minutos

Retry automático 1x

7. Estados do Job
CREATED
QUEUED
DISPATCHED
EXECUTING
REVIEWING
PR_CREATED
MERGED
FAILED
ROLLED_BACK

8. Requisitos Técnicos
Commander

Node 22

WebSocket client

GitHub API client

PostgreSQL (opcional)

Redis (opcional)

OpenClaw

Node 22

Gateway ativo

Workspace isolado

Sandbox ativo

9. Entregáveis Mínimos (MVP)

Issue ingest

RPC dispatch

OpenClaw execução

PR automático

Commit persistence básico

Health monitor

10. Roadmap Pós-MVP

Multi-OpenClaw scaling

Inteligência de distribuição

Memory global compartilhada

Metrics dashboard

Alertas Slack

Budget control de tokens

🧠 Conclusão Arquitetural

Você está construindo:

Uma empresa digital autônoma.

Commander = CEO
OpenClaw = Engenheiro
GitHub = Departamento jurídico
Persistence = Memória corporativa


🧠 Arquitetura Explicada

Você tem dois papéis distintos:

🧠 AI-Dev-Commander (Next.js)

Orquestrador

Policy engine

GitHub integration

Dispatcher

Reviewer

Persistence manager

Dashboard

Métricas

Decisão estratégica

🔧 OpenClaw Gateway (Node runtime)

Executor

Manipulador de workspace

Sandbox

Execução de código

Modificação de arquivos

Agente LLM ativo

🔌 Como eles se comunicam?

Via RPC (WebSocket).

AI-Dev-Commander  →  WebSocket  →  OpenClaw Gateway


O Commander envia instruções.
O Gateway executa.
O Gateway responde.


Modelo Empresarial Correto
VPS 1 ( ou maquina local )
AI-Dev-Commander (Next.js + API + DB)

VPS 2 
OpenClaw Gateway

(opcional)
VPS 3
Outro OpenClaw Executor


O Commander pode controlar vários executores.

🔁 Então como funciona tecnicamente?

Dentro do AI-Dev-Commander você terá:

class OpenClawClient {
  connect(wsUrl)
  dispatchJob(payload)
  awaitResult(jobId)
}


Isso é apenas um WebSocket client.

Não é o Gateway.

🔐 Segurança

O Gateway deve:

Rodar atrás de reverse proxy

Ter token de autenticação

Ter firewall restrito

Aceitar apenas IP da VPS do Commander

💡 Analogia simples

Commander = Kubernetes control plane

OpenClaw = worker node

Você não coloca worker dentro do control plane.

🧠 Quando faria sentido embutir?

Apenas se:

Ambiente local de teste

Sistema pequeno

Sem isolamento

Sem múltiplos agentes