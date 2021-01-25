/*
https://leetcode.com/problems/subsets/

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]


Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (!nums || !nums.length)
    return [];

  const results = [];

  nums.forEach(num => {
    results.forEach(result => {
      results.push([...result, num])
    });
    results.push([num]);
  });

  results.push([]);

  return results;
};


/*
Solution:
Start with an empty array.
Iterate through nums.
At each num, we append the current num to the result of the results.
ie, if results so far are [[1]], then we append 2 to the end so it's [[1], [1,2]]
Then add an array with just curNum to the results

*/

console.log(subsets([1,2,3]))
