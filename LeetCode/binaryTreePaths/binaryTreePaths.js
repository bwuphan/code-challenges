/*
https://leetcode.com/problems/binary-tree-paths/

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root)
    return [];

  if (!root.left && !root.right)
    return [`${root.val}`];

  const results = [];
  const dfs = (node, curPath) => {
    if (!node)
      return;

    curPath = `${curPath}->${node.val}`;

    if (!node.left && !node.right)
      results.push(curPath);

    dfs(node.left, curPath);
    dfs(node.right, curPath);
  }

  dfs(root.left, `${root.val}`);
  dfs(root.right, `${root.val}`);

  return results;
};