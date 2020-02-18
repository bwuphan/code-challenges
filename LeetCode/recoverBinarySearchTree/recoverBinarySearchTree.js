/*
https://leetcode.com/problems/recover-binary-search-tree/

Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:

Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2
Example 2:

Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
Follow up:

A solution using O(n) space is pretty straight forward.
Could you devise a constant space solution?
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const inorderArr = [];
  const inorderDfs = (node) => {
    if (!node) {
      return;
    }

    inorderDfs(node.left);

    inorderArr.push(node);

    inorderDfs(node.right);
  }

  inorderDfs(root);

  console.log(inorderArr);
  let node1, idxNode1, node2 = null;

  let pastVal = inorderArr[0].val;
  for (let i = 0; i < inorderArr.length; ++i) {
    const curNode = inorderArr[i];

    if ((inorderArr[i - 1] && curNode.val < inorderArr[i - 1].val) ||
        (inorderArr[i + 1] && curNode.val > inorderArr[i + 1].val)) {
      node1 = curNode;
      idxNode1 = i;
      break;
    }

  }

  for (let i = idxNode1 + 1; i < inorderArr.length; ++i) {
    const curNode = inorderArr[i];

    if (i === idxNode1 + 1) {
      if ((!inorderArr[i + 1] && curNode.val < node1.val) || (inorderArr[i + 1] && curNode.val < inorderArr[i + 1].val)) {
        node2 = curNode;
        break;
      }
    }
    else if (curNode.val < inorderArr[i - 1].val) {
      node2 = curNode;
      break;
    }
  }

  if (node1 && node2) {
    let tempVal = node1.val;
    node1.val = node2.val;
    node2.val = tempVal;
  }

  return root;
};
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

// const head = new TreeNode(1);
// head.left = new TreeNode(3);
// head.left.right = new TreeNode(2);

const head = new TreeNode(0);
head.left = new TreeNode(1);

console.log(recoverTree(head));

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

function arrayToTree(array) {

}