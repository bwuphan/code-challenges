/*
https://leetcode.com/problems/binary-tree-maximum-path-sum/

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node
in the tree along the parent-child connections. The path must contain at least one node and does
not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
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
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = null;

  const getMaxGain = function(node) {
    if (!node) return 0;

    let max = node.val;

    const left = Math.max(getMaxGain(node.left), 0);
    const right = Math.max(getMaxGain(node.right), 0);

    max = max + left + right;

    if (maxSum === null || max > maxSum) {
      maxSum = max;
    }

    return node.val + Math.max(left, right);
  }

  getMaxGain(root);
  return maxSum;
};