require('dotenv').config({ path: `${__dirname}/.env` });

const Bot = require('node-telegram-bot-api');

const { TELEGRAM_HTTP_API: token } = process.env;

const bot = new Bot(token, { polling: true });

const onChatMessage = (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'oh, hello', {
        disable_notification: true,
    }).then(() => {
        console.log('replay sent');
    });
};

bot.on('message', (msg) => {
    console.log(msg);
    if(msg.text) {
        return onChatMessage(msg);
    }
});