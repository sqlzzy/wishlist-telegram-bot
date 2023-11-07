const searchItem = require("./searchItem.js");
const showItem = require("./showItem.js");
const deleteItem = require("./deleteItem.js");
const grantedItem = require("./grantedItem.js");
const { getChatId, getUsername } = require("../helper.js");

module.exports = (bot) => {
  let idItem;
  let typeOfList;
  let item;

  bot.onText(/\/(\w+)\_(\d+)/, async (msg, match) => {
    idItem = match[2];
    typeOfList = match[1];

    await getSearchedItem(idItem).then((res) => (item = res));

    showItem(bot, msg, item, typeOfList);
  });

  bot.on("callback_query", function onCallbackQuery(callbackQuery) {
    const chatId = getChatId(callbackQuery.message);
    const data = callbackQuery.data;
    const username = getUsername(callbackQuery);
    const text = callbackQuery.message.text;

    if (data === "deleteItem") {
      deleteItem(bot, chatId, username, typeOfList, text);
    } else if (data === "grantedItem") {
      grantedItem(bot, chatId, username, typeOfList, text);
    }

    bot.answerCallbackQuery(callbackQuery.id);
  });
};

async function getSearchedItem(value) {
  let searchedItem;

  await searchItem(value).then((res) => (searchedItem = res));

  return searchedItem;
}
