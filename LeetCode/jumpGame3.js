/*
https://leetcode.com/problems/jump-game-iii/

Given an array of non-negative integers arr, you are initially positioned at start index of the
array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to
any index with value 0.

Notice that you can not jump outside of the array at any time.



Example 1:

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation:
All possible ways to reach at index 3 with value 0 are:
index 5 -> index 4 -> index 1 -> index 3
index 5 -> index 6 -> index 4 -> index 1 -> index 3
Example 2:

Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true
Explanation:
One possible way to reach at index 3 with value 0 is:
index 0 -> index 4 -> index 1 -> index 3
Example 3:

Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.


Constraints:

1 <= arr.length <= 5 * 10^4
0 <= arr[i] < arr.length
0 <= start < arr.length
*/

const Queue = require('../Prototypes/Queue').Queue;
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const visited = new Set();
  const queue = new Queue();
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    const curIdx = queue.dequeue();
    const curVisit = arr[curIdx];

    visited.add(curIdx);

    if (curVisit === 0)
      return true;

    const leftIdx = curIdx - curVisit;
    if (leftIdx >= 0 && !visited.has(leftIdx))
      queue.enqueue(leftIdx);

    const rightIdx = curIdx + curVisit;
    if (rightIdx < arr.length && !visited.has(rightIdx))
      queue.enqueue(rightIdx);
  }

  return false;
};

/*
Solution:
1. Create a visited set to keep track of visited indices.
2. Create a queue to see which idx to visit next.
3. BFS through but don't revisit indices that are in the visited set and stay in bounds.
4. If we land on 0, return true. If we reach the end of the queue, return false.

*/

console.log(canReach(arr = [4,2,3,0,3,1,2], start = 5))
console.log(canReach(arr = [4,2,3,0,3,1,2], start = 0))
console.log(canReach(arr = [3,0,2,1,2], start = 2))