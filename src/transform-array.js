const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const error = new Error("'arr' parameter must be an instance of the Array!");

  if (Array.isArray(arr)) {
    let newArr = [];
    let Arr = arr

    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i] == "--discard-next") {
        i += 2
      }
      else if (Arr[i] == "--discard-prev") {
        newArr.splice(i - 1, 1)
      }
      else if (Arr[i] == "--double-next") {
        if (Arr[i + 1] != undefined) {
          newArr.push(Arr[i + 1])
        }
      }
      else if (arr[i] == "--double-prev") {
        if (i != 0) {
          newArr.push(Arr[i - 1])
        }
      }
      else {
        newArr.push(Arr[i])
      }
    }
    console.log(newArr)
    return newArr
  } else {
    return error
  }
}

transform(null)

module.exports = {
  transform
};
