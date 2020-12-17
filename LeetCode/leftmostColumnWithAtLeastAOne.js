/*
https://leetcode.com/problems/leftmost-column-with-at-least-a-one/

(This problem is an interactive problem.)

A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row i
s sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least
a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix
interface:

BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
BinaryMatrix.dimensions() returns a list of 2 elements [rows, cols], which means the matrix is rows
* cols.
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any
solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four
examples. You will not have access the binary matrix directly.







Example 1:



Input: mat = [[0,0],[1,1]]
Output: 0
Example 2:



Input: mat = [[0,0],[0,1]]
Output: 1
Example 3:



Input: mat = [[0,0],[0,0]]
Output: -1
Example 4:



Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1


Constraints:

rows == mat.length
cols == mat[i].length
1 <= rows, cols <= 100
mat[i][j] is either 0 or 1.
mat[i] is sorted in a non-decreasing way.
*/



/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  const dimensions = binaryMatrix.dimensions();
  let row = 0;
  let col = dimensions[1] - 1;

  let hasSolution = false;

  while (row < dimensions[0]) {
    if (col >= 0) {
      let val = binaryMatrix.get(row, col);
      while (val > 0) {
        if (!hasSolution && val === 1)
          hasSolution = true;

        val = binaryMatrix.get(row, col - 1);
        if (val > 0)
          col--;
      }
    }
    row++;
  }
  return hasSolution ? col : -1;
};


/*
Solution:
Start at right most column on first row.
Move from right to left to find the 1 that preceds a 0.
Once found, move down a row and repeat same thing.
Eventually, reach bottom and the col is the lowest 1.

0, 0, 1
0, 0, 0
0, 1, 1

First overall loop will have row, col be 0, 2 respectively
GO down and find that 1, 2 is not a 1.
Move down and find that 2, 2 is a 1.
Move to the left and find another 1. 2, 1
Move left again and find that it is 0.
So 1 is the final answer
*/