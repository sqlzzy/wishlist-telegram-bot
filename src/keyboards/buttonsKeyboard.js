const {
  TEXT_BUTTON_ADD_WISH,
  TEXT_BUTTON_DELETE_WISH,
  TEXT_BUTTON_GRANTED_WISH,
  TEXT_BUTTON_UNREALIZED_WISHES,
  TEXT_BUTTON_GRANTED_WISHES,
  TEXT_BUTTON_PREV,
  TEXT_BUTTON_NEXT,
} = require("./constants.js");

module.exports = {
  mainKeyboard: {
    addWish: TEXT_BUTTON_ADD_WISH,
    unrealizedWishes: TEXT_BUTTON_UNREALIZED_WISHES,
    grantedWishes: TEXT_BUTTON_GRANTED_WISHES,
  },

  itemKeyboard: {
    deleteWish: TEXT_BUTTON_DELETE_WISH,
    grantedWish: TEXT_BUTTON_GRANTED_WISH,
  },

  listKeyboard: {
    prev: TEXT_BUTTON_PREV,
    next: TEXT_BUTTON_NEXT,
  },
};
