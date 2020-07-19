/*
https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

Serialization is the process of converting a data structure or object into a
sequence of bits so that it can be stored in a file or memory buffer, or transmitted
across a network connection link to be reconstructed later in the same or another
computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no
restriction on how your serialization/deserialization algorithm should work. You
just need to ensure that a binary tree can be serialized to a string and this
string can be deserialized to the original tree structure.

Example:

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
Clarification: The above format is the same as how LeetCode serializes a binary
tree. You do not necessarily need to follow this format, so please be creative
and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. Your
serialize and deserialize algorithms should be stateless.
*/

// Solution 1.
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
// var serialize = function(root) {
//   let resultsArr = [];

//   const serializeTree = function(node) {
//     if (!node) {
//       resultsArr.push(null);
//       return;
//     }
//     resultsArr.push(node.val);

//     serializeTree(node.left);
//     serializeTree(node.right);
//   }

//   serializeTree(root);

//   return JSON.stringify(resultsArr);
// };

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function(data) {
//   let dataArr = JSON.parse(data);

//   const deserializeArr = function() {
//     // This is the first element of the continually changing array.
//     const firstEl = dataArr.shift();

//     // If the first element is null, return null.
//     if (firstEl === null) {
//       return null;
//     }
//     // Else, create a new node.
//     else {
//       const newNode = new TreeNode(firstEl);
//       newNode.left = deserializeArr();
//       newNode.right = deserializeArr();

//       return newNode;
//     }
//   }

//   return deserializeArr();
// };




// Solution 2
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


var Node = function(val) {
  this.val = val;

  this.next = null;
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;

    this._size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this._first) {
      this._first = node;
      this._last = this._first;
    }
    else {
      this._last.next = node;
      this._last = node;
    }

    this._size++;
  }

  dequeue() {
    if (!this._first) return null;

    const dequeued = this._first;

    if (this._first === this._last) {
      this._first = null;
      this._tail = null;
    }
    else {
      this._first = dequeued.next;
    }

    this._size--;

    return dequeued.val;
  }

  peek() {
    if (!this._first) return null;

    return this._first.val;
  }

  isEmpty() {
    return this._first === null;
  }

  log() {
    let curNode = this._first;

    let qString = '';
    while (curNode) {
      qString += `${curNode.val}, `;
      curNode = curNode.next;
    }

    console.log(`Queue: ${qString}`);
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root)
    return '';

  const queue = new Queue();
  queue.enqueue(root);

  const treeArr = [];
  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (!node) {
      treeArr.push(null);
      continue;
    }

    treeArr.push(node.val);

    queue.enqueue(node.left);
    queue.enqueue(node.right);
  }

  return JSON.stringify(treeArr);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data || data === '[]')
    return null;

  data = JSON.parse(data);
  const queue = new Queue();
  const root = new TreeNode(data[0])
  queue.enqueue(root);
  let i = 1;

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (!node) {
      continue;
    }

    const leftNode = data[i] !== null ? new TreeNode(data[i]) : null;
    i++;

    const rightNode = data[i] !== null ? new TreeNode(data[i]) : null;
    i++;

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