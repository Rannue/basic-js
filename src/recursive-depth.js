const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  constructor() {
    this.count = 1
    this.testCount = 1;
    this.currentIndex = 0;
  }

  calculateDepth(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //   if (Array.isArray(arr[i])) {
    //     this.testCount++
    //     this.calculateDepth(arr[i])
    //   }
    //   if (this.testCount > this.count) {
    //     this.count = this.testCount
    //     this.testCount = 1
    //   }
    // }
    // let result = this.count;
    // return result;
    for (let i = 0; i < arr.length; i++) {
      this.currentIndex = i;
      if (Array.isArray(arr[i])) {
        this.count++
        let t = this.calculateDepth(arr[i])
        this.testCount = t > this.testCount
          ? t
          : this.testCount
      }
    }
    return this.currentIndex == arr.length - 1
      ? this.testCount > this.count
        ? this.testCount
        : this.count
      : this.count
  }
}
const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))


module.exports = {
  DepthCalculator
};
