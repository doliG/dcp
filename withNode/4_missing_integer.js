function firstMissingInt(list) {
  const set = new Set(list);

  for (let i = 1; i <= list.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return -1;
}

module.exports = firstMissingInt;
