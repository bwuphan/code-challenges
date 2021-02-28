/*
https://leetcode.com/problems/largest-bst-subtree/

Given the root of a binary tree, find the largest subtree, which is also a
Binary Search Tree (BST), where the largest means subtree has the largest
number of nodes.

A Binary Search Tree (BST) is a tree in which all the nodes follow the below-
mentioned properties:

The left subtree values are less than the value of their parent (root) node's value.
The right subtree values are greater than the value of their parent (root) node's value.
Note: A subtree must include all of its descendants.

Follow up: Can you figure out ways to solve it with O(n) time complexity?



Example 1:



Input: root = [10,5,15,1,8,null,7]
Output: 3
Explanation: The Largest BST Subtree in this case is the highlighted one.
The return value is the subtree's size, which is 3.
Example 2:

Input: root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]
Output: 2


Constraints:

The number of nodes in the tree is in the range [0, 104].
-104 <= Node.val <= 104
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function(root) {
  if (!root)
    return 0;
  if (!root.left && !root.right)
    return 1;

  let longest = 0;

  function recurse(node, low, high) {
    if (!node) return 0;

    if (!node.left && !node.right) {
      if (!longest) longest = 1;

      return 1;
    }

    let left = recurse(node.left, low, node.val);
    let right = recurse(node.right, node.val, high);

    console.log(node.val, left, right, low, high)
    if (node.val === 2) {
      return node.right
    }
    if ((node.left && node.val <= node.left.val)
      || (node.right && node.val >= node.right.val)) {
      return false;
    }

    if (left === false || right === false)
      return false;

    let sum = null;
    if (typeof left === 'number' && typeof right === 'number') {
      sum = left + right + 1;
      if (sum > longest)
        longest = sum;
    }

    if ((low !== null && node.left && node.left.val <= low)
      || (right !== null && node.right && node.right.val >= high)) {
      console.log(' FALSE HERE')
      return false;
    }
    return sum;
  }

  recurse(root, null, null);
  return longest;
};


const arrayToTree = require('../Util/arrayToTree').arrayToTree;

const test = arrayToTree([4,2,7,2,3,5,null,2,null,null,null,null,null,1])

// console.log(largestBSTSubtree(arrayToTree([10,5,15,1,8,null,7])));
// console.log(largestBSTSubtree(test));
// console.log(largestBSTSubtree(arrayToTree([1,2])))
// console.log(largestBSTSubtree(arrayToTree([3,2,4,null,null,1])))
console.log(largestBSTSubtree(arrayToTree([3,null,1,2,null,null,4,null,5])))
