const fs = require("fs");
const {
  ERROR_PARSED_JSON,
  LIST_TYPES,
  PATH_TO_FILE_USERS,
} = require("../constants.js");

function updatedItems(items, textOfGrantedItem) {
  return items.map((item) => {
    if (item.text === textOfGrantedItem) {
      return { text: textOfGrantedItem, isGranted: "1", id: item.id };
    } else {
      return item;
    }
  });
}

function deleteIcon(text) {
  return text.replace(/⭐ /gm, "");
}

async function grantedItem(bot, chatId, username, typeOfList, text) {
  try {
    const users = await JSON.parse(fs.readFileSync(PATH_TO_FILE_USERS));

    const textOfGrantedItem = deleteIcon(text);

    const updatedUsersData = users.reduce((result, user) => {
      const items =
        user.username === username
          ? updatedItems(user[typeOfList], textOfGrantedItem)
          : user[typeOfList];

      result.push({
        username: user.username,
        wishes: items,
      });

      return result;
    }, []);

    fs.writeFileSync(PATH_TO_FILE_USERS, JSON.stringify(updatedUsersData));

    bot.sendMessage(
      chatId,
      `${LIST_TYPES[typeOfList].item} *${textOfGrantedItem}* исполнено!`,
      {
        disable_web_page_preview: true,
        parse_mode: "Markdown",
      }
    );
  } catch (error) {
    console.error(ERROR_PARSED_JSON, error);
  }
}

module.exports = grantedItem;
