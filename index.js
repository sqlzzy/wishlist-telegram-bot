const TelegramBot = require("node-telegram-bot-api");
const { getUsername, getChatId } = require("./src/commons/helper.js");
const init = require("./src/commons/init.js");
const { ALLOWED_USERNAMES, TOKENS } = require("./src/commons/constants.js");
const initMessages = require("./src/messages/index.js");
const handleListButtons = require("./src/commons/list/handleListButtons.js");
const handleItemButtons = require("./src/commons/item/handleItemButtons.js");

const bot = new TelegramBot(TOKENS, { polling: true });

bot.onText(/\/start/, (msg) => {
  const username = getUsername(msg);

  if (ALLOWED_USERNAMES.includes(username)) {
    init(bot, msg);
  } else {
    bot.sendMessage(
      getChatId(msg),
      `Извините, ${username}, но у вас нет доступа к этому боту!`
    );
  }
});

initMessages(bot);
handleListButtons(bot);
handleItemButtons(bot);

bot.on("polling_error", (error) => {
  console.log(error);
});
