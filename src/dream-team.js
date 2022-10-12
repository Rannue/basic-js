const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let membersNameArr = [];

  if (Array.isArray(members)) {
    members.forEach(el => {
      if (typeof (el) == 'string') {
        membersNameArr.push(el.replace(/\s/g, '').toUpperCase())
      };
    });
  }

  if (membersNameArr.length === 0) {
    return false
  }

  let teamName = ''
  membersNameArr.sort().forEach(element => {
    teamName += element.charAt(0)
  });
  return teamName
}

module.exports = {
  createDreamTeam
};
