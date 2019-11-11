/*
https://leetcode.com/problems/design-tic-tac-toe/

Design a Tic-tac-toe game that is played between two players on a n x n grid.

You may assume the following rules:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves is allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins
the game.

Example:
Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
Follow up:
Could you do better than O(n2) per move() operation?
*/
/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.player1 = [];
  this.player2 = [];
  this.n = n;

  for (let i = 0; i < n; ++i) {
    this.player1.push([...new Array(n)].map(() => 0));
    this.player2.push([...new Array(n)].map(() => 0));
  }

};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  if (player === 1)
    this.player1[row][col] = 1;
  else if (player === 2)
    this.player2[row][col] = 1;

  const board = this[`player${player}`];

  // this.log();

  let rowCount = 0;
  let colCount = 0;
  let diaCount = 0;
  let antiDiaCount = 0;
  for (let i = 0; i < this.n; ++i) {
    if (board[row][i])
      rowCount++;
    if (board[i][col])
      colCount++;
    if (board[i][i])
      diaCount++;
    if (board[this.n - i - 1][i])
      antiDiaCount++;
  }

  if (rowCount === this.n || colCount === this.n || diaCount === this.n || antiDiaCount === this.n)
    return player;
  return 0;
};

TicTacToe.prototype.check = function(row, col, player) {

}

TicTacToe.prototype.log = function() {
  console.log('Player 1');
  this.player1.forEach(row => console.log(row));

  console.log('Player 2');
  this.player2.forEach(row => console.log(row));
}
/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */


var tic = new TicTacToe(2);
// tic.move(0,0,1)
// tic.move(0,1,1)
// tic.move(0,2,1);

// tic.move(0,1,1)
// tic.move(2,1,1)
// tic.move(1,1,1);

// tic.move(0,0,1)
// tic.move(1,1,1)
// tic.move(2,2,1);

console.log(tic.move(0,0,2))
console.log(tic.move(1,1,1))
console.log(tic.move(0,1,2))