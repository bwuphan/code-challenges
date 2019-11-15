/*
https://leetcode.com/problems/path-sum-ii/

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given
sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let results = [];

  const dfs = function(node, nodes, curSum) {
    if (!node) return null;

    curSum += node.val;
    nodes = `${nodes}${node.val},`;

    const left = dfs(node.left, nodes, curSum);
    const right = dfs(node.right, nodes, curSum);


    if (left === null && right === null && curSum === sum) {
      nodes = nodes.split(',');
      nodes.pop();
      results.push(nodes);
    }
  }

  dfs(root, '', 0);
  return results;
};


const node = {

}

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var test1 = new TreeNode(1);
test1.left = new TreeNode(2);

var test2 = new TreeNode(1);

console.log(pathSum(test1, 1));
console.log(pathSum(test2, 1));