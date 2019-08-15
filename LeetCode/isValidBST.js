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
var isValidBST = function(root) {
  let isValid = true;
  var traverseTree = function(node, lowerLimit, upperLimit) {
    if (node === null) return true;

    const val = node.val;

    if (lowerLimit !== null && val <= lowerLimit) return false;
    if (upperLimit !== null && val >= upperLimit) return false;

    if (!traverseTree(node.right, val, upperLimit)) return false;
    if (!traverseTree(node.left, lowerLimit, val)) return false;

    return true;
  }
  return traverseTree(root, null, null);
};