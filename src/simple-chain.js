const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length
  },
  addLink(value) {
    let valueStr = `${value}`
    this.chainArr.push(`( ${valueStr} )~~`);
    return this
  },
  removeLink(value) {
    if (typeof value == 'number' && (value - 1) in this.chainArr) {
      this.chainArr.splice(value - 1, 1);
      return this
    }
    this.chainArr = []
    throw new Error('You can\'t remove incorrect link!')
  },
  reverseChain() {
    this.chainArr.reverse();
    return this
  },
  finishChain() {
    let result = this.chainArr.join('').slice(0, -2)
    this.chainArr = []
    return result
  }
};

console.log((chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain() === '( 3rd )~~( function () { } )'))

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
)

module.exports = {
  chainMaker
};
