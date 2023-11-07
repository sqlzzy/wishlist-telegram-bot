const fs = require("fs");
const { MESSAGE_FOLDER_EXISTS } = require("../constants.js");

function createFolder(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, (err) => {
      if (err) throw console.log(err);
    });
  } else {
    console.log(MESSAGE_FOLDER_EXISTS);
  }
}

module.exports = createFolder;
