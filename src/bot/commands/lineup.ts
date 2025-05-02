import TelegramBot from "node-telegram-bot-api";
import { getCurrentLineUp } from "../../services/hltvService";
import { FullTeam } from "hltv";


export const lineUp = async (bot: TelegramBot) => {
  const line: FullTeam = await getCurrentLineUp();
  const answer = line.players.map(p => `${p.name}`).join('\n');
  bot.onText(/\lineup/, (msg) => {
    bot.sendMessage(msg.chat.id, `Nosso jogadores e coaches atualmente são👪:\n\n${answer}` || 'Não há players na FURIA.')
  })
}