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




// Solution 2 with heap.

class MinHeap {
  constructor(array) {
    this._heap = [];

    if (array) {
      array.forEach(num => this.insert(num));
    }
  }

  insert(interval) {
    /*
      Push the new val to the heap.
      Set current idx to the last pushed index and get the parent index.
      If there is no parent, we know we're in the right place and we can return.
      Otherwise keep swapping until we find the right spot. The inserted val has to be greater
      than its parent.
     */
    this._heap.push(interval);

    let thisIdx = this._heap.length - 1;
    let parentIdx = this.getParentIdx(thisIdx);

    if (parentIdx === null) return interval;

    while (parentIdx !== null && this._heap[thisIdx][1] < this._heap[parentIdx][1]) {
      this.swap(parentIdx, thisIdx);
      thisIdx = parentIdx;
      parentIdx = this.getParentIdx(thisIdx);
    }
  }

  swap(idx1, idx2) {
    const temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }

  getParentIdx(idx) {
    const pIdx = Math.floor((idx - 1) / 2);
    return pIdx < 0 ? null : pIdx;
  }

  peek() {
    const topOfHeap = this._heap.length ? this._heap[0] : null;
    return topOfHeap;
  }

  getLeftChildIdx(idx) {
    const lIdx = Math.floor((2 * idx) + 1);
    return lIdx < this._heap.length ? lIdx : null;
  }

  getRightChildIdx(idx) {
    const rIdx = Math.floor((2 * idx) + 2);
    return rIdx < this._heap.length ? rIdx : null;
  }

  remove() {
    /*
      Swap the first element with the last and pop off the new last element.
      Start at the first element and compare with the lower of its two children.
      If the smaller of the children is smaller than the current element, swap the two positions.
      Keep doing this until you find the right location.
    */

    if (this._heap.length === 0)
      return null;

    const lastIdx = this._heap.length - 1;
    this.swap(0, lastIdx);

    const returnVal = this._heap.pop();

    let curIdx, leftChildIdx, rightChildIdx, smallerIdx = null;

    curIdx = 0;

    while (true) {
      leftChildIdx = this.getLeftChildIdx(curIdx);

      rightChildIdx = this.getRightChildIdx(curIdx);

      smallerIdx = null;

      if (rightChildIdx === null || this._heap[leftChildIdx][1] < this._heap[rightChildIdx][1]) {
        smallerIdx = leftChildIdx;
      }
      else {
        smallerIdx = rightChildIdx;
      }

      if (this._heap[curIdx] && this._heap[smallerIdx] && this._heap[curIdx][1] > this._heap[smallerIdx][1]) {
        this.swap(curIdx, smallerIdx);
        curIdx = smallerIdx;
        continue;
      }
      else {
        break;
      }
    }
    return returnVal;
  }

  log() {
    console.log(this._heap);
  }
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  if (!intervals || intervals.length === 0)
    return 0;
  // console.log(intervals);
  let countRooms = 1;
  const minHeap = new MinHeap();
  minHeap.insert(intervals[0]);

  for (let i = 1; i < intervals.length; ++i) {
    const interval = intervals[i];
    const peeked = minHeap.peek();
    if (interval[0] < peeked[1]) {
      minHeap.insert(interval);
      countRooms++;
    }
    else {
      minHeap.remove();
      minHeap.insert(interval);
    }
    // console.log(interval, peeked, countRooms);
    // console.log('LOG', minHeap.log())
  }

  return countRooms;
};

/*
Solution:
Put intervals into heap as you go. MinHeap sorted by end time.

When you reach a new interval, check if the top of the heap has a end time that is larger than your
current interval's start time.
If it is, create a new room, else remove from top of the heap and insert your new interval.
*/

// console.log(minMeetingRooms([[0,30],[5,10],[15,20]]));
// console.log(minMeetingRooms([[7,10],[2,4]]));
// console.log(minMeetingRooms([[1,5],[8,9],[8,9]]))
console.log(minMeetingRooms([[765,989],[466,472],[860,996],[338,932],[618,639],[616,936],[832,864],[92,758]]))