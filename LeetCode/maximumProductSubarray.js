/*
https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find the contiguous subarray within an array
(containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums || !nums.length) return 0;

  let curMax = nums[0];
  let curMin = nums[0];
  let result = curMax;

  for (let i = 1; i < nums.length; ++i) {
    const curNum = nums[i];

    const max = Math.max(curNum, curNum * curMax, curNum * curMin);
    const min = Math.min(curNum, curNum * curMax, curNum * curMin);

    curMax = max;
    curMin = min;

    const maxHere = Math.max(curMax, curMin);

    if (result < maxHere) result = maxHere;
  }

  return result;
};

/*
Solution:
Use DP
Keep track of the current max and min as you go through the array.
Current max is calculated by getting the max of these 3 options:
1. the current number
2. the current number * curMax
3. the current number * curMin

We have to also count in curMin in the cases of negative * negative.
Keep track of current min in the same way.

At the end of each iteration, check if the max between curMin and curMax
is greater than the result.
If that's the case, we have a new result.

*/

// console.log(maxProduct([2,3,-2,4]))
// console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([-4,-3,-2]))