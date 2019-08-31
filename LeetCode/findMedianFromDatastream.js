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


/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this._storage = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  // If storage is empty, just push.
  if (!this._storage.length) {
    this._storage.push(num);
    return;
  }

  for (let i = 0; i < this._storage.length; ++i) {
    const curNum = this._storage[i];
    // If the number to insert is less than the number at current idx, then we know this is the spot.
    if (num <= curNum) {
      this._storage.splice(i, 0, num);
      return;
    }
  }

  // If we never found a spot, it must belong last.
  this._storage.push(num);
  return;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  // If odd ...
  if (this._storage.length % 2 !== 0) {
    return this._storage[Math.floor(this._storage.length / 2)];
  }
  // If even ...
  else {
    let halfIdx = this._storage.length / 2;
    return (this._storage[halfIdx - 1] + this._storage[halfIdx]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

let medianFinder = new MedianFinder();
medianFinder.addNum(6)
console.log(medianFinder.findMedian())
medianFinder.addNum(10)
console.log(medianFinder.findMedian())
medianFinder.addNum(2)
console.log(medianFinder.findMedian())
medianFinder.addNum(6)
console.log(medianFinder.findMedian())
medianFinder.addNum(5)
console.log(medianFinder.findMedian())
medianFinder.addNum(0)
console.log(medianFinder.findMedian())
medianFinder.addNum(6)
console.log(medianFinder.findMedian())
medianFinder.addNum(3)
console.log(medianFinder.findMedian())
medianFinder.addNum(1)
console.log(medianFinder.findMedian())
medianFinder.addNum(0)
console.log(medianFinder.findMedian())
medianFinder.addNum(0)
console.log(medianFinder.findMedian())


