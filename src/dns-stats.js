const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArr = [];
  domains.forEach(el => {
    domainsArr.push(el.split('.').reverse())
  })

  let Object = {
  }

  for (let i = 0; i < domainsArr.length; i++) {
    let checkDomain = ''
    for (let k = 0; k < domainsArr[i].length; k++) {
      checkDomain = [checkDomain, domainsArr[i][k]].join('.')
      if (Object.hasOwnProperty(checkDomain)) {
        Object[checkDomain] += 1
      } else {
        Object[checkDomain] = 1;
      }
    }
  }
  return Object
}


getDNSStats(['epam.com', 'info.epam.com'])
module.exports = {
  getDNSStats
};
