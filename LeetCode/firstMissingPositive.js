/*
https://leetcode.com/problems/first-missing-positive/

Given an unsorted integer array nums, find the smallest missing positive integer.



Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1


Constraints:

0 <= nums.length <= 300
-231 <= nums[i] <= 231 - 1


Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const set = new Set(nums);

  for (let i = 1; i <= nums.length; ++i) {
    if (!set.has(i))
      return i;
  }

  return nums.length + 1;
};


// Constant space
firstMissingPositive = (nums) => {
  if (nums.indexOf(1) < 0) return 1;

  nums.forEach((num, i) => {
    if (num > nums.length || num < 1)
      nums[i] = 1;
  });

  let result = null;
  nums.forEach((num, i) => {
    const a = Math.abs(nums[i])
    if (a === nums.length)
      nums[0] = -Math.abs(nums[0]);
    else
      nums[a] = -Math.abs(nums[a])
  })

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > 0)
      return i
  }

  return nums[0] > 0 ? nums.length : nums.length + 1;
}

// console.log(firstMissingPositive([]))
console.log(firstMissingPositive([1,2,0]));
// console.log(firstMissingPositive([3,4,-1,1]))
// console.log(firstMissingPositive([3,4,-1,-2,1,5,16,0,2,0]))


