/*
https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/

Given a rectangular cake with height h and width w, and two arrays of integers horizontalCuts and
verticalCuts where horizontalCuts[i] is the distance from the top of the rectangular cake to the
ith horizontal cut and similarly, verticalCuts[j] is the distance from the left of the rectangular
cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position
provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a huge number,
return this modulo 10^9 + 7.



Example 1:



Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
Output: 4
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal
and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.
Example 2:



Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
Output: 6
Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal
and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area.
Example 3:

Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
Output: 9


Constraints:

2 <= h, w <= 10^9
1 <= horizontalCuts.length < min(h, 10^5)
1 <= verticalCuts.length < min(w, 10^5)
1 <= horizontalCuts[i] < h
1 <= verticalCuts[i] < w
It is guaranteed that all elements in horizontalCuts are distinct.
It is guaranteed that all elements in verticalCuts are distinct.
*/


/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0);
  horizontalCuts.push(h);
  horizontalCuts.sort((a, b) => a - b);

  verticalCuts.push(0);
  verticalCuts.push(w);
  verticalCuts.sort((a, b) => a - b);

  let maxH = 0;
  for (let i = 1; i < horizontalCuts.length; ++i) {
    const gap = horizontalCuts[i] - horizontalCuts[i - 1];

    if (gap > maxH) maxH = gap;
  }

  let maxV = 0;
  for (let i = 1; i < verticalCuts.length; ++i) {
    const gap = verticalCuts[i] - verticalCuts[i - 1];

    if (gap > maxV) maxV = gap;
  }

  return (maxV * maxH)%(10**9 + 7);
};

console.log(maxArea(h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]))

console.log(maxArea(h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]))
