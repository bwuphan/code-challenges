/*
https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers nums, return the length of the longest consecutive
elements sequence.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9


Constraints:

0 <= nums.length <= 104
-109 <= nums[i] <= 109


Follow up: Could you implement the O(n) solution?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numSet = new Set(nums);

  let longest = 0;

  numSet.forEach(num => {
    // Only start the inner loop if the num is the smallest of its sequence.
    if (!numSet.has(num - 1)) {
      // Get the longest sequence at this num.
      let curLongest = 1;
      while (numSet.has(++num)) {
        curLongest++;
      }

      if (curLongest > longest) {
        longest = curLongest;
      }
    }
  });

  return longest;
};

/*
Loop through nums set until you find the smallest in the sequence.
From there, get the longest current sequence.
Compare to longest sequence.

Time complexity is O(N)
Space O(N)

*/

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))