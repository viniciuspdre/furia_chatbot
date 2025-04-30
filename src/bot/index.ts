import TelegramBot from 'node-telegram-bot-api';
import { handleCommands } from './handlers/handleCommands';

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!, { polling: true });

handleCommands(bot);