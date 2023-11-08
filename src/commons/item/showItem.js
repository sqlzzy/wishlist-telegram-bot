const unrelizedItemKeyboard = require("../../keyboards/unrelizedItemKeyboard.js");
const grantedItemKeyboard = require("../../keyboards/grantedItemKeyboard.js");
const { getChatId } = require("../helper.js");
const { MESSAGE_MANAGE_ITEM } = require("../constants.js");

module.exports = async (bot, msg, item) => {
  const typeOfItem = +item?.isGranted ? "granted" : "unrelized";

  const keyboard =
    typeOfItem === "granted" ? grantedItemKeyboard : unrelizedItemKeyboard;
  const icon = typeOfItem === "granted" ? "✅" : "⭐";

  await bot.sendMessage(getChatId(msg), MESSAGE_MANAGE_ITEM);
  await bot.sendMessage(getChatId(msg), `${icon} ${item?.text}`, {
    reply_markup: {
      inline_keyboard: keyboard,
    },
    disable_web_page_preview: true,
  });
};
