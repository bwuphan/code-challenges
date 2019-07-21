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

var addTwoNumbers = function(l1, l2, sumNode, carry) {
  if (!carry) var carry = 0;
  if (!l1 && !l2 && carry === 0) return null;


  sumNode = {...blankNode};

  l1 = l1 === null ? {...blankNode} : l1;
  l2 = l2 === null ? {...blankNode} : l2;

  const sum = (+l1.val + +l2.val + (carry ? +carry : 0)).toString();

  if (sum.length > 1) {
    carry = sum[0]
    sumNode.val = sum[1];
  } else {
    sumNode.val = sum[0];
    carry = 0;
  }

  sumNode.next = addTwoNumbers(l1.next, l2.next, sumNode, carry);
  return sumNode;
}
