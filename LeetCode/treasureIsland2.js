/*
https://leetcode.com/discuss/interview-question/356150

You have a map that marks the locations of treasure islands. Some of the map area has jagged rocks
and dangerous reefs. Other areas are safe to sail in. There are other explorers trying to find the
treasure. So you must figure out a shortest route to one of the treasure islands.

Assume the map area is a two dimensional grid, represented by a matrix of characters. You must start
from one of the starting point (marked as S) of the map and can move one block up, down, left or
right at a time. The treasure island is marked as X. Any block with dangerous rocks or reefs will
be marked as D. You must not enter dangerous blocks. You cannot leave the map area. Other areas O
are safe to sail in. Output the minimum number of steps to get to any of the treasure islands.

Example:

Input:
[['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']]

Output: 3
Explanation:
You can start from (0,0), (0, 3) or (0, 4). The treasure locations are (2, 4) (3, 0) and (4, 0).
Here the shortest route is (0, 3), (1, 3), (2, 3), (2, 4).
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
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === 'S')
        queue.enqueue({ row: i, col: j, steps: 0 });
    }
  }

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

console.log(findSteps(
[['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']]
))