/*
https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  const solutions = [];

  let firstNum = null;
  for (let i = 0; i < nums.length - 2; ++i) {
    if (firstNum !== nums[i]) {
      firstNum = nums[i];
      let lowIdx = i + 1;
      let hiIdx = nums.length - 1;
      while (lowIdx < hiIdx) {
        const sum = firstNum + nums[lowIdx] + nums[hiIdx];

        if (sum < 0 || (lowIdx > i + 1 && nums[lowIdx] === nums[lowIdx - 1])) {
          lowIdx++;
        }
        else if (sum > 0 || (hiIdx < nums.length - 1 && nums[hiIdx] === nums[hiIdx + 1])) {
          hiIdx--;
        }
        else {
          solutions.push([firstNum, nums[lowIdx], nums[hiIdx]]);
          lowIdx++;
          hiIdx--;
        }
      }
    }
  }

  return solutions;
};

/*
Solution:
Iterate from left to right for first number.

Inside this loop, set left pointers and right pointers and move the pointers inward.
If the sum is less than 0, we need to increment up the left pointer.
If the sum is greater than 0, we need to decrement the right pointer.
Else, we found a solution.

Note: we need to make sure we don't make duplicates so check to see if there is
a repeat of the firstNum or left pointers or right pointers. If we are on a repeat,
increment the first num or move the left and right pointer.
*/

console.log(threeSum(
[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));