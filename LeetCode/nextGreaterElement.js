/*
https://leetcode.com/problems/next-greater-element-i/


You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of
nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
*/

var Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(val) {
  return this._storage.push(val);
}

Stack.prototype.pop = function() {
  return this._storage.pop();
}

Stack.prototype.isEmpty = function() {
  return this._storage.length === 0;
}

Stack.prototype.peek = function() {
  return this._storage[this._storage.length - 1];
}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let numsTwoStack = new Stack();
  let numsOneMap = new Map();

  nums2.forEach(num => {
    while (true) {
      if (num > numsTwoStack.peek()) {
        const popped = numsTwoStack.pop();
        numsOneMap.set(popped, num);
      }
      else
        break;
    }

    numsTwoStack.push(num);
  });

  numsTwoStack._storage.forEach(num => numsOneMap.set(num, -1));

  return nums1.map(num => numsOneMap.get(num));
};


console.log(nextGreaterElement(nums1 = [4,1,2], nums2 = [1,3,4,2]));
// console.log(nextGreaterElement(nums1 = [2,4], nums2 = [1,2,3,4]));