/*
https://leetcode.com/problems/minimum-path-sum/

Given a m x n grid filled with non-negative numbers, find a path from top left
to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // Create a blank array for dp. Same size but with only the last element filled in.
  const dpGrid = grid
    .map(() => new Array(grid[0].length));
  dpGrid[grid.length - 1][grid[0].length - 1] = grid[grid.length - 1][grid[0].length - 1];

  // Start at bottom right and loop backwards.
  for (let i = grid.length - 1; i >= 0; --i) {
    for (let j = grid[0].length - 1; j >= 0; --j) {
      // Only try to fill in dpGrid if the position has yet to be filled. This condition should only
      // be false when we're at the bottom right element.
      if (dpGrid[i][j] === undefined) {
        const gridValue = grid[i][j];

        // Get the right and down values.
        const rightDpVal = (j + 1) >= grid[0].length ? null : dpGrid[i][j + 1];
        const downDpVal = (i + 1) >= grid.length ? null : dpGrid[i + 1][j];

        if (rightDpVal === null)
          dpGrid[i][j] = downDpVal + gridValue;
        else if (downDpVal === null)
          dpGrid[i][j] = rightDpVal + gridValue;
        else
          dpGrid[i][j] = Math.min(downDpVal, rightDpVal) + gridValue;
      }
    }
  }

  return dpGrid[0][0];
};

/*
Solution:
Start from bottom right corner and dp from there going from right to left, then up one row.
To fill in the array, check which is smaller in the dp grid, the el to the right or the el to the buttom.
Add the min of these plus the value of the current element in the actual grid.
At the end, the solution will be in the element 0,0.
*/

// console.log(minPathSum([
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]))

console.log(minPathSum(
[
  [9,9,0,8,9,0,5,7,2,2,7,0,8,0,2,4,8],
  [4,4,2,7,6,0,9,7,3,2,5,4,6,5,4,8,7],
  [4,9,7,0,7,9,2,4,0,2,4,4,6,2,8,0,7],
  [7,7,9,6,6,4,8,4,8,7,9,4,7,6,9,6,5],
  [1,3,7,5,7,9,7,3,3,3,8,3,6,5,0,3,6],
  [7,1,0,7,5,0,6,6,5,3,2,6,0,0,9,5,7],
  [6,5,6,3,8,1,8,6,4,4,3,4,9,9,3,3,1],
  [1,0,2,9,7,9,3,1,7,5,1,8,2,8,4,7,6],
  [9,6,7,7,4,1,4,0,6,5,1,9,0,3,2,1,7],
  [2,0,8,7,1,7,4,3,5,6,1,9,4,0,0,2,7],
  [9,8,1,3,8,7,1,2,8,3,7,3,4,6,7,6,6],
  [4,8,3,8,1,0,4,4,1,0,4,1,4,4,0,3,5],
  [6,3,4,7,5,4,2,2,7,9,8,4,5,6,0,3,9],
  [0,4,9,7,1,0,7,7,3,2,1,4,7,6,0,0,0]
]))

// console.log(Math.min(10, null))