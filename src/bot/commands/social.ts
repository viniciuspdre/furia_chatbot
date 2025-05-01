import TelegramBot from "node-telegram-bot-api";
import { INSTAGRAM, LOJA, TWITCH, TWITTER } from "../../constants/socialConstants";


export const social = async (bot: TelegramBot) => {
  bot.onText(/\/social/, (msg) => {
    bot.sendMessage(msg.chat.id, `Acesse nosso Instagram 📸: ${INSTAGRAM}\nAcesse nosso X 🐦: ${TWITTER}\nAcesse nossa Twitch 📺: ${TWITCH}\nAcesse nossa loja 🛍️: ${LOJA}`)
  })
}