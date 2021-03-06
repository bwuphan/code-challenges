/*
https://leetcode.com/problems/diameter-of-binary-tree/

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a
binary tree is the length of the longest path between any two nodes in a tree. This path may or
may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
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
var diameterOfBinaryTree = function(root) {
  if (!root || (!root.left && !root.right)) return 0;
  let maxDiameter = 0;

  const dfs = function(node) {
    if (!node) return 0;

    // The diameters of the left and right subtrees.
    const left = dfs(node.left);
    const right = dfs(node.right);

    // The max diameter is whatever is greater, the maxDiameter or combination of left and right diameters.
    maxDiameter = Math.max(maxDiameter, left + right);

    // Value of this diameter is the left and right subtree diameters plus 1 for the current node.
    return Math.max(left, right) + 1;
  }

  dfs(root);

  return maxDiameter;
};