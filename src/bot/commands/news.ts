import TelegramBot from "node-telegram-bot-api";
import { getLastestFuriaTweets } from "../../services/getLatestTweets";


export const news = async (bot: TelegramBot) => {
  bot.onText(/\/noticias/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '📰 Buscando as últimas notícias da FURIA no Twitter...')
    
    const tweets = await getLastestFuriaTweets();

    if(!tweets || tweets.length === 0) {
      bot.sendMessage(chatId, '❌ Não consegui encontrar notícias recentes da FURIA.');
      return;
    }

    tweets.forEach((tweet) => {
      const tweetLink = `https://twitter.com/FURIA/status/${tweet.id}`;
      const message = `🐾 *FURIA* postou:\n\n${tweet.text}\n\n🔗 [Ver no Twitter](${tweetLink})`;

      bot.sendMessage(chatId, message, { parse_mode: 'Markdown' })
    })
  });
}