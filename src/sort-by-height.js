const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = new Array()
  let arrForSort = [];
  let one = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      one++
      newArr[i] = -1
    } else {
      arrForSort.push(arr[i])
    }
  }

  arrForSort.sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < arrForSort.length + one; i++) {
    if (newArr[i] != -1) {
      newArr[i] = arrForSort[index]
      index++
    }
  }
  return newArr
}



module.exports = {
  sortByHeight
};
