/*
https://leetcode.com/problems/search-a-2d-matrix-ii/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the
following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

Accepted
*/

const getRow = (num, matrix) =>
  Math.floor(num / matrix[0].length);

const getCol = (num, matrix) => num % matrix[0].length

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  /* We're going to start at the bottom in terms of the row and init the col to 0. If the target is
     smaller than the num, we decrement the row. If the target is greater, we increment the col.
     We do this until we reach the target or go out of bounds.
  */

  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && row < matrix.length && matrix[row][col] !== undefined) {
    const num = matrix[row][col];

    if (target === num)
      return true;
    else if (target < num) {
      row--;
    }
    else {
      col++;
    }
  }

  return false;
};

const matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
// const matrix = [[1,4],[2,5]]

console.log(searchMatrix(matrix, 5));

console.log(searchMatrix(matrix, 20));

console.log(searchMatrix(matrix, 2))
// console.log(getRow(10, matrix))
// console.log(getCol(4, matrix))