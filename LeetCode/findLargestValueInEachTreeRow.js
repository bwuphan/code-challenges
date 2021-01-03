/*
https://leetcode.com/problems/find-largest-value-in-each-tree-row/

Given the root of a binary tree, return an array of the largest value in each row of the tree
(0-indexed).





Example 1:


Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
Example 2:

Input: root = [1,2,3]
Output: [1,3]
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,null,2]
Output: [1,2]
Example 5:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree will be in the range [0, 104].
-231 <= Node.val <= 231 - 1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const Queue = require('../Prototypes/Queue').Queue
const arrayToTree = require('../Util/arrayToTree').arrayToTree
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  const queue = new Queue()
  queue.enqueue({ depth: 0, node: root })
  const solution = []

  while (!queue.isEmpty()) {
    const item = queue.dequeue()
    const node = item.node
    const depth = item.depth
    console.log(node, depth)
    if (typeof solution[depth] === 'undefined' || node.val > solution[depth])
      solution[depth] = node.val

    if (node.left) queue.enqueue({ node: node.left, depth: depth + 1 })
    if (node.right) queue.enqueue({ node: node.right, depth: depth + 1 })
  }

  return solution
};

const root = arrayToTree([1,3,2,5,3,null,9])

console.log(largestValues(root))

