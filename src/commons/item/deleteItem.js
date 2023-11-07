const fs = require("fs");
const {
  ERROR_PARSED_JSON,
  LIST_TYPES,
  PATH_TO_FILE_USERS,
} = require("../constants.js");

function filteredItems(items, textOfDeletelyItem) {
  return items.filter((item) => textOfDeletelyItem !== item.text);
}

function deleteSubstring(text) {
  return text.replace(/(⭐|✅) /gm, "");
}

async function deleteItem(bot, chatId, username, typeOfList, text) {
  const textOfDeletelyItem = deleteSubstring(text);
  let users;

  try {
    users = await JSON.parse(fs.readFileSync(PATH_TO_FILE_USERS));

    const updatedUsersData = users.reduce((result, user) => {
      const items =
        user.username === username
          ? filteredItems(user[typeOfList], textOfDeletelyItem)
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
      `${LIST_TYPES[typeOfList].item} *${textOfDeletelyItem}* удалено!`,
      {
        disable_web_page_preview: true,
        parse_mode: "Markdown",
      }
    );
  } catch (error) {
    console.error(ERROR_PARSED_JSON, error);
  }
}

module.exports = deleteItem;
