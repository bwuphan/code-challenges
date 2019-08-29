/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True


Example 2:

Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let numArr = [];
  let numObj = {};
  const fillNums = function(root) {
    if (!root) return;

    numArr.push(root.val);
    numObj[root.val] = true;

    fillNums(root.left);
    fillNums(root.right);
  }
  fillNums(root);

  for(let i = 0; i < numArr.length; ++i) {
    const num = numArr[i];
    const numNeeded = k - num;
    if (numNeeded in numObj && num !== numNeeded) {
      return true;
    }
  }
  return false;
};