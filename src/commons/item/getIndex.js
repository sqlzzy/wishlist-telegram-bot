function getIndex(obj, value) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const index = getIndex(obj[i], value);
      if (index !== -1) {
        return index;
      }
    }
  } else if (typeof obj === "object") {
    for (let key in obj) {
      const index = getIndex(obj[key], value);
      if (index !== -1) {
        return index;
      }
    }
  } else if (obj === value) {
    return obj;
  }
  return -1;
}

module.exports = getIndex;
