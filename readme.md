# 🤖 Chatbot da FURIA (Telegram)

Este é um chatbot desenvolvido para fãs do time de CS:GO da FURIA. Ele oferece atualizações em tempo real, próximas partidas, notícias via Twitter, lineup do time, interações personalizadas e muito mais — tudo via Telegram.

---

## 📁 Estrutura do Projeto

```bash
src/ 
├── assets/                # Imagens e recursos estáticos 
├── bot/                   
│   ├── commands/          # Comandos do Telegram 
│   ├── handlers/          # Handler principal dos comandos 
│   └── index.ts           # Ponto de entrada do bot 
├── constants/             # Constantes globais 
├── models/                # Tipagens e modelos 
├── public/                # Frontend ou arquivos públicos 
├── services/              # Integrações com APIs externas (HLTV, Twitter, PandaScore) 
├── utils/                 # Funções auxiliares 
.env                       # Variáveis de ambiente
```
---

## 🔧 Funcionalidades

### `/start`
Mensagem de boas-vindas com descrição dos comandos disponíveis.

### `/jogos`
Consulta os próximos jogos da FURIA, utilizando a **API da PandaScore**.

### `/agora`
Mostra as partidas em tempo real da FURIA.

### `/lineup`
Exibe o lineup atual do time de CS da FURIA (HLTV ou dados fixos).

### `/noticias`
Busca as últimas postagens do **Twitter oficial da FURIA**.

### `/social`
Retorna links para as redes sociais oficiais do time.

### `/torcida`
Comando interativo com o fã, podendo futuramente incluir enquetes e quizzes.

---

## 🌐 APIs Utilizadas

### 🐼 PandaScore
Usada para obter partidas futuras e em andamento.

- Endpoint principal: `https://api.pandascore.co/csgo/matches`
- Requer autenticação via token.

### 📰 Twitter API (v2)
Utilizada para buscar os tweets mais recentes da conta da FURIA.

- Endpoint sugerido: `https://api.twitter.com/2/users/:id/tweets`
- Requer Bearer Token.

### 🔫 HLTV API
Pode ser usada para obter dados do lineup e estatísticas dos jogadores.

> Importante: Existem wrappers não-oficiais como [`hltv-api`](https://github.com/kyrylkov/HLTV) ou você pode consultar diretamente via scraping/API wrapper.

---

## 🔐 Variáveis de Ambiente (.env)

Antes de rodar o bot, crie um arquivo `.env` na raiz do projeto com as seguintes chaves:

```env
TELEGRAM_TOKEN=seu_token_do_bot_aqui

PANDASCORE_TOKEN=seu_token_pandascore
TWITTER_BEARER_TOKEN=seu_token_twitter
```

## ▶️ Como Rodar
### Instale as dependências:

```bash
npm install
```

### Compile o projeto TypeScript (caso aplicável):
```bash
npx tsc
```

### Inicie o bot:

```bash
npm run dev
```