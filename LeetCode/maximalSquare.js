/*
https://leetcode.com/problems/maximal-square/

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and
return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let longestLength = 0;

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      const el = matrix[i][j];

      if (el === "1") {
        let length = 1;
        let stop = false;

        while (!stop) {
          length++;
          if ((i + length) > matrix.length || (j + length) > matrix[0].length) {
            stop = true;
            break;
          }
          for (let k = 0; k < length; ++k) {
            if (matrix[i + length - 1][j + k] !== "1" || matrix[i + k][j + length - 1] !== "1") {
              stop = true;
              break;
            }
          }
        }

        length--;
        if (longestLength < length) longestLength = length;
      }
    }
  }

  return longestLength * longestLength;
};


/*
  SOlution:
  Iterate cell by cell.
  Once you get to a 1, start an inner loop.
  Check for a square moving out from left to right, top to bottom. If we end up out of bounds,
  or find a 0, stop incrementing the length and check if we have a new longest length.

*/

var test = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]

var test = [
["1","1","1","1","1","1","1","1"],
["1","1","1","1","1","1","1","0"],
["1","1","1","1","1","1","1","0"],
["1","1","1","1","1","0","0","0"],
["0","1","1","1","1","0","0","0"]
]

console.log(maximalSquare(test) === 16);