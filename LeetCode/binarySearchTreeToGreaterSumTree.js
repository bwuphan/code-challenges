/*
https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

Given the root of a binary search tree with distinct values, modify it so that every node has a new
value equal to the sum of the values of the original tree that are greater than or equal to
node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:



Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]


Note:

The number of nodes in the tree is between 1 and 100.
Each node will have value between 0 and 100.
The given tree is a binary search tree.
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  const vals = [];
  const nodeMap = new Map();
  let idx = 0;
  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    vals.push(node.val);
    nodeMap.set(node, idx);
    idx++;
    dfs(node.right);
  }

  dfs(root);

  const sums = new Array(vals.length);
  let sum = 0;
  for (let i = vals.length - 1; i >= 0; i--) {
    sum += vals[i];
    sums[i] = sum;
  }

  const dfs2 = (node) => {
    if (!node) return;

    dfs2(node.left);

    const idx = nodeMap.get(node);
    node.val = sums[idx];

    dfs2(node.right);
  }

  dfs2(root);

  return root;
};