/*
https://leetcode.com/problems/merge-k-sorted-lists/

Merge k sorted linked lists and return it as one sorted list. Analyze and describe
its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeKLists = function(lists) {
  let numArr = [];

  const addNumsFromList = function(node) {
    if (!node) return;

    numArr.push(node.val);

    addNumsFromList(node.next);
  }

  lists.forEach(list => {
    addNumsFromList(list);
  });

  numArr.sort((a, b) => a - b);


  const createNode = function(idx) {
    if (idx >= numArr.length) {
      return null;
    }

    let newNode = new ListNode(numArr[idx++]);
    newNode.next = createNode(idx);

    return newNode;
  }

  return createNode(0);
};

// var test = [
//   {val: 1, next: {val: 4, next: { val: 5, next: null}}},
//   {val: 1, next: {val: 3, next: { val: 4, next: null}}},
//   {val: 2, next: {val: 6, next: null}}
// ]

var test = [
  null,
  {val: -1, next: {val: 5, next: { val: 11, next: null}}},
  null,
  {val: 6, next: {val: 10, next: null}}
]

console.log(JSON.stringify(mergeKLists(test)))