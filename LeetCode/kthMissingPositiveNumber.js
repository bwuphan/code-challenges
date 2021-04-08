/*
https://leetcode.com/problems/kth-missing-positive-number/

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.



Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive
integer is 9.

Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.


Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
*/


// Linear solution
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let curInt = 1;
  let idx = 0;
  while (k >= 0) {
    const num = arr[idx];

    if (curInt === num)
      idx++;
    else {
      k--;
      if (k <= 0) return curInt;
    }

    curInt++;
  }
};


// Binary search solution
var findKthPositive = function(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let i = 0;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    // If there are still missing integers to the right, go right
    if ((arr[mid] - mid - 1) < k)
      left = mid + 1;
    // Else, go left
    else
      right = mid - 1;

    i++
    if (i > 100) return;
  }
  // console.log(left, right)
  // at the end, right will be less than left by 1
  // Get final number by adding k to arr[right]
  // This could potentially overshoot the missing int
  // So we need to subtract all the missing integers found to the left of arr[right]
  rightIdx = right >= 0 ? right : 0 // If rightIdx is -1, we set rightIdx to 0 instead
  return arr[rightIdx] + k - (arr[rightIdx] - right - 1);
}



console.log(findKthPositive([2,3,4,7,11], 5));
console.log(findKthPositive([2], 1))