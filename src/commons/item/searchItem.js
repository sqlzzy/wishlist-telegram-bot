const fs = require("fs");
const { ERROR_PARSED_JSON, PATH_TO_FILE_USERS } = require("../constants.js");
const getItem = require("./getItem.js");

module.exports = async (value) => {
  let users;

  if (typeof value !== "string") {
    value = value.toString();
  }

  try {
    users = await JSON.parse(fs.readFileSync(PATH_TO_FILE_USERS));

    const result = getItem(users, value);

    return result;
  } catch (error) {
    console.error(ERROR_PARSED_JSON, error);
  }
};
