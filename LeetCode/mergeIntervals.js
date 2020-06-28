/*
https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to
get new method signature.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let mergedArr = [];
  let curInterval = null;
  for (let i = 0; i < intervals.length; ++i) {
    if (!curInterval)
      curInterval = intervals[i];

    const nextInterval = intervals[i + 1] || null;

    // If there is no next interval or the last el of the current interval is greater than the
    // first el of the next interval, we know there is no merge necessary so we can just push the
    // current interval.
    if (!nextInterval || curInterval[1] < nextInterval[0]) {
      mergedArr.push(curInterval);
      curInterval = null;
    }
    // If the last element of the current interval is less than the last element of the next interval,
    // merge last element.
    else if (curInterval[1] < nextInterval[1])
      curInterval[1] = nextInterval[1];
  }

  return mergedArr;
};

/*
Solution:
We sort the intervals lowest first num to highest first num.

Loop through the intervals.
  The current interval will potentially be mutated as we keep the first number the same but we may
  need to change the second number to be the highest interval with that same first number.

  If we get to a spot where the last digit of the current interval is less than the first of the
  last, we're ok to just add to the array and continue.
*/


// console.log(merge([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]]));
// console.log(merge([[1,4],[0,0]]))
// console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))