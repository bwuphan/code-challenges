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
  let pResults = [];
  let qResults = [];

  var traverse = function(node, history) {
    if (node === null) return;

    // Make a copy of history to prevent mutation.
    history = [...history];

    // Push current node into history.
    history.push(node);

    if (node.val === p.val) {
      pResults = history;
      return;
    }

    if (node.val === q.val) {
      qResults = history;
      return;
    }

    traverse(node.left, history);
    traverse(node.right, history);

  }

  traverse(root, []);

  // If either results are empty, one of the targets does not exist, return null.
  if (qResults.length === 0 || pResults.length === 0) {
    return null;
  }

  // Create lookup object for one of the results.
  const pObj = pResults.reduce((obj, node, i) => {
    obj[node.val] = i;
    return obj;
  }, {});


  for (let i = qResults.length - 1; i >= 0; i--) {
    const currentVal = qResults[i].val;
    if (currentVal in pObj) {
      return qResults[i];
    }
  }

  return null;

};