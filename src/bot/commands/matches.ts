import TelegramBot from "node-telegram-bot-api";
import { getNextMatches } from "../../services/hltvService";


export const matches = async (bot: TelegramBot) => {
  const nextMatches = await getNextMatches();
  const answer = nextMatches.map(match => `${match.team1?.name} vs ${match.team2?.name}`).join('\n');
  bot.onText(/\jogos/, (msg) => {
    bot.sendMessage(msg.chat.id, answer || 'Nenhum jogo encontrado.')
  })
}