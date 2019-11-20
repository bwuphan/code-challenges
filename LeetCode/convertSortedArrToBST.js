/*
https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

Given a singly linked list where elements are sorted in ascending order, convert it to a height
balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of
the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  // First, convert linked list to an array.
  let curNode = head;
  let listArr = [];

  while (curNode) {
    listArr.push(curNode.val);
    curNode = curNode.next;
  }

  // Subroutine to recurse through and create nodes from the array.
  const convertToTree = function(start, end) {
    // BC: if end is less than the start, we have gone too far and the value should be null.
    if (end < start) return null;

    // Get the middle index to create the current node.
    const midIdx = Math.ceil((start + end) / 2);
    const node = new TreeNode(listArr[midIdx]);

    // Left should be the part of the array to the left of the midpoint.
    node.left = convertToTree(start, midIdx - 1);
    // Right should be the part of the array to the right of the midpoint.
    node.right = convertToTree(midIdx + 1, end);

    return node;
  }

  return convertToTree(0, listArr.length - 1);
};


// console.log(sortedListToBST([-10,-3,0,5,9]))