/* Given two non-empty binary trees s and t, check whether tree t has exactly the same structure
and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of
this node's descendants. The tree s could also be considered as a subtree of itself.*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {

  let map = {};
  var traverseAndMap = function(root) {
    if (root === null) return;

    map[root.val] = root;

    traverseAndMap(root.left);
    traverseAndMap(root.right);
  }

  traverseAndMap(s);

  let match = false;
  var traverseAndMatch = function(root) {
    if (root === null) return;
    if (match === true) return;

    if (root.val in map) {

      const sNode = JSON.stringify(map[root.val]);
      const tNode = JSON.stringify(root);
      console.log('HELLO', sNode, 'WOLRD', tNode);
      if (sNode === tNode) {
        match = true;
      }

    }

    if (!match) {
      traverseAndMatch(root.left);
      traverseAndMatch(root.right);
    }
  }

  traverseAndMatch(t);
  return match;
};