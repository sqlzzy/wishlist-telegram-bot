const fs = require("fs");
const { ERROR_PARSED_JSON, LIST_TYPES } = require("../constants.js");
const getTextOfItems = require("./getTextOfItems.js");

async function addItem(bot, chatId, username, type, text, pathToFile) {
  let users;

  try {
    users = await JSON.parse(fs.readFileSync(pathToFile));

    const updatedUsersData = [];

    const id = generateUniqueId();

    users.forEach((user) => {
      const items = getTextOfItems(user[type]);

      if (user.username === username && !items.includes(text)) {
        const newItem = { text: text, isGranted: "0", id: id };

        user[type].push(newItem);

        bot.sendMessage(
          chatId,
          `Добавлено ${LIST_TYPES[type].item.toLowerCase()}: *${text}*`,
          {
            parse_mode: "Markdown",
            disable_web_page_preview: true,
          }
        );
      } else if (user.username === username && items.includes(text)) {
        bot.sendMessage(
          chatId,
          `_${text}_ уже есть в ${LIST_TYPES[type].items}`,
          {
            parse_mode: "Markdown",
            disable_web_page_preview: true,
          }
        );
      }

      updatedUsersData.push(user);
    });

    fs.writeFileSync(pathToFile, JSON.stringify(updatedUsersData));
  } catch (error) {
    console.error(ERROR_PARSED_JSON, error);
  }
}

function generateUniqueId() {
  const random = Math.random().toString().substring(2, 6);

  return random;
}

module.exports = addItem;
