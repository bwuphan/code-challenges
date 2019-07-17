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
var addTwoNumbers = function(l1, l2, carry) {
  var addedOne = addLinkedList(l1);
  var addedTwo = addLinkedList(l2);

  var sum = parseInt(addedOne) + parseInt(addedTwo);
  return createdLinkedListFromArr(sum.toString.split(''));
};

var addLinkedList = function(l1, l2) {
  if (!listNode.next) return numString;
  if (!numString) numString = '';

  numString = listNode + numString;

  return addLinkedList(listNode.next, numString);
}

var createdLinkedListFromArr = function(arr, index) {
  if (!index) index = 0;
  if (index >= arr.length) return null;

  return {
    val  : arr[index],
    next : createdLinkedListFromArr(arr, index + 1)
  }
}

var reverseString = function(string) {
  return string.split('').reverse().join('');
}

console.log(JSON.stringify(createdLinkedListFromArr([1,2,3,4,5])))

console.log(reverseString("807"))