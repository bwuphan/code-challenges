function robotPaths (n) {
  // Write your code here, and
  // return your final answer.
  var newBoard = makeBoard(n);
  var numPaths = 0;
  function traversePath(i, j) {
    if (i === n - 1 && j === n - 1) {
      numPaths++;
      return;
    } else if (i > n - 1 || j > n - 1 || i < 0 || j < 0 || newBoard.hasBeenVisited(i, j)) {
      return;
    } else {
      newBoard.togglePiece(i, j);
      traversePath(i, j + 1);
      traversePath(i, j - 1);
      traversePath(i + 1, j);
      traversePath(i - 1, j);
      newBoard.togglePiece(i, j);
    }
  }
  traversePath(0, 0);
  return numPaths;
}


function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

console.log(robotPaths(3));


/*
Solution:

// No sub-routine, so we pass all the information
// to robotPaths function
var robotPaths = function(n, board, i, j) {
  // Initialize these if not provided (default values)
  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  // No possible paths if you’re off the board
  // or on a piece you shouldn’t be on
  if (!(i >= 0 && i < n && j >= 0 && j < n) ||
      board.hasBeenVisited(i, j)) {
    return 0;
  }
  // One possible path if you’re at the
  // end point (the path that led there)
  if (i === n-1 && j === n-1) return 1;
  board.togglePiece(i, j);
  // Sum up valid paths starting with first moving right, then
  // left, then down, then up
  var result = robotPaths(n, board, i, j+1) +
    robotPaths(n, board, i, j-1) +
    robotPaths(n, board, i+1, j) +
    robotPaths(n, board, i-1, j);
  // We mutated the board, so we need to put it back
  board.togglePiece(i, j);
  return result;


*/