const sendPage = require("./sendPage.js");

module.exports = (bot) => {
  bot.on("callback_query", function onCallbackQuery(callbackQuery) {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;
    const messageId = callbackQuery.message.message_id;
    let currentPage = parseInt(data.split(":")[1]);
    const regexpNextPage = /^next\:\d+/;
    const regexpPrevPage = /^prev\:\d+/;

    if (regexpNextPage.test(data)) {
      bot.deleteMessage(chatId, messageId);
      currentPage += 1;
      sendPage(bot, chatId, currentPage);
    } else if (regexpPrevPage.test(data)) {
      bot.deleteMessage(chatId, messageId);
      currentPage -= 1;
      sendPage(bot, chatId, currentPage);
    }

    bot.answerCallbackQuery(callbackQuery.id);
  });
};
