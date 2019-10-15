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

  const dfs = function(startArr, resultArr) {
    // If there is nothing left in the startArr, we know we have a result.
    if (startArr.length === 0) {
      permutations.push(resultArr);
    }

    // Loop through the startArr.
    for (let i = 0; i < startArr.length; ++i) {\
      // Make copies to avoid side effects.
      let resultArrCpy = [...resultArr];
      let startArrCpy = [...startArr];

      // Push the next element onto the result array copy.
      resultArrCpy.push(startArr[i]);

      // Take the element out of the start array copy.
      startArrCpy.splice(i, 1);

      // Recurse.
      dfs(startArrCpy, resultArrCpy);
    }
  }

  dfs(nums, []);
  return permutations;
};


console.log(permute([1,2,3]));
console.log(permute([1]));