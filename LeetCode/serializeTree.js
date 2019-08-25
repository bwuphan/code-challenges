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
var serialize = function(root) {
  let resultsArr = [];

  const serializeTree = function(node) {
    if (!node) {
      resultsArr.push(null);
      return;
    }
    resultsArr.push(node.val);

    serializeTree(node.left);
    serializeTree(node.right);
  }

  serializeTree(root);

  return JSON.stringify(resultsArr);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let dataArr = JSON.parse(data);

  const deserializeArr = function() {
    // This is the first element of the continually changing array.
    const firstEl = dataArr.shift();

    // If the first element is null, return null.
    if (firstEl === null) {
      return null;
    }
    // Else, create a new node.
    else {
      const newNode = new TreeNode(firstEl);
      newNode.left = deserializeArr();
      newNode.right = deserializeArr();

      return newNode;
    }
  }

  return deserializeArr();
};
