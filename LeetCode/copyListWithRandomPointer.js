/*
https://leetcode.com/problems/copy-list-with-random-pointer/

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.



Example 1:



Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.


Note:

You must return the copy of the given head as a reference to the cloned list.
*/


/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;

  let listMap = new Map();

  let curNode = head;

  while(curNode !== null) {
    listMap.set(curNode, Object.assign({}, curNode));

    curNode = curNode.next;
  }

  curNode = head;
  while(curNode !== null) {
    const copyNode = listMap.get(curNode);
    copyNode.next = listMap.get(curNode.next) || null;
    copyNode.random = listMap.get(curNode.random) || null;

    curNode = curNode.next;
  }
  return listMap.get(head);
};