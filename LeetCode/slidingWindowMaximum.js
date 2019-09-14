/*
https://leetcode.com/problems/sliding-window-maximum/

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7]
Explanation:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note:
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // This is the object to hold the break indices in the array. Depends on how large k is.
  let breakIndices = new Set([0]);
  nums.forEach((num, i) => {
    // If the index + 1 is divisible by k, we have a break index.
    if ((i + 1) % k === 0) {
      breakIndices.add(i + 1);
    }
  });

  let max = nums[0]; // Max for that subarray.
  let left = { 0: max }; // Start off setting 0 to the max.
  // Start at i = 1 because we already have 0 in.
  for (let i = 1; i < nums.length; ++i) {
    const curNum = nums[i];
    // If the current index is a break index, time to reset max.
    if (breakIndices.has(i)) {
      max = curNum;
    }
    // Else, compare the current number to the max and set a new max if necessary.
    else {
      if (curNum > max) {
        max = curNum;
      }
    }
    // Set the max at index i.
    left[i] = max;
  }

  max = nums[nums.length - 1];
  let right = { [nums.length - 1]: max};

  for (let i = nums.length - 1; i >= 0; --i) {
    const curNum = nums[i];
    if (breakIndices.has(i + 1)) {
      max = curNum;
    }
    else {
      if (curNum > max) {
        max = curNum;
      }
    }
    right[i] = max;
  }

  let results = [];
  for (let i = 0, j = k - 1; i < nums.length; ++i) {
    // RightMax is the max coming from the right. It has to be the more left index.
    const rightMax = right[i];
    // LeftMax is the max coming form the left. It has to the more right index (j).
    const leftMax = left[j];
    results.push(Math.max(leftMax, rightMax));

    if (j < nums.length - 1) {
      j++;
    }
    else {
      return results;
    }
  }
  return results;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));

