/*
https://leetcode.com/problems/rotate-list/

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head)
    return null;

  if (!head.next)
    return head;

  // Does one rotation.
  const rotate = (head) => {
    let curNode = head;
    let prevNode = null;

    while (true) {
      if (curNode.next) {
        prevNode = curNode;
        curNode = curNode.next;
      }
      else break;
    }

    // If there is a previous node, set prevNode as the new tail.
    // Set the old tail as the head and return that node.
    if (prevNode) {
      prevNode.next = null;
      curNode.next = head;
      return curNode;
    }
    // Else, return as is.
    return head;
  }


  // Get length of linked list.
  let curNode = head;
  let length = 0;
  while (curNode) {
    length++;
    curNode = curNode.next;
  }

  // Use this to cut down repeats. We don't need to rotate more than the length.
  k = k % length;

  // Do the rotations.
  for (let i = 0; i < k; ++i)
    head = rotate(head)

  return head;
};
