/*
https://leetcode.com/problems/binary-search-tree-iterator/

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the
root node of a BST.

Calling next() will return the next smallest number in the BST.



Example:



BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false


Note:

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of
 the tree.
You may assume that next() call will always be valid, that is, there will be at least a next
smallest number in the BST when next() is called.
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
 */
var BSTIterator = function(root) {
  this.values = [];
  this.curIndex = -1;
  const traverse = function(node, values) {
    if (!node) return;

    traverse(node.left, values);
    values.push(node.val);
    traverse(node.right, values);
  }
  traverse(root, this.values);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.curIndex++;
  return this.values[this.curIndex];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return (this.curIndex + 1) < this.values.length;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.addLeftMost(root);
};

BSTIterator.prototype.addLeftMost = function(node) {
  const stack = this.stack;
  while (node) {
    stack.push(node);
    node = node.left;
  }
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (this.stack) {
    const popped = this.stack.pop();

    if (popped && popped.right) {
      this.addLeftMost(popped.right);
    }

    return popped.val;
  }
  else return -1;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/*
Solution:

The alternate solution is to basically recurse a bit at a time instead of all at once

T(1) -> T(Height of tree) per next
S(height of tree)
*/

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const arrayToTree = require('../Util/arrayToTree').arrayToTree
var obj = new BSTIterator(arrayToTree([7, 3, 15, null, null, 9, 20]))
console.log(obj.next())
// console.log(obj.hasNext())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())