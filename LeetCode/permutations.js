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
  const dfs = (numArr) => {
    if (visited.size === nums.length) {
      permutations.push([...numArr]);
      return;
    }

    nums.forEach(n => {
      if (!visited.has(n)) {
        numArr.push(n);
        visited.add(n);

        dfs(numArr);

        numArr.pop();
        visited.delete(n);
      }
    });
  }

  dfs([]);

  return permutations;
};

/*
Solution: Use backtracking to keep track of visited numbers.
*/
console.log(permute([1,2,3]));
// console.log(permute([1]));