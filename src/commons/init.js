const fs = require("fs");
const mainKeyboard = require("../keyboards/mainKeyboard.js");
const { getChatId, getUsername } = require("./helper.js");
const createFolder = require("./file/createFolder.js");
const createFile = require("./file/createFile.js");
const { MESSAGE_WELCOME } = require("./constants.js");

function init(bot, msg) {
  const userData = [{ username: getUsername(msg), wishes: [] }];

  const pathToFolder = "./src/json";
  const nameFile = "users.json";
  const pathToFile = `${pathToFolder}/${nameFile}`;

  if (!fs.existsSync(pathToFolder) && !fs.existsSync(pathToFile)) {
    createFolder(pathToFolder);

    createFile(`${pathToFolder}/${nameFile}`, JSON.stringify(userData));
  }

  bot.sendMessage(getChatId(msg), MESSAGE_WELCOME, {
    reply_markup: {
      keyboard: mainKeyboard,
    },
  });
}

module.exports = init;
