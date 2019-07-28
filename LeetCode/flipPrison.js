/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var flipPrison = function(cells) {
  const newCells = cells.map((cell, i) => {
    let lCell = null;
    if (i - 1 >= 0) lCell = cells[i - 1];
    let rCell = null;
    if (i + 1 < cells.length) rCell = cells[i + 1];
    
    if (lCell === rCell) return 1;
    else return 0;
  });  
  
  return newCells;
}

var prisonAfterNDays = function(cells, N) {
  while (N > 0) {
    cells = flipPrison(cells);
    N = (N - 1) % 14;
  }
  return cells;
};