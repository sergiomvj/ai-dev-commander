# 04-security-between-vps.md
# Segurança entre VPSs (token + firewall + rate limit)

## Objetivo
Garantir que somente o AI-Dev-Commander consiga falar com o OpenClaw Gateway.

## Camadas recomendadas

### 1) Rede (Firewall)
No servidor do Gateway:
- permitir 22 (SSH) do seu IP
- permitir 443 do mundo (se UI for pública) OU apenas do seu IP
- permitir acesso ao endpoint RPC apenas do IP do Commander

Exemplo UFW (ilustrativo):
- permitir 443
- restringir /ws ou /rpc via Nginx allow/deny (ver abaixo)

### 2) Reverse Proxy (Nginx)
- HTTPS obrigatório
- rate limiting
- allow/deny por IP
- headers websocket corretos

### 3) Token (Bearer)
- token longo e rotacionável
- armazenar somente no Commander (secrets)
- nunca expor no browser

### 4) TLS
- Let’s Encrypt
- HSTS recomendado
- opcional: mTLS (futuro)

## Nginx: allow/deny por IP (recomendado)
Você pode proteger o RPC assim:
- `/ws` e `/rpc` só do IP do Commander
- `/` (UI) só do seu IP (ou também restrito)

Exemplo:
```nginx
location /ws {
  allow <IP_DA_VPS_COMMANDER>;
  deny all;

  proxy_pass http://127.0.0.1:18789;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_set_header Host $host;
}

Rate Limit

Exemplo:

limit_req_zone $binary_remote_addr zone=rpc_zone:10m rate=10r/s;
location /ws {
  limit_req zone=rpc_zone burst=30 nodelay;
  ...
}

Log hygiene

mascarar Authorization

não logar payloads com secrets

separar logs do gateway

Hardening adicional

rodar OpenClaw como usuário dedicado

sem root

backups do state dir

auditoria periódica (openclaw security ... quando aplicável)

Entregável mínimo

TLS OK

allow/deny por IP para RPC

token obrigatório no Commander

rate limit básico