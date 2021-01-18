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

  // Get length of list
  let cur = head;
  let length = 0;
  while (cur !== null) {
    length++;
    cur = cur.next;
  }

  // If the list has only one node, it's a palindrome
  if (length === 1) return true;

  // Next, find the first node of the second half of the palindrome.
  let secondHalf = null; // The start of the second end of the palindrome
  cur = head;
  const endOfFirst = length % 2 === 0 ? Math.floor(length / 2) : Math.ceil(length / 2);
  for (let i = 0; i <= endOfFirst; ++i) {
    secondHalf = cur;
    cur = cur.next;
  }

  // Reverse the second half.
  let newSecondHalfHead = reverseList(secondHalf);

  // Compare the two linked lists
  let cur1 = head;
  let cur2 = newSecondHalfHead;
  let isPalindrome = true;
  while (cur1 && cur2) {
    // If value is not the same, not a palindrome
    if (cur1.val !== cur2.val) isPalindrome = false;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  // Reverse list back to original state
  reverseList(newSecondHalfHead);
  return isPalindrome;
};

/*
Solution:
Get length of linked list
Use length to determine where the start of the second half of the word is
Reverse the second half of the linked list
Compare node by node the first half of the linked list and the reversed second half
Reverse the second half back to its original state.
*/

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