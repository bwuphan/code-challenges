/*
https://leetcode.com/problems/interval-list-intersections/

Given two lists of closed intervals, each list of intervals is pairwise disjoint
and in sorted order.

Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
The intersection of two closed intervals is a set of real numbers that is either empty, or can be
represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)



Example 1:



Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]


Note:

0 <= A.length < 1000
0 <= B.length < 1000
0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9
*/


/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  // Start indices for A, B at 0
  let idxA = 0;
  let idxB = 0;

  const sol = [];
  let a, b;

  // Loop through while we are not at the end for both A and B
  while (idxA < A.length && idxB < B.length) {
    // Only set a, b if they are defined
    if (A[idxA]) a = A[idxA]
    if (B[idxB]) b = B[idxB]

    // Move index B if the second element of B is less than first element of A.
    if (b[1] < a[0]) {
      idxB++;
      continue;
    }

    if (b[0] <= a[1])
      sol.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);

    if (a[1] <= b[1]) idxA++
    else idxB++;
  }

  return sol;
};

/*
Solution:
Loop through arrays A and B and check if there is an overlap between the elements.
There is an overlap when the first element of B is less than or equal to the second element of A.

*/

// console.log(intervalIntersection(A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]))
console.log(intervalIntersection([[10,12],[18,19]], [[1,6],[8,11],[13,17],[19,20]]))