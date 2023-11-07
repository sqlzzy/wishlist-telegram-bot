const { MESSAGE_EMPTY_LIST } = require("../constants.js");
const getList = require("./getList.js");

async function showList(bot, chatId, typeOfItems, typeOfList, pathToFile) {
  let list;

  await getShownList(typeOfList, typeOfItems, pathToFile).then((res) => {
    list = res;
  });

  if (!list.length) {
    await bot.sendMessage(chatId, MESSAGE_EMPTY_LIST);

    return;
  }

  const { sendArrayItems } = require("./sendArrayItems.js");

  sendArrayItems(bot, chatId, list, typeOfItems);
}

async function getShownList(typeOfList, typeOfItems, pathToFile) {
  let shownList;

  await getList(typeOfList, typeOfItems, pathToFile).then(
    (res) => (shownList = res)
  );

  return shownList;
}

module.exports = showList;
