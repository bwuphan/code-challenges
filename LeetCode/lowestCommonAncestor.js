/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  let solution = null;
  const traverse = function(node) {
    if (solution) return;

    if (!node) {
      return false;
    }

    let left = false;
    let right = false;
    if (node.left) {
      left = traverse(node.left) ? 1: 0;
    }
    if (node.right) {
      right = traverse(node.right) ? 1 : 0;
    }

    let mid = (node.val === p.val || node.val === q.val) ? 1 : 0;

    if (mid + left + right >= 2) {
      solution = node;
      return;
    }

    return (mid + left + right > 0);
  }

  traverse(root);
  return solution;
}