import TelegramBot from "node-telegram-bot-api";
import { stopWatcher } from "../../utils/liveWatcher";

export const stop = async (bot: TelegramBot) => {
  bot.onText(/\/parar/, async (msg) => {
    const chatId = msg.chat.id;

    const stopped = await stopWatcher(chatId);
    if (stopped) {
      await bot.sendMessage(chatId, "🛑 Acompanhamento encerrado.");
    } else {
      await bot.sendMessage(chatId, "🤔 Nenhum acompanhamento ativo para esse chat.");
    }
  });
};