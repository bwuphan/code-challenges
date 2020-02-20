/*
https://leetcode.com/problems/same-tree/

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the
same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

const Queue = require('../../Prototypes/Queue.js').Queue;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q)
    return true;
  else if ((!p && q) || (p && !q))
    return false;

  const queue = new Queue();

  queue.enqueue(p);
  queue.enqueue(q);

  while (!queue.isEmpty()) {
    const pNode = queue.dequeue();
    const qNode = queue.dequeue();
    // console.log(pNode);
    // console.log(qNode);
    if ((pNode && !qNode) || (!pNode && qNode))
      return false;
    else if (!pNode && !qNode)
      continue;
    else if (pNode.val !== qNode.val)
      return false;
    else {
      queue.enqueue(pNode.left);
      queue.enqueue(qNode.left);

      queue.enqueue(pNode.right);
      queue.enqueue(qNode.right);
    }
  }

  return true;
};

/**
 * 1. Init a queue and enqueue p and q.
 * 2. Dequeue twice every loop and compare the two dequeued nodes.
 * 3. Enqueue the children of p and q nodes.
 * 4. If we reach the end of the queue then we have a match.
 */

module.exports = {
  isSameTree,
}