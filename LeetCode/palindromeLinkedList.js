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

};

const test1 = arrayToLinkedList([1,2,1]);
console.log(isPalindrome(test1))
console.log(isPalindrome(arrayToLinkedList([1,2,2,1])))
