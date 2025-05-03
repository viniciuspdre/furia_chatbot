import TelegramBot from "node-telegram-bot-api";
import { start } from "../commands/start";
import { matches } from "../commands/matches";
import { lineUp } from "../commands/lineup";
import { social } from "../commands/social";
import { now } from "../commands/now";
import { news } from "../commands/news";
import { fan } from "../commands/fan";
import { stop } from "../commands/stop";

export const handleCommands = (bot: TelegramBot) => {
  start(bot);
  matches(bot);
  lineUp(bot);
  social(bot);
  now(bot);
  news(bot);
  fan(bot);
  stop(bot);
}