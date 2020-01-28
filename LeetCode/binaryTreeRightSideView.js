/*
https://leetcode.com/problems/binary-tree-right-side-view/

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  
  let queue = new Queue();
  queue.enqueue({ node: root, depth: 0 });
  
  let results = [];
  let curDepth = 0;
  while (!queue.isEmpty()) {
    let item = queue.dequeue();

    // Check we found an iten that is the first of the curDepth.
    if (curDepth === item.depth) {
    	// Push to results and increase curDepth.
      results.push(item.node.val);
      curDepth++;
    }

    // Go right first since we're reading from right to left.
    if (item.node.right) {
      queue.enqueue({ node: item.node.right, depth: item.depth + 1});
    }
    if (item.node.left) {
      queue.enqueue({ node: item.node.left, depth: item.depth + 1 });
    }
  }
  
  return results;
};