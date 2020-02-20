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

var arrayToTree = require('../../Util/arrayToTree.js').arrayToTree;
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
  // Get the nodes in order.
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


  let node1 = null; // The first node that is out of order.
  let idxNode1 = null; // Index of the first out of order node.
  let node2 = null; // The second node that is out of order.

  // Find the first node that is out of order.
  for (let i = 0; i < inorderArr.length; ++i) {
    const curNode = inorderArr[i];

    if ((inorderArr[i - 1] && !inorderArr[i + 1] && curNode.val < inorderArr[i - 1].val) ||
        (inorderArr[i + 1] && curNode.val > inorderArr[i + 1].val)) {
      node1 = curNode;
      idxNode1 = i;
      break;
    }
  }


  // Find the second node that is out of order.
  for (let i = idxNode1 + 1; i < inorderArr.length; ++i) {
    const curNode = inorderArr[i];

    // For the node right next to node1.
    if (i === idxNode1 + 1) {
      if ((!inorderArr[i + 1] && curNode.val < node1.val) ||
          (curNode.val <= node1.val && node1.val <= inorderArr[i + 1].val)) {

          node2 = curNode;
          break;
      }
    }
    // For all the nodes after.
    else if (curNode.val < inorderArr[i - 1].val) {
      node2 = curNode;
      break;
    }
  }

  // If we found both a node1 and node2 that's out of order, switch their values.
  if (node1 && node2) {
    let tempVal = node1.val;
    node1.val = node2.val;
    node2.val = tempVal;
  }

  return root;
};

/**
 * Solution
 * 1. Traverse using inorder DFS to get the nodes in ascending order.
 * 2. Find the 2 nodes that are out of order.
 * 3. Switch the two nodes' values.
 */


 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

const head = new TreeNode(1);
head.left = new TreeNode(3);
head.left.right = new TreeNode(2);

// const head = arrayToTree([3,1,4,null,null,2]);
console.log(recoverTree(head));

const inorderArr = [];
const inorderDfs = (node) => {
  if (!node) {
    inorderArr.push(null);
    return;
  }

  inorderDfs(node.left);

  inorderArr.push(node);

  inorderDfs(node.right);
}

inorderDfs(recoverTree(head));
inorderArr.forEach((node, i) => {
  if (node)
    console.log(i, node.val)
  else
    console.log(i, null);
})