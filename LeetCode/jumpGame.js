/*
https://leetcode.com/problems/jump-game/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let resultBool = false;

  /* Create memo where elements are null if it hasn't been traveled, false if there is no solution
     at that particular index, and true if there is a solution. */
  let memo = {};
  nums.forEach((num, i) => {
    if (i === nums.length - 1) {
      memo[i] = true;
    }
    else {
      memo[i] = null;
    }
  });

  // The jump function.
  const jump = function(idx) {
    // If we are at the final index, then we found a solution.
    if (idx === nums.length - 1) {
      resultBool = true;
      memo[idx] = true;
      return true;
    }
    // If we have traveled this idx and it is false, then return false.
    if (memo[idx] === false) {
      return false;
    }

    // If we haven't yet found a solution and this idx has not yet been traveled, proceed.
    if (!resultBool && memo[idx] === null) {
      // Loop through possible jumps for this index.
      for (let i = 1; i <= nums[idx]; ++i) {
        const jumpIdx = idx + i;
        // If the index to be stepped in has yet to be traveled, call jump.
        if (memo[jumpIdx] === null) {
          const thisJump = jump(jumpIdx);
          // If this particular jump returned false, set memo for this index to be false;
          if (!thisJump) {
            memo[jumpIdx] = false;
          }
          // Else if this particular jump returned a solution, set memo and resultBool to true.
          else if (thisJump) {
            memo[jumpIdx] = true;
            resultBool = true;
            return true;
          }
        }
        // Else if this memo has already been traveled, set resultBool to true and return.
        else if (memo[jumpIdx] === true) {
          resultBool = true;
          return true;
        }
      }
      // If we reached this point without a return, then we know there is no solution for this idx.
      return false;
    }
  }

  jump(0);

  return resultBool;
};


// console.log(canJump([2,3,1,1,4]));
// console.log(canJump([3,2,1,0,4]));
// console.log(canJump([1,2]));
console.log(canJump([2,0,0]));