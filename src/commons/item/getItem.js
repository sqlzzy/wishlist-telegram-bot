function getItem(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      const result = getItem(obj[key], value);

      if (result) {
        return result;
      }
    } else if (key === "id" && obj[key] === value) {
      return obj;
    }
  }

  return null;
}

module.exports = getItem;
