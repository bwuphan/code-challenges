/*
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // Create an inorder map to keep track of indices for fast access.
  const inorderMap = {};
  inorder.forEach((val, i) => inorderMap[val] = i);

  // Init the preorderIdx to the first element. Every time we create a new node, we increment this.
  let preorderIdx = 0;

  const dfs = (preLeftIdx, preRightIdx) => {
    // If the left idx is greater than the right idx, we have gone too far and need to return null.
    if (preLeftIdx > preRightIdx)
      return null;

    // Get the value of the new node we are going to create by taking the val at the preorderIdx.
    // After we take this value, we increment preorderIdx for the next node we are creating.
    const curVal = preorder[preorderIdx];
    preorderIdx++;

    // Create the new node.
    const node = new TreeNode(curVal);

    // Get the index of the curVal in the inorder array. We use this to split the inorder array
    // into the left and right subtrees for this node.
    const inorderIdx = inorderMap[curVal];

    // We have to go left first since we are going preorder. Left happens first.
    node.left = dfs(preLeftIdx, inorderIdx -1);

    node.right = dfs(inorderIdx + 1, preRightIdx);

    return node;
  }

  return dfs(0, preorder.length - 1);
};