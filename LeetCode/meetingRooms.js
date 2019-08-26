/*
https://leetcode.com/problems/meeting-rooms/

Given an array of meeting time intervals consisting of start and end times
[[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
NOTE: input types have been changed on April 15, 2019. Please reset to default code
definition to get new method signature.
*/


/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  // Sort intervals by meeting start time ascending.
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; ++i) {
    const curInterval = intervals[i];

    // Only do at not first interation.
    if (i !== 0) {
      // Set to previous interval.
      const prevInterval = intervals[i - 1];

      // If current interval start time is less than previous interval end, we have overlap.
      if (curInterval[0] < prevInterval[1]) {
        return false;
      }
    }
  }

  return true;
};

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]));
console.log(canAttendMeetings([[7,10],[2,4]]));