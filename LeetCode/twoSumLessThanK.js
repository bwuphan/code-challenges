/*
https://leetcode.com/problems/two-sum-less-than-k/

Given an array A of integers and integer K, return the maximum S such that there exists i < j
with A[i] + A[j] = S and S < K. If no i, j exist satisfying this equation, return -1.



Example 1:

Input: A = [34,23,1,24,75,33,54,8], K = 60
Output: 58
Explanation:
We can use 34 and 24 to sum 58 which is less than 60.
Example 2:

Input: A = [10,20,30], K = 15
Output: -1
Explanation:
In this case it's not possible to get a pair sum less that 15.


Note:

1 <= A.length <= 100
1 <= A[i] <= 1000
1 <= K <= 2000
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  /* Sort array from highest to lowest so we can break out of loops faster. We can break out of
  loops faster because once we reach a number that is smaller than the sum, we know the longer we
  move in the array, the smaller the sum will be. Since we want the largest sum smaller than k, this
  is not desirable. */
  let sortedArr = A.sort((a, b) => b - a);

  let smallestDiff = null;
  for (let i = 0; i < sortedArr.length; ++i) {
    const curFirstNum = sortedArr[i];

    // If the first number is larger or equal to K, it is pointless to try this number.
    if (curFirstNum >= K) continue;

    for (let j = 0; j < sortedArr.length; ++j) {
      // If i is the same index as j or this is a repeat, continue in the loop.
      if (i === j || (sortedArr[j - 1] && sortedArr[j - 1] === sortedArr[j])) {
        continue;
      }

      const curSecondNum = sortedArr[j];

      const sum = curFirstNum + curSecondNum;

      // If the sum is greater than or equal to K, this is not a solution. Continue to see if we
      // could find a smaller sum.
      if (sum >= K) {
        continue;
      }
      // If the smallestDiff is not yet set, set smallestDiff.
      else if (smallestDiff === null) {
        smallestDiff = sum;
      }
      // Else, the sum must be smaller than K.
      else  {
        // If the sum is greater than the last smallest diff, we have a new smallest diff.
        if (sum > smallestDiff) {
          smallestDiff = sum;
        }
        // If not, we can stop this current loop because the sum will only get smaller from here.
        else {
          break;
        }
      }
    }
  }
  return smallestDiff || -1;
};

console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60))

console.log(twoSumLessThanK([10,20,30], 15))