/*
https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*/


/**
 * initialize your data structure here.
 */
// var MinStack = function() {
//   this._storage = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//   let min = null;
//   const top = this.topTuple();
//   if (!top)
//     min = x;
//   else if (x < top[1])
//     min = x;
//   else
//     min = top[1];


//   return this._storage.push([x, min]);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//   return this._storage.pop()[1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//   return this._storage[this._storage.length - 1] ? this._storage[this._storage.length - 1][0] : null;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.topTuple = function() {
//   return this._storage[this._storage.length - 1] || null;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//   return this.topTuple()[1];
// };

class MinStack {
  constructor() {
    this.storage = [];
  }

  push(x) {
    const topTuple = this.topTuple();
    const min = topTuple ? Math.min(x, topTuple[1]) : x;

    this.storage.push([x, Math.min(x, min)]);
  }

  pop() {
    return this.storage.pop()[1];
  }

  top() {
    return this.storage[this.storage.length - 1][0];
  }

  topTuple() {
    return this.storage[this.storage.length - 1];
  }

  getMin() {
    return this.topTuple()[1];
  }
}

/*
Solution:
When you push onto the stack, push in tuples, the first num being x and the second being
the min at that time.
*/

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/*
Solution:

Insert as pairs [value, min at the time of insert].
*/

var minStack = new MinStack();
// console.log(minStack.push(-2));
// console.log(minStack.push(0));
// console.log(minStack.push(-3));
// console.log(minStack.getMin()); // return -3
// console.log(minStack.pop());
// console.log(minStack.top());    // return 0
// console.log(minStack.getMin()); // return -2
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack.storage);
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.getMin());