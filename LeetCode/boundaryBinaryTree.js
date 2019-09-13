/*
https://leetcode.com/problems/boundary-of-binary-tree/


Given a binary tree, return the values of its boundary in anti-clockwise direction starting from root. Boundary includes left boundary, leaves, and right boundary in order without duplicate nodes.  (The values of the nodes may still be duplicates.)

Left boundary is defined as the path from root to the left-most node. Right boundary is defined as the path from root to the right-most node. If the root doesn't have left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not applies to any subtrees.

The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if exists. If not, travel to the right subtree. Repeat until you reach a leaf node.

The right-most node is also defined by the same way with left and right exchanged.

Example 1

Input:
  1
   \
    2
   / \
  3   4

Ouput:
[1, 3, 4, 2]

Explanation:
The root doesn't have left subtree, so the root itself is left boundary.
The leaves are node 3 and 4.
The right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.
So order them in anti-clockwise without duplicates and we have [1,3,4,2].


Example 2

Input:
    ____1_____
   /          \
  2            3
 / \          /
4   5        6
   / \      / \
  7   8    9  10

Ouput:
[1,2,4,7,8,9,10,6,3]

Explanation:
The left boundary are node 1,2,4. (4 is the left-most node according to definition)
The leaves are node 4,7,8,9,10.
The right boundary are node 1,3,6,10. (10 is the right-most node).
So order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].
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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
  /*
  Break the problem into three parts.
  1. Get Left Boundary
  2. Get Leaves
  3. Get Right Boundary
  4. Remove dups and add node values to a new array.
  */

  // First part: Get the Left Boundary.
  let leftBound = [];
  const getLeftBoundary = function(node) {
    if (!node) return;

    leftBound.push(node);

    if (node.left) {
      getLeftBoundary(node.left);
    }
    else if (node !== root && node.right) {
      getLeftBoundary(node.right);
    }
  }

  getLeftBoundary(root);

  // Second part: Get leaves.
  let leaves = [];
  const getLeaves = function(node) {
    if (!node) return;

    if (!node.left && !node.right) {
      leaves.push(node);
    }

    getLeaves(node.left);
    getLeaves(node.right);
  }

  getLeaves(root);

  // Third part: Get right boundary.
  let rightBound = [];
  const getRightBoundary = function(node) {
    if (!node) return;

    rightBound.push(node);

    if (node.right) {
      getRightBoundary(node.right);
    }
    else if (node.left && node !== root) {
      getRightBoundary(node.left);
    }
  }
  getRightBoundary(root);

  // Reverse rightBound to satisfy counter clockwise order.
  rightBound = rightBound.reverse();

  // Concat left, leaves, right to one giant array.
  let fullArr = leftBound.concat(leaves).concat(rightBound);

  // Create set to store nodes to weed out duplicates.
  let nodeSet = new Set();

  // The final Array.
  let results = [];

  fullArr.forEach(node => {
    // If the node is not in the set, add node to set and push value to results.
    if (!nodeSet.has(node)) {
      nodeSet.add(node);
      results.push(node.val);
    }
  });

  return results;
};