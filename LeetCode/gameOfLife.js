/*
https://leetcode.com/problems/game-of-life/


According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular
automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell
interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules
(taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.
The next state is created by applying the above rules simultaneously to every cell in the current
state, where births and deaths occur simultaneously.

Example:

Input:
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output:
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You
cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite,
which would cause problems when the active area encroaches the border of the array. How would you
address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const updateCell = (row, col) => {
    let neighborCount = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0)
          continue;
        const rowIdx = row + i;
        const colIdx = col + j;
        if (rowIdx >= 0 && rowIdx < board.length && colIdx >= 0 && colIdx < board[0].length) {
          if (board[rowIdx][colIdx] === 1 || board[rowIdx][colIdx] === -1) {
            neighborCount++;
          }
        }
      }
    }
    const originalCell = board[row][col];
    if ((neighborCount < 2 || neighborCount > 3) && originalCell === 1) {
      board[row][col] = -1;
    }
    else if ((neighborCount === 3) && originalCell === 0) {
      board[row][col] = 2;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      updateCell(i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === -1)
        board[i][j] = 0;
      else if (board[i][j] === 2)
        board[i][j] = 1;
    }
  }

  return board;
};


/*
Solution:
Update in place by adding 2 new options for the cells.
If the cell was alive and is newly dead they are -1.
If the cell was dead but is now alive, they are 2.
Go through and count the neighbors for each cell.
Alive cells are either 1 or -1 (were alive but now dead)
Loop through matrix and change the cells back to 1 or 0.

*/


var test = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
];

var testAnswer = [
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]

assert(gameOfLife(test), testAnswer);
function assert(one, two) {
  console.log(JSON.stringify(one) === JSON.stringify(two));
}