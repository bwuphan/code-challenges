/*
https://leetcode.com/problems/binary-tree-vertical-order-traversal/

Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to
bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
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
 * @return {number[][]}
 */

var Node = function(val) {
  this.val = val;

  this.next = null;
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
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
    return dequeued.val;
  }

  peek() {
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


var verticalOrder = function(root) {
  /* We need to use BFS because the answer must be top to bottom. */
  if (!root) return [];

  let map = {}; // Stores the nodes indexed by their column.
  let queue = new Queue(); // Queue for BFS.
  queue.enqueue({ node: root, col: 0 });

  while(!queue.isEmpty()) {
    const item = queue.dequeue();
    const node = item.node;
    const col = item.col;

    /* If col is already in map, push to the array. */
    if (col in map)
      map[col].push(node.val);
    else /* Else, create a new array. */
      map[col] = [node.val];

    /* Enqueue the nodes with the correct columns to the queue for BFS. */
    if (node.left)
      queue.enqueue({ node: node.left, col: col - 1 });
    if (node.right)
      queue.enqueue({ node: node.right, col: col + 1 });
  }

  return Object.keys(map)
    .map(num => +num)
    .sort((a, b) => a - b)
    .map(col => map[col]);

};