/*
https://leetcode.com/problems/serialize-and-deserialize-bst/

Serialization is the process of converting a data structure or object into a sequence of bits so
that it can be stored in a file or memory buffer, or transmitted across a network connection link
to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on
how your serialization/deserialization algorithm should work. You just need to ensure that a binary
search tree can be serialized to a string and this string can be deserialized to the original tree
structure.

The encoded string should be as compact as possible.

Note: Do not use class member/global/static variables to store states. Your serialize and
deserialize algorithms should be stateless.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

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

const arrayToTree = require('../Util/arrayToTree.js').arrayToTree;
const Queue = require('../Prototypes/Queue.js').Queue;
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function(root) {
  if (!root) return '';

  const result = [];

  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (!node)
      result.push(node);
    else {
      result.push(node.val);
      queue.enqueue(node.left);
      queue.enqueue(node.right);
    }
  }

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i])
      break;

    if (!result[i])
      result.pop();
  }
  return result.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === '[]')
    return null;
  let dataArr = data.split(',');
  if (dataArr.length <= 1 && !dataArr[0])
    return null;

  const queue = new Queue();
  const root = new TreeNode(dataArr[0]);
  queue.enqueue(root);

  let idx = 1;

  while (idx < dataArr.length) {
    const node = queue.dequeue();
    if (!node) {
      continue;
    }

    const leftNode = dataArr[idx] ? new TreeNode(dataArr[idx]) : null;
    idx++

    const rightNode = dataArr[idx] ? new TreeNode(dataArr[idx]) : null;
    idx++;

    node.left = leftNode;
    node.right = rightNode;

    queue.enqueue(leftNode);

    queue.enqueue(rightNode);
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


const testTree = arrayToTree([]);
// console.log(testTree)
// console.log(deserialize(serialize(testTree)))
console.log(deserialize('[]'))