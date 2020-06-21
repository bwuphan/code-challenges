/*
https://leetcode.com/problems/pacific-atlantic-water-flow/

Given an m x n matrix of non-negative integers representing the height of each unit cell in a
continent, the "Pacific ocean" touches the left and top edges of the matrix and the
"Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with
height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.


Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
(positions with parentheses in above matrix).
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  const results = [];
  let done, p, a, visited;

  const dfs = (row, col) => {
    // Stop if we've already found both sides row it's out of bounds.
    if (done || row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || visited[row][col])
      return false;

    // Mark visited.
    visited[row][col] = true;

    // If we're at the pacific and we haven't been to the pacific yet.
    if ((row === 0 || col === 0) && !p)
      p = true;

    // If we're at the atlantic and we haven't been to the atlantic yet.
    if ((row === matrix.length - 1 || col === matrix[0].length - 1) && !a)
      a = true;

    // If we can reach both, we're done.
    if (a && p) {
      done = true;
      return true;
    }

    const cur = matrix[row][col]; // Mark cur to the current value.

    // dfs if the cur value is greater than the value we're going to.
    if ((row + 1) < matrix.length && cur >= matrix[row + 1][col])
      dfs(row + 1, col);

    if ((row - 1) >= 0 && cur >= matrix[row - 1][col])
      dfs(row - 1, col);

    if ((col + 1) < matrix[0].length && cur >= matrix[row][col + 1])
      dfs(row, col + 1);

    if ((col - 1) >= 0 && cur >= matrix[row][col - 1])
      dfs(row, col - 1);

    // Unmark visited.
    visited[row][col] = false;
  };

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      visited = matrix.map(row => new Array(matrix[0].length));
      done = false;
      a = false;
      p = false;
      dfs(i, j);

      if (done && a && p)
        results.push([i, j]);
    }
  }

  return results;
};


/*
Solution: DFS to find solutions.
*/

console.log(pacificAtlantic([
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]));

