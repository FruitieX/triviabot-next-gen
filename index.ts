import TelegramBot, { Message } from 'node-telegram-bot-api';
import { getQuestion } from './api';

// tg://resolve?domain=triviabot_ng_bot
const token = '<your token here>';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg: Message) => {
  const question = await getQuestion();

  bot.sendMessage(msg.chat.id, JSON.stringify(question));
});
