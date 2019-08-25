/*
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/
const Queue = require('../Prototypes/Queue').Queue;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  let queue = new Queue();
  let curDepth = 0;
  let item = { node: root, depth: curDepth };
  queue.enqueue(item);

  let results = [[]];

  while (item = queue.dequeue()) {
    let curNode = item.node;

    if (curNode) {
      // If the depth is changing, create a new sub array and update curDepth.
      if (curDepth !== item.depth) {
        curDepth = item.depth;
        results.push([]);
      }

      // Push the current value to the last sub array.
      results[results.length - 1].push(curNode.val);

      queue.enqueue({ node: curNode.left, depth: item.depth + 1 });
      queue.enqueue({ node: curNode.right, depth: item.depth + 1 });
    }
  }

  return results.map((arr, i) => {
    // Reverse the array if it is an even array. (Doesn't look even because depth starts at 0)
    if (i % 2 !== 0) {
      return arr.reverse();
    }
    else {
      return arr;
    }
  });
};

console.log(zigzagLevelOrder(test));