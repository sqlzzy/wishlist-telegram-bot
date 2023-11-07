const sendPage = require("./sendPage.js");

async function sendArrayItems(bot, chatId, items, typeOfItems) {
  let currentPage = 1;

  sendPage(bot, chatId, currentPage, items, typeOfItems);
}

module.exports = {
  sendArrayItems,
};
