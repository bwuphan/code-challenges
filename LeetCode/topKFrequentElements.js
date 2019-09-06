/*
https://leetcode.com/problems/top-k-frequent-elements/

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = {};

  nums.forEach(num => {
    if (!(num in map)) {
      map[num] = 0;
    }
    else {
      map[num]++;
    }
  });

  let occurArr = [];
  for (let key in map) {
    occurArr.push({ num: key, occurences: map[key] });
  }
  return occurArr
    .sort((a, b) => b.occurences - a.occurences)
    .map(occurObj => parseInt(occurObj.num))
    .slice(0, k);
};


console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))