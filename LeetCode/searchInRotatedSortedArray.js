/*
https://leetcode.com/problems/search-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // Find the pivot idx.
  let left = 0;
  let right = nums.length - 1;

  let pivotIdx = null;
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (nums[middle] > nums[middle + 1]) {
      pivotIdx = middle + 1;
      break;
    }
    else if (nums[middle] < nums[middle - 1]) {
      pivotIdx = middle;
      break;
    }
    else {
      if (nums[middle] > nums[left])
        left = middle + 1;
      else
        right = middle - 1;
    }
  }

  // If there is no pivot index, it must be the first element.
  if (!pivotIdx) pivotIdx = 0;
  // If the target is at the pivot index, return the pivot index.
  if (target === nums[pivotIdx]) return pivotIdx;

  // Set new left and right boundaries.
  if (target >= nums[pivotIdx] && target <= nums[nums.length - 1]) {
    left = pivotIdx + 1;
    right = nums.length - 1;
  }
  else {
    left = 0;
    right = pivotIdx - 1;
  }

  // Binary search until we find the target.
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (nums[middle] === target)
      return middle;
    else if (target < nums[middle])
      right = middle - 1;
    else if (target > nums[middle])
      left = middle + 1;
  }

  if (nums[left] !== target) return -1;
};


console.log(search(nums = [4,5,6,7,0,1,2], target = 0) === 4);
console.log(search(nums = [4,5,6,7,0,1,2], target = 3) === -1);
console.log(search(nums = [4,5,6,7,8,1,2,3], target = 5) === 1);
console.log(search([1,2,3,4,5,6], target = 3) === 2)
console.log(search([5,6,7,8,9,2], target = 3) === -1)
console.log(search([3,1], 3) === 0)
console.log(search([8,9,2,3,4], 9) === 1);
console.log(search([3,5,1], 3) === 0)
console.log(search([15,16,19,20,25,1,3,4,5,7,10,14], 25) === 4);
console.log(search([1,3], 2) === -1);
console.log(search([5,1,3],1) === 1);