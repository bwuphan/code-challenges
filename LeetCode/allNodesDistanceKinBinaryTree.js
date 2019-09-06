/*
https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.



Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]

Explanation:
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.



Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.


Note:

The given tree is non-empty.
Each node in the tree has unique values 0 <= node.val <= 500.
The target node is a node in the tree.
0 <= K <= 1000.
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  const dfs = function(node, parent) {
    if (!node) return null;

    node.parent = parent || null;


    dfs(node.left, node);
    dfs(node.right, node);
  }

  dfs(root, null);

  let queue = [{ node: target, distance: 0, history: {} }];
  let item = null;
  let results = [];
  let node = null;
  while (queue.length > 0) {
    item = queue.shift();
    node = item.node;

    if (item.distance === K) {
      // console.log(item);
      results.push(item.node.val);
    }
    if (item.distance <= K) {
      if (node.left && !(node.left.val in item.history)) {

        queue.push({
          node: node.left,
          distance: item.distance + 1,
          history: Object.assign({ [node.val]: true }, item.history)
        });
      }
      if (node.right && !(node.right.val in item.history)) {
        queue.push({
          node: node.right,
          distance: item.distance + 1,
          history: Object.assign({ [node.val]: true }, item.history)
        });
      }
      if (node.parent && !(node.parent.val in item.history)) {
        queue.push({
          node: node.parent,
          distance: item.distance + 1,
          history: Object.assign({ [node.val]: true }, item.history)
        });
      }
    }
  }
  return results;
};