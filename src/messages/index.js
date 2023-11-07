const buttonsKeyboard = require("../keyboards/buttonsKeyboard.js");
const initAddWish = require("./initAddWish.js");
const initShowWishes = require("./initShowWishes.js");

module.exports = (bot) => {
  bot.on("message", function onCallback(callback) {
    const msg = callback;

    switch (msg.text) {
      case buttonsKeyboard.mainKeyboard.addWish:
        initAddWish(bot, msg);
        break;
      case buttonsKeyboard.mainKeyboard.unrealizedWishes:
        initShowWishes(bot, msg, "unrealized");
        break;
      case buttonsKeyboard.mainKeyboard.grantedWishes:
        initShowWishes(bot, msg, "granted");
        break;
      default:
        return;
    }
  });
};
