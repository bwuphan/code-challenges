/*
https://leetcode.com/problems/minimum-depth-of-binary-tree/

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the
nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var Queue = function() {
  this.storage = [];
}

Queue.prototype.enqueue = function(item) {
  this.storage.push(item);
  return item;
}

Queue.prototype.dequeue = function() {
  return this.storage.shift();
}

Queue.prototype.isEmpty = function() {
  return this.storage.length === 0;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;

  let queue = new Queue();
  queue.enqueue({ node: root, depth: 1 });

  while (!queue.isEmpty()) {
    let item = queue.dequeue();
    let node = item.node;

    if (!node.left && !node.right) {
      return item.depth;
    }

    if (node.left) queue.enqueue({ node: node.left, depth: item.depth + 1 });
    if (node.right) queue.enqueue({ node: node.right, depth: item.depth + 1 });
  }

  return false;
};