/*
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.



Example:

Input:
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]


Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let results = [];

  const traverse = function(word, idx, x, y, board) {
    // If it's out of bounds, return.
    if (y >= board.length || y < 0) {
      return;
    }
    if (x >= board[0].length || x < 0) {
      return;
    }

    // If the current node is null, return (This means that it has been visited).
    if (board[y][x] === null) {
      return;
    }

    // If there is a match between the current letter and the letter at the current node.
    if (board[y][x] === word[idx]) {
      // Make a copy of the board.
      copiedBoard = copy2dArray(board);

      // Mark the node as visited.
      copiedBoard[y][x] = null;

      idx++;

      // If the index is now greated or equal to the length of the word, we are done.
      if (idx >= word.length) {
        results.push(word);
        removeFromWords(word, words);
      }

      traverse(word, idx, x + 1, y, copiedBoard);
      traverse(word, idx, x - 1, y, copiedBoard);
      traverse(word, idx, x, y + 1, copiedBoard);
      traverse(word, idx, x, y - 1, copiedBoard);
    }
  }

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      words.forEach(word => {
        if (board[i][j] === word[0]) {
          traverse(word, 0, j, i, board);
        }
      });
    }
  }
  return results;
};

function copy2dArray(arr) {
  return arr.map(arr => new Set(arr));
}

function removeFromWords(word, words) {
  let idx = null;
  for (let i = 0; i < words.length; ++i) {
    if (word === words[i]) {
      idx = i;
      break;
    }
  }
  words.splice(idx, 1);
}

const board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
const words = ["oath","pea","eat","rain"]

// console.log(findWords(board, words));

const board2 = [
  ["a","b","c"],
  ["a","e","d"],
  ["a","f","g"]
]
const words2 = ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"]

// console.log(findWords(board2, words2))

board3 = copy2dArray(board2);
// board3[0][0] = null;
// console.log(board2, board3);

console.log(board3[0])