/*
https://leetcode.com/problems/jump-game-ii/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.

Accepted
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curFarthest = 0;
  let curEnd = 0;
  let numJumps = 0;

  for (let i = 0; i < nums.length - 1; ++i) {
    curFarthest = Math.max(curFarthest, i + nums[i]);

    if (curFarthest >= nums.length - 1) {
      return numJumps + 1;
    }
    if (curEnd === i) {
      numJumps++;
      curEnd = curFarthest;
    }
  }

  return numJumps;
};

console.log(jump([2, 3, 1, 1, 4]));