const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(value) {
    if (value.length === 0) {
      return 1;
    } else if (Array.isArray(value)) {
      return 1 + Math.max(...value.map(elem => this.calculateDepth(elem)));
    } else {
      return 0;
    }
  }
};