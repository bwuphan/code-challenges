/*
https://leetcode.com/problems/monotonic-array/

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone
decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.



Example 1:

Input: [1,2,2,3]
Output: true
Example 2:

Input: [6,5,4,4]
Output: true
Example 3:

Input: [1,3,2]
Output: false
Example 4:

Input: [1,2,4,5]
Output: true
Example 5:

Input: [1,1,1]
Output: true


Note:

1 <= A.length <= 50000
-100000 <= A[i] <= 100000
*/


/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  if (A.length <= 1) return true;

  const firstEl = A[0];
  const lastEl = A[A.length - 1];

  let direction = null;
  if (firstEl < lastEl) direction = 1;
  else if (firstEl > lastEl) direction = -1;
  else direction = 0;

  for (let i = 1; i < A.length; ++i) {
    const prev = A[i - 1];
    const cur = A[i];

    if (direction === 1 && cur < prev) return false;
    if (direction === 0 && cur !== prev) return false;
    if (direction === -1 && cur > prev) return false;
  }

  return true;
};


console.log(isMonotonic([1,2,2,3]));

console.log(isMonotonic([6,5,4,4]))

console.log(isMonotonic([1,3,2]))

console.log(isMonotonic([1,2,4,5]))

console.log(isMonotonic([1,1,1]))