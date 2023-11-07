const buttonsKeyboard = require("./buttonsKeyboard.js");

function keyboardForMiddleList(currentPage) {
  return [
    [
      {
        text: buttonsKeyboard.listKeyboard.prev,
        callback_data: `prev:${currentPage}`,
      },
      {
        text: buttonsKeyboard.listKeyboard.next,
        callback_data: `next:${currentPage}`,
      },
    ],
  ];
}
function keyboardForLastList(currentPage) {
  return [
    [
      {
        text: buttonsKeyboard.listKeyboard.prev,
        callback_data: `prev:${currentPage}`,
      },
    ],
  ];
}

function keyboardForStartList(currentPage) {
  return [
    [
      {
        text: buttonsKeyboard.listKeyboard.next,
        callback_data: `next:${currentPage}`,
      },
    ],
  ];
}

module.exports = {
  keyboardForMiddleList,
  keyboardForLastList,
  keyboardForStartList,
};
