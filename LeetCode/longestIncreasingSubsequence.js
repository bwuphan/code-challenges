/*
https://leetcode.com/problems/longest-increasing-subsequence/

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length);
  dp[0] = 1;

  let max = 0;
  for (let i = 1; i < nums.length; ++i) {
    let curMax = 1;
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j] && dp[j] >= curMax) {
        curMax = dp[j] + 1;
      }
    }
    dp[i] = curMax;

    if (max < curMax)
      max = curMax;
  }

  return nums.length ? dp[nums.length - 1] : 0;
};


/*
Solution:
Create a dp array that keeps track of the max subsequence up to the index.

Create a nested loop that goes up to the ith index comparing the two numbers.

If we find that nums[i] > nums[j], we know that the longest increasing subsequence at that number
would be dp[j] + 1.

Return the longest max we could find.
*/

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]) === 4);

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
