const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(param) {
  if (param == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (param == null) {
    throw new Error('THROWN');
  }
  let month = param.getMonth() + 1;
  if (param instanceof Date && !isNaN(param)) {
    if (month >= 3 && month <= 5) {
      return 'spring';
    } else if (month >= 6 && month <= 8) {
      return 'summer';
    } else if (month >= 9 && month <= 11) {
      return 'autumn';
    } else if (month == 12 || month == 1 || month == 2) {
      return 'winter';
    }
  } else {
    throw new Error('THROWN');
  }
};