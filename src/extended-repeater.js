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
  let result = ''
  let separatorForStr = (options.separator || '+')
  let separatorForAdd = (options.additionSeparator || '|')

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;


    for (let k = 0; k < options.additionRepeatTimes; k++) {
      result += options.addition + separatorForAdd;
    }

    if (options.addition) {
      result = result.slice(0, -separatorForAdd.length)
    }

    result += separatorForStr;

  }

  result = result.slice(0, -separatorForStr.length)

  console.log(result)
  console.log(options)
  console.log(options.repeatTimes)
  return result


}

repeater('la', { repeatTimes: 3 })

module.exports = {
  repeater
};
