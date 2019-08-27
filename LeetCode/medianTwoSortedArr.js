/*
https://leetcode.com/problems/median-of-two-sorted-arrays/

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const totLength = nums1.length + nums2.length;
  const isEven = totLength % 2 === 0;

  let counter1 = 0;
  let counter2 = 0;

  // Index to stop the combination of the arrays (inclusive).
  const stopIdx = Math.floor(totLength / 2);

  let i = 0;

  // The combined array of nums1 and nums2.
  let combinedArr = [];

  /* We are going to add numbers from nums1 and nums2 to the combined array in order. Once it
     gets to the stopIdx, we will stop. */
  while(i <= stopIdx) {
    if ((typeof nums1[counter1] !== 'undefined' && nums1[counter1] <= nums2[counter2]) || typeof nums2[counter2] === 'undefined') {
      combinedArr.push(nums1[counter1++]);
    }
    else {
      combinedArr.push(nums2[counter2++]);
    }

    i++;
  }

  if (isEven) {
    return (combinedArr[combinedArr.length - 1] + combinedArr[combinedArr.length - 2]) / 2;
  }
  else {
    return combinedArr[combinedArr.length - 1];
  }
};


console.log(findMedianSortedArrays([1,3],[2]));
console.log(findMedianSortedArrays([1,2],[3,4]));
console.log(findMedianSortedArrays([],[1]));
console.log(findMedianSortedArrays([2],[]));
console.log(findMedianSortedArrays([0,0],[0,0]));