const Queue = require('../Prototypes/Queue').Queue;

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function arrayToTree(array) {
  const queue = new Queue();
  const root = new TreeNode(array[0]);
  queue.enqueue(root);

  let idx = 1;

  while (idx < array.length) {
    const node = queue.dequeue();
    if (!node) {
      continue;
    }

    const leftNode = array[idx] ? new TreeNode(array[idx]) : null;
    idx++

    const rightNode = array[idx] ? new TreeNode(array[idx]) : null;
    idx++;

    node.left = leftNode;
    node.right = rightNode;

    queue.enqueue(leftNode);

    queue.enqueue(rightNode);
  }
  return root;
}

module.exports = {
  arrayToTree,
}