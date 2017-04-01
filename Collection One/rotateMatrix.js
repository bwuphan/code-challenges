var rotateMatrix = function(matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var rotatedMatrix = [];
  for (var i = 0; i < n; i++) {
    console.log(matrix)
    rotatedMatrix[i] = [];
    for (var j = 0; j < m; j++) {
      rotatedMatrix[i][j] = matrix[m - 1 - j][i];
    }
  }
  return rotatedMatrix;
};

console.log(rotateMatrix([ [1, 2, 3],
  [4, 5, 6] ]))