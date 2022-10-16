const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let realStr = `${str}`
  let separatorForStr = (options.separator || '+')
  let separatorForAdd = (options.additionSeparator || '|')
  let repeatForStr = (options.repeatTimes || 1)
  let repeatForAdd = (options.additionRepeatTimes || 1)
  let result = ''

  for (let i = 0; i < repeatForStr; i++) {
    result += realStr;
    if (options.addition !== undefined) {
      for (let k = 0; k < repeatForAdd; k++) {
        result += `${options.addition}` + separatorForAdd;
      }
      result = result.slice(0, -separatorForAdd.length)
    }
    result += separatorForStr;
  }
  result = result.slice(0, -separatorForStr.length)
  return result
}

repeater(true, { repeatTimes: 3, separator: 's' })

module.exports = {
  repeater
};
