/*
https://leetcode.com/problems/minesweeper/

Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E'
represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent
(above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many
mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the
unrevealed squares ('M' or 'E'), return the board after revealing this position according to the
following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.

If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B')
and all of its adjacent unrevealed squares should be revealed recursively.

If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit
('1' to '8') representing the number of adjacent mines.

Return the board when no more squares will be revealed.


Example 1:

Input:

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Example 2:

Input:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:



Note:

The range of the input matrix's height and width is [1,50].

The click position will only be an unrevealed square ('M' or 'E'), which also means the input board
contains at least one clickable square.

The input board won't be a stage when game is over (some mines have been revealed).

For simplicity, not mentioned rules should be ignored in this problem. For example, you don't need
to reveal all the unrevealed mines when the game is over, consider any cases that you will win the
game or flag any squares.
*/


/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  if (board[click[0]][click[1]] === 'M') {
    board[click[0]][click[1]] = 'X';
    return board;
  }

  const reveal = (row, col) => {
    // If the spot is out of bounds or revealed, return.
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== 'E')
      return;

    // Count adjacent mines.
    let numMines = 0;
    for (let i = -1; i < 2; ++i) {
      for (let j = -1; j < 2; ++j) {
        const checkRow = row + i;
        const checkCol = col + j;

        if (board[checkRow] && board[checkRow][checkCol] && board[checkRow][checkCol] === 'M')
          numMines++;
      }
    }

    // If numMines is a non zero number, set current spot to the number of adjacent mines.
    if (numMines)
      board[row][col] = numMines.toString();
    // Else,set the current spot to 'B' for blank and recursively reveal adjacent spots.
    else {
      board[row][col] = 'B';
      for (let i = -1; i < 2; ++i) {
        for (let j = -1; j < 2; ++j) {
          const recurseRow = row + i;
          const recurseCol = col + j;
          reveal(recurseRow, recurseCol);
        }
      }
    }
  }

  reveal(click[0], click[1]);

  return board;
};

/*
Solution: DFS by recursively revealing elements of the board.
Count the adjacent mines before recursing to see what the spot should be.
*/

console.log(updateBoard(
[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']],
 [3,0]
))