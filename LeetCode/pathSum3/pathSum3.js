/*
https://leetcode.com/problems/path-sum-iii/

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling
only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var pathSum = function(root, sum) {
  // If the root is falsey, return 0 because there are 0 solutions.
  if (!root)
    return 0;

  // sumsMap describes the number of occurences of sums for the current node. We init to 0: 1 in
  // case the root is the target sum.
  const sumsMap = { 0: 1 };

  let numSolutions = 0;

  const dfs = (node, curSum) => {
    if (!node)
      return;

    curSum += node.val;
    const targetVal = curSum - sum;

    // Init matchOccurences to the number of occurences of the targetVal or 0.
    const matchOccurences = sumsMap[targetVal] ? sumsMap[targetVal] : 0;

    // Add matchOccurences to the number of solutions.
    numSolutions += matchOccurences;

    // If the sumsMap already has the curSum, increment by 1. Otherwise, init to 1.
    if (sumsMap[curSum])
      sumsMap[curSum]++;
    else
      sumsMap[curSum] = 1;

    // Recurse.
    dfs(node.left, curSum);
    dfs(node.right, curSum);

    // Reset sumsMap so we don't have to make copies of it.
    sumsMap[curSum]--;
  };

  dfs(root, 0);

  return numSolutions;
};

/**
 * SOLUTION.
 * To solve this efficiently, I am creating a sumsMap hashMap to keep track of the occurences of
 * sums up to the node. For example, when we get to node with val 3 on the third row, first from
 * the left, our sumsMap should look like this: { 0: 1, 10: 1, 15: 1 }.
 *
 * Now, at this node we will add this nodes value to the current sum of the path. 10 + 5 + 3 = 18.
 *
 * To get our target value, we subtract the target sum from the current sum. 18 - 8 = 10.
 *
 * With this target value, we check how many occurences of 10 exist in the sumsMap. In this case,
 * 1 occurence.
 *
 * We add the number of occurences to the number of solutions.
 *
 * Update the sumsMap, and recurse through the nodes left and right side.
 *
 * Reset the sumsMap by decrementing the current sums occurences by 1.
 */