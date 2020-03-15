/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arrayToLinkedList(array) {
  if (!array || array.length === 0)
    return null;

  const head = new ListNode(array[0]);
  let curNode = head;

  for (let i = 1; i < array.length; ++i) {
    const newNode = new ListNode(array[i]);
    curNode.next = newNode;
    curNode = newNode;
  }

  return head;
}


module.exports = {
  arrayToLinkedList,
}