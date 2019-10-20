/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Given an array of integers nums sorted in ascending order, find the starting and ending position of
a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  /*
    1. Do a binary search and find a index in nums where it equals the target.
    2. Use recursion to find if there are other numbers that are the same as the found index to the
       left and right.
  */

  // Binary search function to find an index.
  const binarySearch = function(leftBoundary, rightBoundary, midpoint) {
    // If the difference between two boundaries is less than or equal to 1, check if one of those
    // boundaries is equal to the target.
    if ((rightBoundary - leftBoundary) <= 1) {
      if (nums[rightBoundary] === target) return rightBoundary;
      else if (nums[leftBoundary] === target) return leftBoundary;
    }

    // If the midpoint equals the target, we found an index.
    if (nums[midpoint] === target) return midpoint;

    // If the left boundary and right boundary meet and we still haven't found the target, the
    // target is not in nums.
    if (leftBoundary >= rightBoundary && midpoint === nums[midpoint] !== target) return -1;

    let newMidpoint = null;
    // If the target is greater than the midpoint, reset the left boundary to around the midpoint
    // and create a new midpoint.
    if (target > nums[midpoint]) {
      leftBoundary = midpoint + 1;
      newMidpoint = Math.floor(((midpoint + rightBoundary) / 2), leftBoundary);
    }
    // If the target is less than the midpoint, reset the right boundary to around the midpoint and
    // create a new midpoint.
    else if (target < nums[midpoint]) {
      rightBoundary = midpoint - 1;
      newMidpoint = Math.floor(((leftBoundary + midpoint) / 2), rightBoundary);
    }

    // Recurse.
    return binarySearch(leftBoundary, rightBoundary, newMidpoint);
  }


  // Function to find indices of matching nums.
  const findIndices = function(idx) {
    // If we have already seen this index, return out of it.
    if (traveledIndices.has(idx)) return;

    // Add the index to traveledIndices.
    traveledIndices.add(idx);
    if (nums[idx] !== target) return;

    // If the index is greater than the matched index, we know it is the upper bounded match.
    if (idx > matchIdx) result[1] = idx;
    else if (idx < matchIdx) result[0] = idx;

    // Recurse.
    findIndices(idx - 1);
    findIndices(idx + 1);
  }


  const matchIdx = binarySearch(0, nums.length, Math.floor((nums.length - 1)/ 2));

  if (matchIdx === -1) return [-1,-1];

  let traveledIndices = new Set();
  traveledIndices.add(matchIdx);

  let result = [matchIdx, matchIdx];

  findIndices(matchIdx - 1);
  findIndices(matchIdx + 1);

  return result;
};

console.log(searchRange(nums = [5,7,7,8,8,10], target = 8))
console.log(searchRange(nums = [5,7,7,8,8,10], target = 6))
console.log(searchRange(nums = [], target = 6))
console.log(searchRange(nums = [1], target = 1))
console.log(searchRange(nums = [1], target = -1))
console.log(searchRange(nums = [1, 4], target = 4))
console.log(searchRange(nums = [0,1,2,3,4,4,4], target = 2))
console.log(searchRange(nums = [1,2,3], target = 1))