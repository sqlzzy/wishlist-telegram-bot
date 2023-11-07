const { PATH_TO_FILE_USERS } = require("../commons/constants.js");
const { getChatId } = require("../commons/helper.js");
const showList = require("../commons/list/showList.js");

async function initShowWishes(bot, msg, typeOfItems) {
  handleShowList(
    bot,
    getChatId(msg),
    typeOfItems,
    "wishes",
    PATH_TO_FILE_USERS
  );
}

function handleShowList(
  bot,
  chatId,
  typeOfItems,
  typeOfList,
  PATH_TO_FILE_USERS
) {
  showList(bot, chatId, typeOfItems, typeOfList, PATH_TO_FILE_USERS);
}

module.exports = initShowWishes;
