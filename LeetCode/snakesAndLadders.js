/*
UNSOLVED. PASSED 206/211 test cases.

https://leetcode.com/problems/snakes-and-ladders/

On an N x N board, the numbers from 1 to N*N are written boustrophedonically starting from the
bottom left of the board, and alternating direction each row.  For example, for a 6 x 6 board,
the numbers are written as follows:


You start on square 1 of the board (which is always in the last row and first column).  Each move,
starting from square x, consists of the following:

You choose a destination square S with number x+1, x+2, x+3, x+4, x+5, or x+6, provided this number
is <= N*N. (This choice simulates the result of a standard 6-sided die roll: ie., there are always
at most 6 destinations, regardless of the size of the board.) If S has a snake or ladder, you move
to the destination of that snake or ladder.  Otherwise, you move to S. A board square on row r and
column c has a "snake or ladder" if board[r][c] != -1.  The destination of that snake or ladder is
board[r][c].

Note that you only take a snake or ladder at most once per move: if the destination to a snake or
ladder is the start of another snake or ladder, you do not continue moving.  (For example, if the
board is `[[4,-1],[-1,3]]`, and on the first move your destination square is `2`, then you finish
your first move at `3`, because you do not continue moving to `4`.)

Return the least number of moves required to reach square N*N.  If it is not possible, return -1.

Example 1:

Input: [
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,35,-1,-1,13,-1],
[-1,-1,-1,-1,-1,-1],
[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation:
At the beginning, you start at square 1 [at row 5, column 0].
You decide to move to square 2, and must take the ladder to square 15.
You then decide to move to square 17 (row 3, column 5), and must take the snake to square 13.
You then decide to move to square 14, and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
It can be shown that you need at least 4 moves to reach the N*N-th square, so the answer is 4.
Note:

2 <= board.length = board[0].length <= 20
board[i][j] is between 1 and N*N or is equal to -1.
The board square with number 1 has no snake or ladder.
The board square with number N*N has no snake or ladder.
*/

var Queue = require('../Prototypes/Queue.js').Queue;
/**
 * @param {number[][]} board
 * @return {number}
 */


var snakesAndLadders = function(board) {
  /* Turn board to 2D, then find moves by BFS. */

  // Turn the board 2D.
  const finalIdx = board.length * board[0].length;
  const lastIdx = board.length - 1;
  let map = {};
  let idx = 1;
  for (let i = lastIdx; i >= 0; --i) {
    let row = board[i];
    // If it is not an even distance from the last row, reverse the row.
    if ((lastIdx - i) % 2 !== 0) {
      row = row.reverse();
    }
    row.forEach(cell => {
      map[idx++] = cell;
    });
  }

  let queue = new Queue();
  queue.enqueue({ idx: 1, moves: 0 });

  while(!queue.isEmpty()) {
    let item = queue.dequeue();

    // If we are at the final index, then we are done and return the number of moves.
    if (item.idx === finalIdx) {
      return item.moves;
    }

    // If we are at a visited cell, skip.
    if (map[item.idx] === 0) {
      continue;
    }

    // Set current cell to visited.
    map[item.idx] = 0;

    // Do moves from +1 to +6.
    for (let i = 1; i <= 6; ++i) {
      // Get new index.
      let index = item.idx + i;

      // If the inded is not at the finalIdx yet and we have not visited this cell, proceed.
      if (index <= finalIdx && map[index] !== 0) {
        // If the cell is -1, then it is not a chute or ladder, just use index.
        if (map[index] === -1) {
          queue.enqueue({ idx: index, moves: item.moves + 1 });
        }
        // Else, we are at a chute and ladder and we need to get the index from looking at the map.
        else {
          queue.enqueue({ idx: map[index], moves: item.moves + 1 });
        }
      }
    }
  }

  // If no solutions, return -1.
  return -1;
};


var test = [
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,35,-1,-1,13,-1],
[-1,-1,-1,-1,-1,-1],
[-1,15,-1,-1,-1,-1]
];

var test2 = [[-1,-1],[-1,3]];
var test3 = [
[1,1,-1],
[1,1,1],
[-1,1,1]
];

var test4 = [
[-1,-1,128,-1,-1,-1,136,-1,-1,-1,109,-1],
[-1,-1,-1,-1,-1,103,-1,-1,56,10,-1,-1],
[-1,-1,-1,-1,-1,-1,116,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,50,-1,67,107],
[-1,40,-1,-1,-1,20,-1,59,-1,67,-1,-1],
[-1,-1,-1,-1,-1,-1,112,133,111,-1,-1,-1],
[-1,-1,112,-1,74,-1,-1,-1,-1,-1,-1,-1],
[23,-1,115,-1,129,126,-1,-1,-1,-1,-1,-1],
[106,143,81,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,26,102,1,29],
[26,-1,-1,-1,-1,-1,-1,-1,27,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]
console.log(snakesAndLadders(test));
console.log(snakesAndLadders(test2));
console.log(snakesAndLadders(test3));
console.log(snakesAndLadders(test4));
