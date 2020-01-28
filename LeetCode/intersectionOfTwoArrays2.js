/*
https://leetcode.com/problems/intersection-of-two-arrays-ii/

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load
all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // Create a map of nums1 that has the number of occurences.
  let mapNum1 = {};
  nums1.forEach(num => {
    if (num in mapNum1) mapNum1[num]++;
    else mapNum1[num] = 1;
  });

  // Create a map of nums2 that has the number of occurences.
  let mapNum2 = {};
  nums2.forEach(num => {
    if (num in mapNum2) mapNum2[num]++;
    else mapNum2[num] = 1;
  });

  // Combine the arrays and make a set out of it so we have the numbers to check without
  // repeating a check.
  const combinedSet = new Set(nums1.concat(nums2));

  let resultArr = [];
  combinedSet.forEach(num => {
    // If the num appears in both maps, we have an intersection.
    if (num in mapNum1 && num in mapNum2) {
      // Get the lowest number of occurences between the two.
      const numIntersections = Math.min(mapNum1[num], mapNum2[num]);

      // Add the correct number of occurences to the resultArr.
      for (let i = 0; i < numIntersections; ++i) {
        resultArr.push(num);
      }
    }
  });

  return resultArr;
};