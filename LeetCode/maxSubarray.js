/*
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // Make a copy of the array so we don't have side effects.
  nums = [...nums];

  // Set max to the first element of nums because first element's max is itself.
  let max = nums[0];

  // Start array at 1 since we already looked at 0 element.
  for (let i = 1; i < nums.length; ++i) {
    const prevNum = nums[i - 1];

    // If prevNum is greater than 0, that means adding it to the current num is larger than
    // current num by itself. If that's the case, we set nums[i] to itself plus the previous num.
    if (prevNum > 0) {
      nums[i] = prevNum + nums[i];
    }

    // If nums[i] is greater than the max, we have a new max.
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));