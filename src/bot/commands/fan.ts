import TelegramBot from "node-telegram-bot-api";


export const fan = async (bot: TelegramBot) => {
  bot.onText(/\/torcida/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Torcida ativada! Mande seus áudios, mensagens, gifs ou stickers para apoiar a FURIA!`);
  });
  
  // Receber áudios
  bot.on('voice', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🎧 Recebido! Obrigado por mandar seu áudio para apoiar a FURIA!');
  });
  
  // Receber mensagens de texto (sem comando)
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // Ignorar se for comando
    if (msg.text && msg.text.startsWith('/')) return;
  
    if (msg.text) {
      bot.sendMessage(chatId, '📣 Valeu pela sua mensagem! A FURIA agradece o apoio!');
    }
  
    if (msg.sticker) {
      bot.sendMessage(chatId, '🔥 Sticker da torcida recebido! Vamos com tudo!');
    }
  
    if (msg.animation) {
      bot.sendMessage(chatId, '🎬 GIF da torcida recebido! Vai FURIA!');
    }
  });
}