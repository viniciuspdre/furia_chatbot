import TelegramBot from "node-telegram-bot-api";
import { start } from "../commands/start";
import { matches } from "../commands/matches";
import { lineUp } from "../commands/lineup";

export const handleCommands = (bot: TelegramBot) => {
  start(bot);
  matches(bot);
  lineUp(bot);
}