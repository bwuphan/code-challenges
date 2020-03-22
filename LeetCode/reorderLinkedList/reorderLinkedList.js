/*
https://leetcode.com/problems/reorder-list/

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes
itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return;

  const listMap = new Map();

  let curNode = head;
  let key = 0;

  while (curNode) {
    listMap.set(key, curNode);

    key++;
    curNode = curNode.next;
  }

  curNode = head;
  let leftPointer = 1;
  let rightPointer = listMap.size - 1;

  while (leftPointer <= rightPointer) {
    curNode.next = listMap.get(rightPointer);
    rightPointer--;
    curNode = curNode.next;
    curNode.next = null;

    curNode.next = listMap.get(leftPointer);
    leftPointer++;
    curNode = curNode.next;
    curNode.next = null;
  }
};

const linkedListToArray = require('../../Util/linkedListToArray.js').linkedListToArray;
const arrayToLinkedList = require('../../Util/arrayToLinkedList.js').arrayToLinkedList;

const linkedListOne = arrayToLinkedList([1,2,3,4]);
reorderList(linkedListOne);
console.log(linkedListToArray(linkedListOne));

const linkedListTwo = arrayToLinkedList([1,2,3,4,5]);
reorderList(linkedListTwo);
console.log(linkedListToArray(linkedListTwo));