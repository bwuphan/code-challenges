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

  // Get the length of list and get the old tail so we can complete the link
  // for now.
  let length = 1;
  let oldTail = head;
  while (oldTail.next) {
    length++;
    oldTail = oldTail.next;
  }
  oldTail.next = head;

  // Get the index of the new tail.
  // We use modulo so we don't do extra iterations we don't need.
  // ie for a list size of 3, rotating 1 and 4 times is the same thing.
  const newTailIdx = length - k % length - 1;

  let curNode = head;
  for (let i = 0; i <= newTailIdx - 1; ++i)
    curNode = curNode.next;

  // Break the chain at the new tail and return the new head.
  head = curNode.next;
  curNode.next = null;
  return head;
};
