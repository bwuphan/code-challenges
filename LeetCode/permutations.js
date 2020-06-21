/*
https://leetcode.com/problems/permutations/

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (!nums.length) return [];

  let permutations = [];

  const visited = new Set();
  const dfs = (numStr) => {
    if (visited.size === nums.length) {
      permutations.push(numStr);
      return;
    }

    nums.forEach(n => {
      if (!visited.has(n)) {
        const numArrCopy = [...numStr];
        numArrCopy.push(n);
        visited.add(n);
        dfs(numArrCopy);
        visited.delete(n);
      }
    });

  }
  dfs('');

  return permutations;
};

/*
Solution: Use backtracking to keep track of visited numbers.
*/
console.log(permute([1,2,3]));
// console.log(permute([1]));