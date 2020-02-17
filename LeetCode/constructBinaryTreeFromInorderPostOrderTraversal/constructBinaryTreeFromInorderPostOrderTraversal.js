/*
https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var buildTree = function(inorder, postorder) {
  const recurse = (inLeftIdx, inRightIdx) => {
    if (inLeftIdx > inRightIdx)
      return null;

    const curVal = postorder.pop();
    const node = new TreeNode(curVal);

    // Find the current last value in the postorder array in the
    // inorder array.
    const inorderIdx = inorder.findIndex((val) => val === curVal);

    // Get right indices.
    node.right = recurse(inorderIdx + 1, inRightIdx);

    // Get left indices.
    node.left = recurse(inLeftIdx, inorderIdx - 1);

    return node;
  };

  return recurse(0, inorder.length - 1);
};


console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))