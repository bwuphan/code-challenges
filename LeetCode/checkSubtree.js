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
  // Create a map to store the nodes { [node.val] : node }
  let map = {};

  // Traverse subtree s and add nodes to the map.
  var traverseAndMap = function(node) {
    if (node === null) return;

    map[node.val] = node;

    traverseAndMap(node.left);
    traverseAndMap(node.right);
  }

  traverseAndMap(s);


  let match = false; // Variable stores whether there is a match or not.

  // Traverse and find a match.
  var traverseAndMatch = function(node) {
    if (node === null) return;

    if (node.val in map) {
      const sNode = JSON.stringify(map[node.val]);
      const tNode = JSON.stringify(node);

      if (sNode === tNode) {
        match = true;
      }
    }

    // If a match has been made, no need to traverse any longer.
    if (!match) {
      traverseAndMatch(node.left);
      traverseAndMatch(node.right);
    }
  }

  traverseAndMatch(t);

  return match;
};