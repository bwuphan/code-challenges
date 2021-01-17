/*
https://leetcode.com/problems/rotate-image/

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.



Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]


Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    const subMatrixLength = 2 - i - 1;
    console.log('I', i, subMatrixLength);
    for (let j = 0; j < subMatrixLength; j++) {
      console.log('first', matrix[i][j])
      let temp = matrix[j][subMatrixLength];
      console.log('1 temp', temp)
      matrix[j][subMatrixLength] = matrix[i][j];
      let sol = temp;
      temp = matrix[subMatrixLength][subMatrixLength - j]
      console.log('2 temp', temp)
      matrix[subMatrixLength][subMatrixLength - j] = sol;
      sol = temp;
      temp = matrix[subMatrixLength - j][i];
      console.log('3 temp', temp);
      matrix[subMatrixLength - j][i] = sol;
      // matrix[subMatrixLength][subMatrixLength - j] = temp;
      sol = temp;
      temp = matrix[i][i + j];
      console.log('4 temp', temp);
      matrix[i][i + j] = sol;

    }


  }
  return matrix
};

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))