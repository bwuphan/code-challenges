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

var Queue = () => {
  this.storage = [];
}

Queue.prototype.push = (item) => {
  this.storage.push(item)
}

Queue.prototype.pop = () => {
  return this.storage.shift();
}

var serialize = function(root) {
  let queue = new Queue();
  let results = [];

  let item;
  queue.push({ tree: root, depth: 0 });

  while(item = queue.pop()) {
    const tree = item.tree
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/*
  var traverseTree = function(node) {
    if (node) {
      results.push(node.val);
      traverseTree(node.left || null);
      traverseTree(node.right || null);
    } else {
      results.push(null);
    }
  }
  traverseTree(root);
  console.log(results);
  return results;
*/