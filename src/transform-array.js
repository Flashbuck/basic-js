module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not array');
  if (arr.length == 0) return [];

  let newArr = arr.slice(),
    key = 0,
    a;
  while (key < newArr.length) {
    if ((newArr[key] === '--discard-next' && newArr[key + 2] === '--double-prev') || (newArr[key] === '--discard-next' && newArr[key + 2] === '--discard-prev')) {
      newArr.splice(key, 3);
      key++;
      continue;
    }
    if (newArr[key] === '--discard-prev') {
      key - 1 < 0 ? newArr.splice(key, 1) : newArr.splice(key - 1, 2);
      key--;
      continue;
    }
    if (newArr[key] === '--discard-next') {
      a = key + 1;
      a == newArr.length ? newArr.splice(key, 1) : newArr.splice(key, 2);
      key--;
      continue;
    }
    if (newArr[key] === '--double-prev') {
      key - 1 < 0 ? newArr.splice(key, 1) : newArr[key] = newArr[key - 1];
    }
    if (newArr[key] === '--double-next') {
      key + 1 == newArr.length ? newArr.splice(key, 1) : newArr[key] = newArr[key + 1];
    }
    key++;
  }
  return newArr;
};