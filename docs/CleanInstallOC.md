Instalação correta do OpenClaw (Ubuntu 22.04 LTS)
1️⃣ Sistema limpo
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl build-essential

2️⃣ Node correto (CRÍTICO)

OpenClaw exige:

Node >= 22.12.0


Instalar:

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs


Confirmar:

node -v


Tem que ser 22.x.

3️⃣ Criar usuário dedicado
sudo adduser openclaw
sudo usermod -aG sudo openclaw


Entrar:

su - openclaw

4️⃣ Clonar repositório correto (não npm global)
git clone https://github.com/openclaw/openclaw.git
cd openclaw


⚠️ Nunca usar npm install -g openclaw.

5️⃣ Instalar PNPM
npm install -g pnpm

6️⃣ Instalar dependências do monorepo
pnpm install


⚠️ Não apagar pnpm-lock.yaml.

7️⃣ Build
pnpm build


Se tudo ok → gera dist.

8️⃣ Rodar Gateway
pnpm gateway:dev


Ou:

pnpm openclaw gateway

9️⃣ Configurar modelo
pnpm openclaw configure


Ou:

pnpm openclaw config set ...


Requirements 

VPS limpa com Ubuntu 22.04 LTS
8 Gb RAM
2 CPU
100 Gb SSD
   