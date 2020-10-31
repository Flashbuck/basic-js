const CustomError = require("../extensions/custom-error");

module.exports = function countCats(...elem) {
  let result = 0,
    string = elem.join('').split(',');
  for (let iterator of string) {
    if (iterator === '^^') {
      result++;
    }
  }
  return result;
};