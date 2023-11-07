const {
  PATH_TO_FILE_USERS,
  MESSAGE_ADD_WISH,
} = require("../commons/constants.js");
const { getChatId, getUsername } = require("../commons/helper.js");
const addItem = require("../commons/item/addItem.js");

module.exports = (bot, msg) => {
  bot.sendMessage(getChatId(msg), MESSAGE_ADD_WISH, handleAddItem(bot, msg));
  handleAddItem = () => {};
};

function handleAddItem(bot, _msg) {
  bot.onText(
    /\/wish (.+)/,
    (msg, [, match]) => {
      addItem(
        bot,
        getChatId(msg),
        getUsername(msg),
        "wishes",
        match,
        PATH_TO_FILE_USERS
      );
    },
    {
      disable_web_page_preview: true,
    }
  );
}
