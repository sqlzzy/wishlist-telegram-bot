const buttonsKeyboard = require("./buttonsKeyboard.js");

module.exports = [
  [
    {
      text: buttonsKeyboard.itemKeyboard.deleteWish,
      callback_data: "deleteItem",
    },
    {
      text: buttonsKeyboard.itemKeyboard.grantedWish,
      callback_data: "grantedItem",
    },
  ],
];
