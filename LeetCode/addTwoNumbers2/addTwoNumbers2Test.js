describe('addTwoNumbers', () => {
  const addTwoNumbers = require('./addTwoNumbers2.js').addTwoNumbers;
  console.log(addTwoNumbers);
  const arrayToLinkedList = require('../../Util/arrayToLinkedList.js').arrayToLinkedList;
  const linkedListToArray = require('../../Util/linkedListToArray.js').linkedListToArray;
function ListNode(val) {
    this.val = val;
    this.next = null;
}

  it('passes test case 1.', () => {
    const one = arrayToLinkedList([7,2,4,3]);
    const two = arrayToLinkedList([5,6,4]);
    expect(linkedListToArray(addTwoNumbers(one, two))).toEqual([7,8,0,7]);
  });
});