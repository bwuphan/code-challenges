/*
https://leetcode.com/problems/subarray-sum-equals-k/

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // Count of subarrays.
  let count = 0;

  // Init the sumMap.
  let sumMap = { 0: 1 };

  // The cumulative sum.
  let sum = 0;

  nums.forEach(num => {
    // Get the cumulative sum.
    sum += num;

    // Diff is the sum - k.
    const diff = sum - k;

    // If the diff is already in the sumMap, we have a match. Add to the count the number
    // of occurences of the diff.
    if (diff in sumMap) {
      count += sumMap[diff];
    }

    if (sum in sumMap) sumMap[sum]++;
    else sumMap[sum] = 1;

  });

  return count;
};

var subarraySum = function(nums, k) {
  let count = 0;

  for (let start = 0; start < nums.length; ++start) {
    let sum = 0;
    for (let end = start; end < nums.length; ++end) {
      sum += nums[end];
      if (sum === k) count++;
    }
  }

  return count;
}

console.log(subarraySum([1,1,1], 2));
console.log(subarraySum([1,2,3], 3))
console.log(subarraySum([3,4,7,2,-3,1,4,2], 7))