const Queue = require('../Prototypes/Queue').Queue;
/*
https://leetcode.com/problems/symmetric-tree/

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3


Note:
Bonus points if you could solve it both recursively and iteratively.
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
var isSymmetric = function(root) {
  // If the root does not exist, return true.
  if (!root) {
    return true;
  }

  // If both left and right do not exist, it is symmetrical, return true.
  if (!root.left && !root.right) {
    return true;
  }

  // If either right or left of the root are falsey but not both, return false.
  if ((root.left && !root.right) || (!root.left && root.right)) {
    return false;
  }

  // Create a new queue and start by adding left and right mirrors.
  let queue = new Queue();
  queue.enqueue(root.left);
  queue.enqueue(root.right);

  while(!queue.isEmpty()) {
    const left = queue.dequeue();
    const right = queue.dequeue();

    // If both left and right are falsey, continue but do not add to queue.
    if (!left && !right) {
      continue;
    }

    // If either right or left are falsey but not both, return false.
    if ((left && !right) || (!left && right)) {
      return false;
    }

    // If the left val does not equal the right val, return false.
    if (left.val !== right.val) {
      return false;
    }

    // Queue the mirrors.
    queue.enqueue(left.left);
    queue.enqueue(right.right);

    queue.enqueue(left.right);
    queue.enqueue(right.left);
  }

  return true;
};