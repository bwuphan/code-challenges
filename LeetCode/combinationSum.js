/*
https://leetcode.com/problems/combination-sum/

Given a set of candidate numbers (candidates) (without duplicates) and a target
number (target), find all unique combinations in candidates where the candidate
numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (!candidates || candidates.length === 0)
    return [];

  // Make sure the candidates are sorted from largest to smallest.
  candidates.sort((a, b) => b - a);

  // Use a set for results so we don't get duplicates.
  const results = new Set();

  // Dfs and find solutions.
  const dfs = (sum, numString, maxNumIdx) => {
    // We found a solution.
    if (sum === target) {
      results.add(numString.slice(1, numString.length));
      return;
    }
    // candidate sums should be positive.
    if (sum < 0)
      return;

    const diff = target - sum;

    // Increment the place in the candidates array until we found a number
    // that is larger than the difference.
    while (diff < candidates[maxNumIdx])
      maxNumIdx++;

    for (let i = maxNumIdx; i < candidates.length; ++i) {
      const candidate = candidates[i];
      const newNumString = `${numString},${candidate}`;

      // If the new num string is not already in the solution set,
      // dfs.
      if (!results.has(newNumString))
        dfs(sum + candidate, `${numString},${candidate}`, i);
    }
  }

  dfs(0, '', 0);
  return Array.from(results)
    .map(sol => sol.split(','));
};




console.log(combinationSum(candidates = [2,3,6,7], target = 7));
console.log(combinationSum(candidates = [2,3,5], target = 8));