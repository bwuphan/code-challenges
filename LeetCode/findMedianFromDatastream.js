/*
https://leetcode.com/problems/find-median-from-data-stream/

Median is the middle value in an ordered integer list. If the size of the list is even,
there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.


Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3)
findMedian() -> 2


Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?
*/
var Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(val) {
  const newNode = new Node(val);
  // If there is no head, make this the new head.
  if (!this.head) {
    this.head = newNode;
  }
  // Else, add to tail.
  else {
    const oldTail = this.tail;
    // If there is no tail, add tail to head.
    if (!this.tail) {
      this.head.next = newNode;
      newNode.prev = this.head;
    }
    // Else, add to previous tail.
    else {
      newNode.prev = oldTail;
      oldTail.next = newNode;
    }

    // Set tail to newest node.
    this.tail = newNode;
  }
}

LinkedList.prototype.removeFromHead = function() {
  // Only remove if a head exists.
  if (this.head) {
    this.head = this.head.next;

    // If the head and tail are the same, this is the only node and we need to null out this.tail.
    if (this.head === this.tail) {
      this.tail = null;
    }
  }
}

LinkedList.prototype.removeFromTail = function() {
  // Only remove if a tail exists.
  if (this.tail) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}

LinkedList.prototype.removeNode = function(node) {
  if (this.head === node) {
    this.removeFromHead();
  }
  else if (this.tail === node) {
    this.removeFromTail();
  }
  else {
    // Connect previous node to next node.
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

LinkedList.prototype.removeDuplicates = function() {
  let valObj = {};

  let curNode = this.head;
  while(curNode !== null) {
    const nextNode = curNode.next;
    // If the current node value is in valObj, remove the node.
    if (curNode.val in valObj) {
      this.removeNode(curNode);
    }
    // Else, set current node value in valObj.
    else {
      valObj[curNode.val] = true;
    }

    curNode = nextNode;
  }
}

LinkedList.prototype.outputVals = function() {
  let curNode = this.head;
  while (curNode !== null) {
    console.log(curNode.val);
    curNode = curNode.next;
  }
}

LinkedList.prototype.returnKthFromTail = function(k) {
  let i = 0;
  let curNode = this.tail;
  while (curNode !== null) {
    if (i === k) {
      return curNode;
    }
    i++;
    curNode = curNode.prev;
  }
  return null;
}


/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this._storage = new LinkedList();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  // If there is nothing in storage, just push.
  if (!this._storage.length) {
    this._storage.push(num);
  }
  // Otherwise, find the correct spot.
  else {

  }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

let medianFinder = new MedianFinder();
medianFinder.addNum(1)
medianFinder.addNum(2)
medianFinder.findMedian()
medianFinder.addNum(3)
medianFinder.findMedian()


