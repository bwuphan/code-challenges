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
      console.log(firstNum);
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

console.log(threeSum(
[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));