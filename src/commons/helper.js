function getChatId(msg) {
  return msg.chat.id;
}

function getUsername(msg) {
  return msg.from.username;
}

module.exports = {
  getChatId,
  getUsername,
};
