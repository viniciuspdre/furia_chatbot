import TelegramBot from "node-telegram-bot-api";
import { liveFuriaMatch } from "../../services/getLiveFuriaMatchService";

export const now = async (bot: TelegramBot) => {
  bot.onText(/\/agora/, async (msg) => {
    const chatId = msg.chat.id;
  
    const partida = await liveFuriaMatch();
  
    if (!partida) {
      await bot.sendMessage(chatId, "❌ A FURIA não está jogando no momento.");
      return;
    }
  
    await bot.sendMessage(chatId, partida, { parse_mode: "Markdown" });
  });
}