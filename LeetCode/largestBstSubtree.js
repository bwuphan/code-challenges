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

  function recurse(node) {
    if (!node) return null;

    const left = recurse(node.left);
    const right = recurse(node.right);

    const result = new Array(3); // Return array [low, high, sum of nodes]

    // Check if valid BST.
    // If so, calculate sum.
    if ((!left || node.val > left[1]) && (!right || node.val < right[0])) {
      const leftNum = left ? left[2] : 0;
      const rightNum = right ? right[2] : 0;
      result[2] = leftNum + rightNum + 1;
      if (result[2] > longest)
        longest = result[2];
    }

    // Get the min.
    result[0] = Math.min(
      left ? left[0] : Number.MAX_SAFE_INTEGER,
      right ? right[0] : Number.MAX_SAFE_INTEGER,
      node.val
    );

    // Get the max.
    result[1] = Math.max(
      left ? left[1] : Number.MIN_SAFE_INTEGER,
      right ? right[1] : Number.MIN_SAFE_INTEGER,
      node.val
    );

    return result
  }

  recurse(root);
  return longest;
};


const arrayToTree = require('../Util/arrayToTree').arrayToTree;

const test = arrayToTree([4,2,7,2,3,5,null,2,null,null,null,null,null,1])

console.log(largestBSTSubtree(arrayToTree([10,5,15,1,8,null,7])));
console.log(largestBSTSubtree(test));
console.log(largestBSTSubtree(arrayToTree([1,2])))
console.log(largestBSTSubtree(arrayToTree([3,2,4,null,null,1])))
console.log(largestBSTSubtree(arrayToTree([3,null,1,2,null,null,4,null,5])))
console.log(largestBSTSubtree(arrayToTree([4,1,6,null,null,5,null,2])))
