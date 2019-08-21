/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
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

module.exports = {
  Queue: Queue
}