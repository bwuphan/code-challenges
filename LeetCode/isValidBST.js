/*
https://leetcode.com/problems/validate-binary-search-tree/

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  var traverseTree = function(node, lowerLimit, upperLimit) {
    if (node === null) return true;

    const val = node.val;

    // It is invalid if the current val is less than or equal to the lower limit
    // or if the current val is greater than or equal to the upper one.
    // We add = because by definition if they are equal it is invalid.
    if ((lowerLimit !== null && val <= lowerLimit) || (upperLimit !== null && val >= upperLimit)) return false;

    return !traverseTree(node.right, val, upperLimit) || !traverseTree(node.left, lowerLimit, val) ? false : true;
  }


  return traverseTree(root, null, null);
};

/*
SOlution: Use recursion
*/