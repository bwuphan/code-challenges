/*
https://leetcode.com/problems/meeting-rooms-ii/

Given an array of meeting time intervals consisting of start and end times
[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code
definition to get new method signature.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  // If intervals are empty, just return 0.
  if (intervals.length === 0) return 0;

  // Sort intervals by meeting start time ascending.
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  // Initialize the first meeting room.
  let meetingRooms = [[intervals[0]]];

  for (let i = 1; i < intervals.length; ++i) {
    const curInterval = intervals[i];

    // Tells if the interval has been pushed to an existing meeting room.
    let intervalPushed = false;

    for (let j = 0; j < meetingRooms.length; ++j) {
      const curMeetingRoom = meetingRooms[j];

      // If you find an open meeting room, push to that meeting room and set intervalPushed to true.
      if (curInterval[0] >= curMeetingRoom[curMeetingRoom.length - 1][1]) {
        intervalPushed = true;
        curMeetingRoom.push(curInterval);
        break;
      }
    }

    // If the interval has yet to be pushed to a meeting room, create a new meeting room.
    if (!intervalPushed) {
      meetingRooms.push([curInterval]);
    }
  }

  return meetingRooms.length;
};

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]));
console.log(minMeetingRooms([[7,10],[2,4]]));