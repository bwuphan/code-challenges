/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 3; ++i) {
    for(let j = 0; j < 3; ++j) {
      for (let k = 0; k < 3; ++k) {

      }
    }
  }
};

function testArray(array) {
  let occurObj = {
    9: 1, 8: 1, 7:1, 6: 1, 5: 1, 4: 1, 3: 1, 2: 1, 1: 1
  };

  for (let i = 0; i < array.length; ++i) {
    const curNum = array[i];
    occurObj[curNum]--;
    if (occurObj[curNum] <= 0) {
      return false;
    }
  }

  return true;
}

const test = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(test));