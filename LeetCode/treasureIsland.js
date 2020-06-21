/*
https://leetcode.com/discuss/interview-question/347457

You have a map that marks the location of a treasure island. Some of the map area has jagged rocks
and dangerous reefs. Other areas are safe to sail in. There are other explorers trying to find the
treasure. So you must figure out a shortest route to the treasure island.

Assume the map area is a two dimensional grid, represented by a matrix of characters. You must
start from the top-left corner of the map and can move one block up, down, left or right at a time.
The treasure island is marked as X in a block of the matrix. X will not be at the top-left corner.
Any block with dangerous rocks or reefs will be marked as D. You must not enter dangerous blocks.
You cannot leave the map area. Other areas O are safe to sail in. The top-left corner is always safe.
Output the minimum number of steps to get to the treasure.

Example:

Input:
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

Output: 5
Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.
*/

const Queue = require('../Prototypes/Queue.js').Queue;

const findSteps = (board) => {
  const checkBounds = (row, col) => {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
      return false;
    return true;
  }

  const visited = board.map(row => new Array(board[0].length));

  const queue = new Queue();
  queue.enqueue({ row: 0, col: 0, steps: 0 });
  let steps = 0;

  while (!queue.isEmpty()) {
    const coordinates = queue.dequeue();

    const row = coordinates.row;
    const col = coordinates.col;
    let steps = coordinates.steps;

    if (!checkBounds(row, col) || visited[row][col] || board[row][col] === 'D')
      continue;

    if (board[row][col] === 'X')
      return steps;

    steps++;
    visited[row][col] = true;
    queue.enqueue({ row: row - 1, col, steps });
    queue.enqueue({ row, col: col - 1, steps });
    queue.enqueue({ row: row + 1, col, steps });
    queue.enqueue({ row, col: col + 1, steps });
  }
}


/*
Solution: BFS
*/

console.log(findSteps(
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]
))