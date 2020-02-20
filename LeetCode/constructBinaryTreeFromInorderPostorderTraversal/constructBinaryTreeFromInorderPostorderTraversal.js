/*
https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var buildTree = function(inorder, postorder) {
  // Create a map for the indices in the inorder array.
  const inorderIdxMap = {};
  inorder.forEach((val, i) => inorderIdxMap[val] = i);

  // Keep track of the current postorderIdx. We will be changing this variable every time we create
  // a new node.
  let postorderIdx = postorder.length - 1;

  const dfs = (inLeftIdx, inRightIdx) => {
    if (inLeftIdx > inRightIdx)
      return null;

    // This works because we go right first. By the time we get to the left side, the proper values
    // will have been popped off the postorder array.
    const curVal = postorder[postorderIdx];
    postorderIdx--;

    const node = new TreeNode(curVal);

    // Find the current last value in the postorder array in the
    // inorder array.
    const inorderIdx = inorderIdxMap[curVal];

    // Get right indices.
    node.right = dfs(inorderIdx + 1, inRightIdx);

    // Get left indices.
    node.left = dfs(inLeftIdx, inorderIdx - 1);

    return node;
  };

  return dfs(0, inorder.length - 1);
};
/*
 1. We get the current value of the new node we are creating by using the last value of the post
    order array.
 2. Look in the inorderIdxMap to get the index of this current value in the inorder array. With
    this index, we can split the inorder array into the left and right side. The left side is
    everything left of the found index but not before the inLeftIdx. The right if the opposite.
 3. If we get to a point where the inLeftIdx is greater than the inRightIdx, we know this should
    be null.
 */

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))