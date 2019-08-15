/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this._size = size;
  this._storage = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this._storage.push(val);
  let sumArr = null;
  if (this._storage.length > this._size) {
    sumArr = this._storage.slice(this._storage.length - this._size, this._storage.length);
  } else {
    sumArr = this._storage;
  }
  return sumArr.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0) / sumArr.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */