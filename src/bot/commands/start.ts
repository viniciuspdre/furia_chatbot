import TelegramBot from "node-telegram-bot-api";


export const start = async (bot: TelegramBot) => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bem-vindo ao Bot da FURIA feito por um fã!\nUse /jogos\n/lineup\n/noticias\n');
  });
}