/*
https://leetcode.com/problems/unique-binary-search-trees/

Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const G = {};
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      if (!G[i])
        G[i] = 0;

      G[i] += G[j - 1] * G[i - j];
    }
  }

  return G[n];
};

console.log(numTrees(3) === 5);


/*
  Solution:

  F(i, n) = G(i - 1) * G(n - i)
  We init G(0) and G(1) to 1 because we know there is only 1 possibility for those.
  Init the outer loop to 2 since we already know 1 and 0.
  G[j - 1] is possiblities from left subtree and G[i - j] is possiblities from right subtree.

*/