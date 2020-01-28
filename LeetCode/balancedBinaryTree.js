/*
https://leetcode.com/problems/balanced-binary-tree/


Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let isBalanced = true;

  const dfs = function(node, depth) {
    // If there is no node here, just return the depth without incrementing.
    if (!node) return depth;

    depth++;

    // If there is no node to the right or left, just return the depth.
    if (!node.left && !node.right)
      return depth;

    // Recurse and find depths of left and right.
    const leftDepth = dfs(node.left, depth);
    const rightDepth = dfs(node.right, depth);


    const diff = rightDepth - leftDepth;

    // If the diff is greater than 1, we have found a falsey.
    if (Math.abs(diff) > 1)
      isBalanced = false;

    // Return whatever is greater, the right of left depth.
    return Math.max(leftDepth, rightDepth);
  }

  dfs(root, 0);

  return isBalanced;
};