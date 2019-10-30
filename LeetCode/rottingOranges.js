/*
https://leetcode.com/problems/rotting-oranges/

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.



Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.


Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

var Queue = require('../Prototypes/Queue.js').Queue;

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  /*
    First, add the rotten ones to the queue.
    Then, use BFS and add positions to the queue as you go.
    Check at the end to make sure there aren't any fresh orangse.
  */
  let queue = new Queue();

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === 2)
        queue.enqueue({row: i, col: j, minutes: 0});
    }
  }


  let maxMinutes = 0;
  while (!queue.isEmpty()) {
    let posObj = queue.dequeue();

    if (grid[posObj.row][posObj.col] !== 2 || posObj.minutes === 0) {
      grid[posObj.row][posObj.col] = 2;

      if (posObj.minutes > maxMinutes)
        maxMinutes = posObj.minutes

      const leftRow = posObj.row - 1;
      if (leftRow >= 0 && grid[leftRow][posObj.col] === 1) {
        queue.enqueue({ row: leftRow, col: posObj.col, minutes: posObj.minutes + 1 });
      }

      const rightRow = posObj.row + 1;
      if (rightRow < grid.length && grid[rightRow][posObj.col] === 1) {
        queue.enqueue({ row: rightRow, col: posObj.col, minutes: posObj.minutes + 1 });
      }

      const upCol = posObj.col + 1;
      if (upCol >= 0 && grid[posObj.row][upCol] === 1) {
        queue.enqueue({ row: posObj.row, col: upCol, minutes: posObj.minutes + 1 });
      }

      const downCol = posObj.col - 1;
      if (downCol < grid[0].length && grid[posObj.row][downCol] === 1) {
        queue.enqueue({ row: posObj.row, col: downCol, minutes: posObj.minutes + 1 });
      }
    }

  }

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === 1)
        return -1;
    }
  }

  return maxMinutes;
};


console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
console.log(orangesRotting([[0,2]]));
console.log(orangesRotting([
  [2,2],
  [1,1],
  [0,0],
  [2,0]
  ]
))