const fs = require("fs");
const { ERROR_PARSED_JSON } = require("../constants.js");

module.exports = async (typeOfList, typeOfItems, pathToFile) => {
  let users;
  let list;

  try {
    users = await JSON.parse(fs.readFileSync(pathToFile));

    users.forEach((user) => {
      const items = user[typeOfList];

      const grantedItems = [];
      const unrealizedItems = [];

      items.forEach((item) => {
        if (+item.isGranted === 1) {
          grantedItems.push(item);
        } else if (+item.isGranted === 0) {
          unrealizedItems.push(item);
        }
      });

      list = typeOfItems === "granted" ? grantedItems : unrealizedItems;
    });
  } catch (error) {
    console.error(ERROR_PARSED_JSON, error);
  }

  return list;
};
