import TelegramBot from "node-telegram-bot-api";
import { liveFuriaMatch } from "../../services/getLiveFuriaMatchService";
import { isWatching, startWatcher, stopWatcher } from "../../utils/liveWatcher";

export const now = async (bot: TelegramBot) => {
  bot.onText(/\/agora/, async (msg) => {
    const chatId = msg.chat.id;
    
    if (await isWatching(chatId)) {
      await bot.sendMessage(chatId, "⏳ Já estou acompanhando o jogo para você!");
      return;
    }

    const partida = await liveFuriaMatch();
  
    if (!partida) {
      await bot.sendMessage(chatId, "❌ A FURIA não está jogando no momento.");
      return;
    }
  
    await bot.sendMessage(chatId, partida, { parse_mode: "Markdown" });

    let lastMessage = partida;

    const started = await startWatcher(chatId, async () => {
      const novaPartida = await liveFuriaMatch();

      if (!novaPartida) {
        await bot.sendMessage(chatId, "🏁 O jogo acabou ou foi pausado.");
        await stopWatcher(chatId);
        return;
      }

      if (novaPartida !== lastMessage) {
        await bot.sendMessage(chatId, novaPartida, { parse_mode: "Markdown" });
        lastMessage = novaPartida;
      }
    });

    if (started) {
      await bot.sendMessage(chatId, "🔔 Acompanhamento iniciado. Enviarei atualizações a cada 2 minutos. Use /parar para encerrar.");
    }
  });
}