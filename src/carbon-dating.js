const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = undefined) {
  let result = Math.log(MODERN_ACTIVITY/parseInt(sampleActivity))/(0.693/HALF_LIFE_PERIOD);
  if(typeof sampleActivity !== 'string' || 
  isNaN(sampleActivity) || 
  isNaN(result) ||
  sampleActivity == undefined || 
  parseInt(sampleActivity) > 15 || 
  parseInt(sampleActivity) <= 0){
    return false;
  }
  return Math.ceil(result);
  // remove line with error and write your code here
};
