import TelegramBot from "node-telegram-bot-api";


export const start = async (bot: TelegramBot) => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bem-vindo ao Bot da FURIA 🐯 feito por um fã!\n\nUse nossos comandos:\n\nAs próximas partidas 🎮: /jogos\nNosso time 👪: /lineup\nNotícias recentes📰: /noticias\nNossas redes 🛜: /social\n');
  });
}