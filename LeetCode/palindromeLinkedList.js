/*
https://leetcode.com/problems/palindrome-linked-list/

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

Accepted
538,453
Submissions
1,338,233
*/

const arrayToLinkedList = require('../Util/arrayToLinkedList').arrayToLinkedList;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true;

  let cur = head;
  let length = 0;

  while (cur !== null) {
    length++;
    cur = cur.next;
  }

  if (length === 1) return true;

  let secondHalf = null;
  let firstEnd = null;
  cur = head;
  let i = 0;

  const endOfFirst = length % 2 === 0 ? Math.floor(length / 2) : Math.ceil(length / 2);

  for (let i = 0; i <= endOfFirst; ++i) {
    firstEnd = secondHalf;
    secondHalf = cur;
    cur = cur.next;
  }

  let newSecondHalfHead = reverseList(secondHalf);

  let cur1 = head;
  let cur2 = newSecondHalfHead;

  let isPalindrome = true;
  while (cur1 && cur2) {
    if (cur1.val !== cur2.val)
      return false;

    cur1 = cur1.next;
    cur2 = cur2.next;
  }


  reverseList(newSecondHalfHead);
  return isPalindrome;
};

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}

const test1 = arrayToLinkedList([1,2,3,2,1]);
console.log(isPalindrome(test1))
console.log(isPalindrome(arrayToLinkedList([1,2,2,1])))
console.log(isPalindrome(arrayToLinkedList([1,1,2,1])))
console.log(isPalindrome(arrayToLinkedList([1,2])))