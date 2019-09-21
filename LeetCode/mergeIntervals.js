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
    if (!curInterval) {
      curInterval = intervals[i];
    }
    const nextInterval = intervals[i + 1] || null;

    if (!nextInterval || curInterval[1] < nextInterval[0]) {
      mergedArr.push(curInterval);
      curInterval = null;
    }
    // If the next interval exists and both the first el of the current interval is greater than
    // both elements of the nextInterval, merge the first el of the curInterval to the next interval
    else if (nextInterval && curInterval[0] > nextInterval[0] && curInterval[0] > nextInterval[1]) {
      curInterval[0] = nextInterval[0];
    }
    // If the last element of the current interval is less than the last element of the next interval,
    // merge last element.
    else if (curInterval[1] < nextInterval[1]){
      curInterval[1] = nextInterval[1];
    }
  }
  return mergedArr;
};


console.log(merge([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]]));
console.log(merge([[1,4],[0,0]]))