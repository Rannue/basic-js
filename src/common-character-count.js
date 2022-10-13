const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function replaceIndexValue(str, x) {
    let newStr = str.substring(0, x - 1) + '*' + str.substring(x + 1);
    return newStr
  }
  let count = 0;
  let s1New = s1;
  let s2New = s2;
  for (let i = 0; i < s1.length; i++) {
    for (let k = 0; k < s2.length; k++) {
      if (s1New[i] == s2New[k]) {
        s1New = replaceIndexValue(s1New, i)
        s2New = replaceIndexValue(s2New, k)
        count++
        break
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
