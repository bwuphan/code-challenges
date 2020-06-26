/*
https://leetcode.com/problems/word-search/

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const visited = board.map(row => new Array(board[0].length));

  let hasSolution = false;
  const traverse = (letterIdx, row, col) => {
    if (hasSolution || row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[letterIdx] || visited[row][col])
      return;

    if (letterIdx >= word.length - 1)
      hasSolution = true;

    letterIdx++;
    visited[row][col] = true;

    traverse(letterIdx, row + 1, col);
    traverse(letterIdx, row - 1, col);
    traverse(letterIdx, row, col + 1);
    traverse(letterIdx, row, col - 1);

    visited[row][col] = false;
    letterIdx--;
  }

  letterIdx = 0;

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      const letter = board[i][j];
      if (!hasSolution && letter === word[0])
        traverse(0, i, j);
    }
  }
  return hasSolution;
};

/*
Solution: Use backtracking and keep track of current word index and visited squares.
*/

var board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
