/*
https://leetcode.com/problems/sliding-window-maximum/

Given an array nums, there is a sliding window of size k which is moving from
the very left of the array to the very right. You can only see the k numbers in
the window. Each time the sliding window moves right by one position. Return
the max sliding window.

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


// Solution 2 7/19
var maxSlidingWindow = (nums, k) => {
  const blockIndices = new Set([0]);

  for (let i = 1; i < nums.length; ++i) {
    if (i % k === 0)
      blockIndices.add(i);
  }

  const leftToRight = [];
  let max = null;
  nums.forEach((num, i) => {
    if (blockIndices.has(i) || num > max)
      max = num;
    leftToRight[i] = max;
  });

  max = null;
  const rightToLeft = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    const num = nums[i];
    if (blockIndices.has(i + 1) || max === null || num > max)
      max = num;
    rightToLeft[i] = max;
  }

  const results = [];
  for (let leftIdx = 0, rightIdx = k - 1; rightIdx < nums.length; ++leftIdx, ++rightIdx) {
    results.push(Math.max(leftToRight[rightIdx], rightToLeft[leftIdx]));
  }

  return results;
}

/*
Solution:

We are going to section off each block of nums by k.
1,3,-1 | -3,5,3 | 6,7

Then, we create two arrays that store the max value from left to right and right to left.
Whenever we pass the block index, we should create a new max value for that block.
 1, 3,-1 | -3, 5, 3 |  6, 7   OG
 1, 3, 3 | -3, 5, 5 |  6, 7   Left to right
 3, 3, 3 |  5, 5, 3 |  7, 7   Right to left

We then loop through nums in these chunks with two pointers at each border.

We want to get the maximum per block so going leftToRight we'd use the right pointer
and rightToLeft, we'd use the left pointer.

Get the max between these two pointers in their respective arrays.
*/
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));

