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
var serialize = function(root) {
  let serString = '';

  const preOrder = function(node) {
    if (!node) {
      serString += 'e,';
      return;
    }

    serString += node.val + ',';
    preOrder(node.left);
    preOrder(node.right);
  }

  preOrder(root);
  return serString;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let dataArr = data.split(',');

  const deserializeArr = function() {
    const val = dataArr.shift();
    console.log(val);
    if (val !== 'e') {
      var newNode = new TreeNode(dataArr.shift());

      newNode.left = deserializeArr();
      newNode.right = deserializeArr();
      return newNode;

    }
    else {
      return null;
    }

  }

  return deserializeArr();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */