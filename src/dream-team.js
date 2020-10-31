const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (typeof array === 'number' || typeof array === 'bool' || array == undefined || array == null) {
    return false;
  }
  let bool = false,
    result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != 'string') {
      continue;
    }
    result.push(array[i].trim()[0].toUpperCase());
  }
  result.length > 0 ? bool = true : bool = false;
  return bool !== false ? result.sort().join('') : bool;
};