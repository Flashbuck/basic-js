const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'}) {
  String(str);
  String(addition);
  let result = '';
  let addwn = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (additionRepeatTimes == 1 || i == additionRepeatTimes - 1) {
      addwn += `${addition}`;
    } else {
      addwn += `${addition}${additionSeparator}`;
    }
  }
  if (repeatTimes == 0) {
    return `${str}${addition}`;
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (repeatTimes == 1 || i == repeatTimes - 1) {
      result += `${str}${addwn}`;
    } else {
      result += `${str}${addwn}${separator}`;
    }
  }
  return result;
};