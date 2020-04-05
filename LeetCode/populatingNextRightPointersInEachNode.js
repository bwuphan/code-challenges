/*
https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

You are given a perfect binary tree where all leaves are on the same level, and every parent has
two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the
next pointer should be set to NULL.

Initially, all next pointers are set to NULL.



Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for
this problem.


Example 1:



Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next
pointer to point to its next right node, just like in Figure B. The serialized output is in level
order as connected by the next pointers, with '#' signifying the end of each level.


Constraints:

The number of nodes in the given tree is less than 4096.
-1000 <= node.val <= 1000
*/


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
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
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root)
    return null;
  const queue = new Queue();
  queue.enqueue({ node: root, depth: 0 });

  let prevItem = null;
  while (!queue.isEmpty()) {
    let curItem = queue.dequeue();
    let curNode = curItem.node;
    let curDepth = curItem.depth;

    if (prevItem && prevItem.depth === curDepth) {
      curNode.next = prevItem.node;
    }
    else {
      curNode.next = null;
    }

    if (curNode)
      prevItem = curItem;

    if (curNode.right)
      queue.enqueue({ node: curNode.right, depth: curItem.depth + 1 });
    if (curNode.left)
      queue.enqueue({ node: curNode.left, depth: curItem.depth + 1 });
  }

  return root;
};
