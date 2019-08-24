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
  let exists = false;
  const traverse = function(board, idx, y, x) {
    if (y < 0 || y >= board.length || x < 0 || x >= board[0].length || board[y][x] === null || exists === true) {
      return;
    }

    if (board[y][x] === word[idx]) {
      if (idx === word.length - 1) {
        exists = true;
        return;
      }
      board = JSON.parse(JSON.stringify(board));
      board[y][x] = null;
      idx++;

      traverse(board, idx, y + 1, x);
      traverse(board, idx, y - 1, x);
      traverse(board, idx, y, x + 1);
      traverse(board, idx, y, x - 1);

    }
  }

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      const curLetter = board[i][j];
      if (curLetter === word[0]) {
        traverse(board, 0, i, j);
      }
    }
  }

  return exists;


};

var board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
