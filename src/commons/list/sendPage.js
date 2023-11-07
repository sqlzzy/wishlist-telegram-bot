const {
  keyboardForMiddleList,
  keyboardForLastList,
  keyboardForStartList,
} = require("../../keyboards/listKeyboards.js");
const searchIndex = require("../item/searchIndex.js");
const { MESSAGE_DISPLAY_BUTTONS_LIST } = require("../constants.js");

let list = [];
let typeItems;

module.exports = async (bot, chatId, currentPage, items, typeOfItems) => {
  if (items) {
    list = items;
  }

  if (typeOfItems) {
    typeItems = typeOfItems;
  }

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageItems = list.slice(startIndex, endIndex);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  let message = "";
  let indexItem;
  let iconItem = typeItems === "granted" ? "✅" : "⭐";

  for (let i = 0; i < pageItems.length; i++) {
    await getIndexOfSearchedItem(pageItems[i].id).then(
      (res) => (indexItem = res)
    );

    message += `/wishes_${indexItem} ${iconItem} ${pageItems[i].text}\n\n`;
  }

  const keyboard =
    currentPage === 1
      ? keyboardForStartList(currentPage)
      : currentPage === totalPages
      ? keyboardForLastList(currentPage)
      : currentPage > 1 && currentPage < totalPages
      ? keyboardForMiddleList(currentPage)
      : [];

  if (list.length > 10) {
    message += `Страница ${currentPage} из ${totalPages}:\n\n`;

    bot.sendMessage(chatId, message, {
      reply_markup: {
        inline_keyboard: keyboard,
      },
      disable_web_page_preview: true,
    });
  } else {
    message += MESSAGE_DISPLAY_BUTTONS_LIST;
    bot.sendMessage(chatId, message, {
      disable_web_page_preview: true,
    });
  }
};

async function getIndexOfSearchedItem(value) {
  let indexOfSearchedItem;

  await searchIndex(value).then((res) => (indexOfSearchedItem = res));

  return indexOfSearchedItem;
}
