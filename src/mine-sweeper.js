const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let Arr = new Array(matrix.length)
  for (let i = 0; i < matrix.length; i++) {
    let t = new Array(matrix[0].length)
    t.fill(0)
    Arr[i] = t
  }

  function findBombs(x, y) {
    for (let a = (x - 1); a <= (x + 1); a++) {
      for (let b = (y - 1); b <= (y + 1); b++) {
        if ((a in Arr) && (b in Arr) && (a != x || b != y)) {
          Arr[a][b] += 1
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] == true) {
        findBombs(i, k)
      }
    }
  }
  return Arr
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
])

module.exports = {
  minesweeper
};