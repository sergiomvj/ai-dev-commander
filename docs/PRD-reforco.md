PRD (reforço) — MVP + entregáveis mínimos

Você já tem o PRD base. Aqui está o checklist mínimo de “pronto para operar 24/7”:

MVP “operacional”

 Postgres + Redis + Qdrant rodando com volumes persistentes

 Agent Runtime rodando em loop e registrando eventos

 Tarefas criadas via dashboard (POST /tasks)

 Agente pega task, clona repo, cria branch, aplica patch (placeholder), roda pipeline, commita

 Em pr_first: push + PR automático

 Dashboard mostra projetos/tarefas/agentes e event stream

 Kill switch (command global kill + runtime respeita)

6) Políticas recomendadas (já deixe no projeto)

Padrão seguro (sugestão):

DCC_MODE=pr_first por padrão

“direct_push” somente para repos allowlisted e mudanças pequenas

limites:

MAX_FILES_CHANGED=25

MAX_LOC_CHANGED=1500

sempre rodar:

lint + build (e testes se existirem)

Como você quer “modificam código”:

ok, mas recomendo manter PR-first como padrão e liberar push direto por projeto via policies no Postgres.

7) Próximo passo no Antigravity (o que você faz agora)

Copiar essa estrutura para seu workspace do Antigravity

Subir infra no Easypanel (ou compose local no servidor)

Inserir projetos no Postgres (projects) e criar tasks (tasks)

Ver o runtime gerar branch/PR e o dashboard streamar eventos

Trocar apply_patch_placeholder() por:

gerador real de patch (LLM + regras + RAG do projeto)

com validação de limites (arquivos/linhas)