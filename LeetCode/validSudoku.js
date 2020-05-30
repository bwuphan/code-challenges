/*
https://leetcode.com/problems/valid-sudoku/

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with
the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is
    invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const checkSquare = (startRow, startCol) => {
    const numSet = new Set();

    for (let i = startRow; i < startRow + 3; ++i) {
      for (let j = startCol; j < startCol + 3; ++j) {
        if (!isNaN(board[i][j])) {
          const cell = +board[i][j];

          if (cell < 1 || cell > 9 || numSet.has(cell))
            return false;

          numSet.add(cell);
        }
      }
    }

    return true;
  }

  const checkRow = (row) => {
    const numSet = new Set();
    for (let j = 0; j < board[0].length; ++j) {
      if (!isNaN(board[row][j])) {
        const cell = +board[row][j]
        if (cell < 1 || cell > 9 || numSet.has(cell))
          return false;

        numSet.add(cell);
      }
    }

    return true;
  }

  const checkCol = (col) => {
    const numSet = new Set();
    for (let i = 0; i < board.length; ++i) {
      if (!isNaN(board[i][col])) {
        const cell = +board[i][col];
        if (cell < 1 || cell > 9 || numSet.has(cell))
          return false;

        numSet.add(cell);
      }
    }

    return true;
  }

  for (let i = 0; i < board.length; ++i) {
    if (!checkRow(i) || !checkCol(i))
      return false;
  }

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      if (!checkSquare(i, j))
        return false;
    }
  }


  return true;
};

console.log(isValidSudoku(
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
))

console.log(isValidSudoku(
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
))