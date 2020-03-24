/*
https://leetcode.com/problems/add-two-numbers-ii/

You are given two non-empty linked lists representing two non-negative integers. The most
significant digit comes first and each of their nodes contain a single digit. Add the two numbers
and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/
const arrayToLinkedList = require('../../Util/arrayToLinkedList.js').arrayToLinkedList;
const linkedListToArray = require('../../Util/linkedListToArray.js').linkedListToArray;

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const reverseLinkedList = (head) => {
    let cur = head;
    let prev = null;
    while (cur) {
      const tempNext = cur.next;
      cur.next = prev;
      prev = cur;
      cur = tempNext;
    }
    return prev;
  }
  // Reverse the two linked lists.
  l1 = reverseLinkedList(l1);
  l2 = reverseLinkedList(l2);


  // Create the first head node.
  let curL1 = l1;
  let curL2 = l2;
  let val = (curL1 ? curL1.val : 0) + (curL2 ? curL2.val : 0);
  let carry = 0;

  if (val >= 10) {
    carry = 1;
    val = val - 10;
  }

  let newHead = new ListNode(val);
  let cur = newHead;

  curL1 = curL1.next;
  curL2 = curL2.next;
  while (curL1 || curL2 || carry) {
    const oneVal = curL1 ? curL1.val : 0;
    const twoVal = curL2 ? curL2.val : 0;

    val = oneVal + twoVal + carry;
    if (val >= 10) {
      carry = 1;
      val = val - 10;
    }
    else
      carry = 0;

    cur.next = new ListNode(val);
    if (cur.next)
      cur = cur.next;
    else
      cur = null;

    curL1 = curL1 ? curL1.next : null;
    curL2 = curL2 ? curL2.next : null;
  }

  return reverseLinkedList(newHead);
};

/*
Solution:
1. Reverse both linked lists.
2. Add the numbers from one linked list node to another while carrying the carry.
3. Reverse the newly made linked list.
*/

const one = arrayToLinkedList([7,2,4,3]);
const two = arrayToLinkedList([5,6,4]);
addTwoNumbers(one, two)
module.exports = {
  addTwoNumbers
}