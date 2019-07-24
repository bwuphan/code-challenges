/**
 * @param {character[][]} grid
 * @return {number}
 */
var flipEl = function(i, j, grid) {
  if (!isInBounds(i, j, grid)) return;
  if (grid[i][j] == 0) return;

  grid[i][j] = 0;

  flipEl(i + 1, j, grid);
  flipEl(i - 1, j, grid);
  flipEl(i, j + 1, grid);
  flipEl(i, j - 1, grid);
}

var isInBounds = function(i, j, grid) {
  if (i < 0 || j < 0) return false;
  if (i >= grid.length) return false;
  if (j >= grid[0].length) return false;
  return true;
}

var numIslands = function(grid) {
  let numIslands = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] == 1) {
        numIslands++;
        flipEl(i, j, grid);
      }
    }
  }
  return numIslands;
};