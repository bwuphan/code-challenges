/*
https://leetcode.com/problems/spiral-matrix/

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral
order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let startRow = 0;
  let endRow = matrix.length - 1;
  let results = [];
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i < endCol; i++) {
      results.push(matrix[startRow][i])
    }
    for (let i = startRow; i < endRow; i++) {
      results.push(matrix[i][endRow]);
    }
    for (let i = endCol; i >= startCol; i--) {
      results.push(matrix[endRow][i]);
    }
    endCol--;
    startRow++;
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      results.push(matrix[i][startCol]);
    }
    startCol++;
    // console.log(results);
  }

  return results;
};

const input1 = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];

console.log(spiralOrder(input1));

const input2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

console.log(spiralOrder(input2));