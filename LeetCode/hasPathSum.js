/* Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let hasSum = false;
  if (root && !root.left && !root.right && root.val === sum) return true;
  const traverse = function(node, valArr) {
    if (!node) {
      return;
    }
    valArr = valArr.slice();

    valArr.push(node.val);
    if (!node.left && !node.right) {
      const sumArr = getSums(valArr);
      if (sum === sumArr) {
        hasSum = true;
      }
    }

    if (!hasSum) {
      traverse(node.left, valArr);
      traverse(node.right, valArr);
    }
  }

  traverse(root, []);
  return hasSum;
};

// Turn the array of values into an object with the possible sums.
function getSums (arr) {
  return arr.reduce((sum, val) => {
    sum += val;
    return sum;
  }, 0);
}
