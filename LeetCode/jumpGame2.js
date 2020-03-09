/*
https://leetcode.com/problems/jump-game-ii/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.

Accepted
*/

var Queue = function() {
  this.storage = [];
}

Queue.prototype.enqueue = function(item) {
  this.storage.push(item);
  return item;
}

Queue.prototype.dequeue = function() {
  return this.storage.shift();
}

Queue.prototype.isEmpty = function() {
  return this.storage.length === 0;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // Use BFS.

  let queue = new Queue();
  queue.enqueue({ idx: 0, numJumps: 0 });


  while (!queue.isEmpty()) {
    let item = queue.dequeue();
    // If the item index is at the last index or is out of bounds, we found a solution.
    if (item.idx >= nums.length - 1) {
      return item.numJumps;
    }

    // If the max jump from the current index is at the last index or out of bounds, we found a solution.
    if (nums[item.idx] >= nums.length - 1) {
      return item.numJumps + 1;
    }

    // Let the max index be equal to the last items max index.
    let maxIdx = item.idx;

    // Loop through possible jumps.
    for (let i = 0; i <= nums[item.idx]; ++i) {
      // Set current index to possible jumps from current items index.
      const curIndex = item.idx + i;

      // If this jump is greater than the max index or this is out of bounds, set the new max index.
      if (nums[curIndex] + item.idx > maxIdx || !nums[curIndex]) {
        maxIdx = curIndex + item.idx;
      }
    }
    // Queue max index item.
    queue.enqueue({ idx: maxIdx, numJumps: item.numJumps + 1 });
  }

  return results;
};

console.log(jump([2,3,1,1,4]));
console.log(jump([7,8,4,2,0,6,4,1,8,7,1,7,4,1,4,1,2,8,2,7,3,7,8,2,4,4,5,3,5,6,8,5,4,4,7,4,3,4,8,1,1,9,0,8,2]));
console.log(jump([1,2,3]));
console.log(jump([2,3,1]));
console.log(jump([3,2,1]));

console.log(jump([1,1,1,1]));