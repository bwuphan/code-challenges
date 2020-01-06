/*
https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level X such that the sum of all the values of nodes at level X is maximal.



Example 1:



Input: [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.


Note:

The number of nodes in the given tree is between 1 and 10^4.
-10^5 <= node.val <= 10^5
*/


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


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  if (!root) return null;

  const queue = new Queue();
  queue.enqueue({ node: root, level: 0 });

  const sums = [0];

  while (!queue.isEmpty()) {
    const item = queue.dequeue();
    const node = item.node;
    const level = item.level;

    if (node) {
      if (level > sums.length - 1) {
        sums[level] = 0;
      }
      sums[level] += node.val;

      queue.enqueue({ node: node.left, level: level + 1 });
      queue.enqueue({ node: node.right, level: level + 1 });
    }
  }

  let maxLevel = 0;
  let highestSum = null;

  sums.forEach((sum, i) => {
    if (highestSum === null || sum > highestSum) {
      highestSum = sum;
      maxLevel = i + 1;
    }
  });

  return maxLevel;
};