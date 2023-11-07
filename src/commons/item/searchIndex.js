const fs = require("fs");
const { ERROR_PARSED_JSON, PATH_TO_FILE_USERS } = require("../constants.js");
const getIndex = require("./getIndex.js");

module.exports = async (value) => {
  let users;

  if (typeof value !== "string") {
    value = value.toString();
  }

  try {
    users = await JSON.parse(fs.readFileSync(PATH_TO_FILE_USERS));

    const result = getIndex(users, value);

    return result;
  } catch (error) {
    console.error(ERROR_PARSED_JSON, error);
  }
};
