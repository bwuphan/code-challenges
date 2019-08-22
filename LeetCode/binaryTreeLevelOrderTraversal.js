let Queue = function() {
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
 * @return {number[][]}
 */


let levelOrder = function(root) {
  let results = [];
  // Account for case where root is undefined.
  if (root) {

    let queue = new Queue();
    let itemArr = []; // Array that holds items { node, depth }
    queue.enqueue({ node: root, depth: 0 });

    // While there are still items to dequeue.
    while (item = queue.dequeue()) {
      let node = item.node;
      itemArr.push(item);
      if (node.left) {
        queue.enqueue({ node: node.left, depth: item.depth + 1});
      }
      if (node.right) {
        queue.enqueue({ node: node.right, depth: item.depth + 1});
      }
    }

    let results = [];
    let subArr = [];
    let currentDepth = 0;
    for (let i = 0; i < itemArr.length; ++i) {
      const currentEl = itemArr[i];
      if (currentEl.depth === currentDepth) {
        subArr.push(currentEl.node.val);
      }
      else {
        results.push(subArr);
        subArr = [currentEl.node.val];
        currentDepth = currentEl.depth;
      }
    }
    results.push(subArr);
    return results;
  }
  return results;
};