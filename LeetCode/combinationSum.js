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

  candidates.sort((a, b) => b - a);
  const candidateSet = new Set(candidates);


  const results = new Set();

  const dfs = (sum, numString, maxNumIdx) => {
    if (sum === target) {
      results.add(numString.slice(1, numString.length));
      return;
    }
    if (sum < 0)
      return;

    const diff = target - sum;

    while (diff < candidates[maxNumIdx]) {
      maxNumIdx++;
    }
    for (let i = maxNumIdx; i < candidates.length; ++i) {
      const candidate = candidates[i];
      const newNumString = `${numString},${candidate}`;
      if (!candidateSet.has(newNumString))
        dfs(sum + candidate, `${numString},${candidate}`, i);
    }
  }

  dfs(0, '', 0);
  return Array.from(results)
    .map(sol => sol.split(','));
};


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (!candidates || candidates.length === 0)
    return [];

  candidates.sort((a, b) => b - a);
  const candidateSet = new Set(candidates);


  const results = new Set();

  const dfs = (sum, numString, maxNumIdx) => {
    if (sum === target) {
      results.add(numString);
      return;
    }
    if (sum < 0)
      return;

    const diff = target - sum;

    if (candidateSet.has(diff)) {
      const newNumString = numString.length > 0 ? `${numString},${diff}` : `${diff}`;
      results.add(newNumString)
    }
    else {
      while (diff < candidates[maxNumIdx]) {
        maxNumIdx++;
      }


      for (let i = maxNumIdx; i < candidates.length; ++i) {
        const candidate = candidates[i];
        const newNumString = numString.length > 0 ? `${numString},${candidate}` : `${candidate}`;
        if (!candidateSet.has(newNumString))
          dfs(sum + candidate, newNumString, i);
      }
    }

  }

  dfs(0, '', 0);
  return Array.from(results)
    .map(sol => sol.split(','));
};


console.log(combinationSum(candidates = [2,3,6,7], target = 7));
console.log(combinationSum(candidates = [2,3,5], target = 8));