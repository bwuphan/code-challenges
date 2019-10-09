/*
https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/

Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right pointers
as synonymous to the previous and next pointers in a doubly-linked list.

Let's take the following BST as an example, it may help you understand the problem better:





We want to transform this BST into a circular doubly linked list. Each node in a doubly linked list
has a predecessor and successor. For a circular doubly linked list, the predecessor of the first
element is the last element, and the successor of the last element is the first element.

The figure below shows the circular doubly linked list for the BST above. The "head" symbol means
the node it points to is the smallest element of the linked list.





Specifically, we want to do the transformation in place. After the transformation, the left pointer
of the tree node should point to its predecessor, and the right pointer should point to its
successor. We should return the pointer to the first element of the linked list.

The figure below shows the transformed BST. The solid line indicates the successor relationship,
while the dashed line means the predecessor relationship.
*/


/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if (!root) return null;
  let vals = [];

  // First is going to be the first node in the list.
  // Last will keep changing to the last recorded node until we finally find the real last node.
  let first, last = null;
  const inOrderTraverse = function(node) {
    if (!node) return;

    inOrderTraverse(node.left);

    // This will execute every time after our first iteration.
    if (last) {
      last.right = node;
      node.left = last;
    }
    // Our first iteration.
    else {
      first = node;
    }
    // Set last to the current node before we move to the right.
    last = node;
    inOrderTraverse(node.right);
  }

  inOrderTraverse(root);

  last.right = first;
  first.left = last;

  return first;
};