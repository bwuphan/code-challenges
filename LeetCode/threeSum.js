/*
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
  nums = nums.sort();
  let results = [];

  // Object to store values and their indexes.
  let valueObj = nums.reduce((obj, num, i) => {
    if (num in obj) {
      obj[num].push(i);
    }
    else {
      obj[num] = [i];
    }
    return obj;
  }, {});

  let forwardObj = {};
  let backwardObj = {};
  let solutionObj = {};
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 1; j < nums.length; ++j) {
      if (j !== i) {
        const forwardStr = `${nums[i]},${nums[j]}`;
        const backwardStr = `${nums[j]},${nums[i]}`;
        if (!(forwardStr in forwardObj)) {
          forwardObj[forwardStr] = true;
          backwardObj[backwardStr] = true;

          const numNeeded = 0 - (nums[i] + nums[j]);

          if (numNeeded in valueObj) {
            const idxArr = valueObj[numNeeded];
            for (let k = 0; k < idxArr.length; ++k) {
              const idx = idxArr[k];
              if (idx !== i && idx !== j) {
                const solution = [nums[i], nums[j], numNeeded].sort();
                const solutionStr = JSON.stringify(solution);
                if (!(solutionStr in solutionObj)) {
                  results.push(solution);

                  solutionObj[solutionStr] = true;
                }
              }
            }
          }
        }
      }
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));