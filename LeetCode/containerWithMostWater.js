/*
https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate
(i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container, such that the container contains the
most water.

Note: You may not slant the container and n is at least 2.





The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area
of water (blue section) the container can contain is 49.



Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  /* Set pointers at first and last element of height array.
   * Calculate area at pointers and set new max if that area is greater.
   * Move the smaller height pointer inwards because that's already the largest area that can be
   * gained off that height.
   */
  let leftIdx = 0, rightIdx = height.length - 1;

  let max = 0;
  while (leftIdx < rightIdx) {
    const lHeight = height[leftIdx];
    const rHeight = height[rightIdx];

    const h = Math.min(lHeight, rHeight);
    const w = rightIdx - leftIdx;
    const area = h * w;

    if (area > max) max = area;

    if (lHeight > rHeight) rightIdx--;
    else leftIdx++;
  }

  return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));