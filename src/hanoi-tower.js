const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber === null || disksNumber === null || turnsSpeed === null || turnsSpeed === undefined) {
    throw new CustomError('Not implemented');
  }
  let turns = 2 ** disksNumber - 1,
    seconds = Math.trunc(turns * 3600 / turnsSpeed);
  return {
    'turns': turns,
    'seconds': seconds
  };
};