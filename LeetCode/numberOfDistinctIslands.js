/*
https://leetcode.com/problems/number-of-distinct-islands/

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land)
connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are
surrounded by water.

Count the number of distinct islands. An island is considered to be the same as another if and only
if one island can be translated (and not rotated or reflected) to equal the other.

Example 1:
11000
11000
00011
00011
Given the above grid map, return 1.
Example 2:
11011
10000
00001
11011
Given the above grid map, return 3.

Notice that:
11
1
and
 1
11
are considered different island shapes, because we do not consider reflection / rotation.
Note: The length of each dimension in the given grid does not exceed 50.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  /* Explore the islands which sets island parts to 0 in the grid and create the islandStr which
     describes the shape of the island. */
  const explore = (row, col, origRow, origCol) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || !grid[row][col]) {
      return '';
    }

    grid[row][col] = 0;

    let islandStr = '';
    // Init islandStr to this current diffs between the original and new positions.
    islandStr += `row:${origRow - row},col:${origCol - col};`

    islandStr += explore(row - 1, col, origRow, origCol);
    islandStr += explore(row + 1, col, origRow, origCol);
    islandStr += explore(row, col - 1, origRow, origCol);
    islandStr += explore(row, col + 1, origRow, origCol);

    return islandStr;
  }

  // Sets of unique islands.
  const islandSet = new Set();
  let numDistinctIslands = 0;

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      // If we come across an island...
      if (grid[i][j]) {
        const islandStr = explore(i, j, i, j);

        /* If the islandSet does not have the current islandStr, add to the set and inc
           the number is distinc islands. */
        if (!islandSet.has(islandStr)) {
          islandSet.add(islandStr);
          numDistinctIslands++;
        }
      }
    }
  }

  return numDistinctIslands;
};


const ex2 = [
  [1,1,0,1,1],
  [1,0,0,0,0],
  [0,0,0,0,1],
  [1,1,0,1,1]
]

const ex3 = [
  [1,1,0],
  [0,1,1],
  [0,0,0],
  [1,1,1],
  [0,1,0]
]
console.log(numDistinctIslands(ex2));
console.log(numDistinctIslands(ex3));