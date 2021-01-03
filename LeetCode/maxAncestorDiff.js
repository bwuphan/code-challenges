/*
https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

Given the root of a binary tree, find the maximum value V for which there exist different nodes A
and B where V = |A.val - B.val| and A is an ancestor of B.

A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an
ancestor of B.



Example 1:


Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
Example 2:


Input: root = [1,null,2,null,0,3]
Output: 3


Constraints:

The number of nodes in the tree is in the range [2, 5000].
0 <= Node.val <= 105
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  if (!root)
    return null;

  let biggestDiff = null;

  const dfs = (node, curMax, curMin) => {
    if (!node)
      return 0;

    const maxChild = Math.max(Math.abs(curMax - node.val), Math.abs(curMin - node.val));

    if (biggestDiff === null || maxChild > biggestDiff) {
      biggestDiff = maxChild;
    }

    curMax = Math.max(node.val, curMax);
    curMin = Math.min(node.val, curMin);

    dfs(node.left, curMax, curMin);
    dfs(node.right, curMax, curMin);

    return;
  }

  dfs(root, root.val, root.val);

  return biggestDiff;
};