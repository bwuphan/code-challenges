/*
https://leetcode.com/problems/flatten-nested-list-iterator/

Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:

Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false,
             the order of elements returned by next should be: [1,1,2,1,1].
Example 2:

Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false,
             the order of elements returned by next should be: [1,4,6].
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this._gen = listGenerator(nestedList);
  this._idx = null;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this._idx + 1 < this._gen.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  // If this._idx is null, start by setting it to 0.
  if (this._idx === null) {
    this._idx = 0;
  }
  // Else, just increment.
  else {
    this._idx++;
  }
  return this._gen[this._idx];
};

function listGenerator(list) {
  let newList = [];

  const recurseArr = function(array) {
    array.forEach(el => {
      if (!Array.isArray(el)) {
        newList.push(el);
      }
      else {
        recurseArr(el);
      }
    });
  }

  recurseArr(list, 0);

  return newList;
}
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

var nestedList = [[1,1],2,[1,1]]
var i = new NestedIterator(nestedList), a = [];
while (i.hasNext()) a.push(i.next());
console.log(a);

// var n2 = new NestedIterator([1,[4,[6]]]);

// console.log(listGenerator([[1,1],2,[1,1]]));
// console.log(listGenerator([1,[4,[6]]]));