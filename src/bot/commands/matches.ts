import TelegramBot from "node-telegram-bot-api";
import { getNextMatches } from "../../services/hltvService";
import { upComingFuriaMatches } from "../../services/getUpComingMatchesService";


export const matches = async (bot: TelegramBot) => {
  bot.onText(/\/jogos/, async (msg) => {
    const chatId = msg.chat.id;
  
    const partidas = await upComingFuriaMatches(5);
  
    if (partidas === null || partidas.length === 0) {
      await bot.sendMessage(chatId, "❌ Nenhuma partida futura da FURIA encontrada no momento.");
      return;
    }
  
    const responseText = `📅 *Próximas partidas da FURIA:*\n\n${partidas.join("\n")}`;
    await bot.sendMessage(chatId, responseText, { parse_mode: "Markdown" });
  });
}