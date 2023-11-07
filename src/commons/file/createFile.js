const fs = require("fs");
const { MESSAGE_FILE_EXISTS } = require("../constants.js");

function createFile(path, data) {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, data, "utf8", (err) => {
      if (err) throw console.log(err);
    });
  } else {
    console.log(MESSAGE_FILE_EXISTS);
  }
}

module.exports = createFile;
