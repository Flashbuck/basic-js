const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position < 0 || position >= this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('Not correct position');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.chain.length; i++) {
      i + 1 < this.chain.length ? result = `${result}( ${this.chain[i]} )~~` : result = `${result}( ${this.chain[i]} )`;
    }
    this.chain = [];
    return String(result);
  }
};

module.exports = chainMaker;