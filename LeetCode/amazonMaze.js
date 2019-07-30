/*
You are in charge of preparing a recently purchased lot for Amazon’s building. The lot is covered with trenches and has a single obstacle that needs to be taken down before the foundation is prepared for the building. The demolition robot must remove the obstacle before the progress can be made on the building.
Write an algorithm to determine the minimum distance required for the demolition robot to remove the obstacle.

Assumptions:
• The lot is flat, except the trenches and can be represented by a 2D grid.
• The demolition robot must start at the top left corner of the lot, which is always flat, and
can move on block up, down, right, left
• The demolition robot cannot enter trenches and cannot leave the lot.
• The flat areas are indicated by 1, areas with trenches are indicated by 0, and the obstacle
is indicated by 9

Input:
The input of the function has 3 arguments: numRows – number of rows
numColumns – number of columns
lot – 2d grid of integers

Output:
Return an integer that indicated the minimum distance traversed to remove the obstacle else return -1

Constraints:
1<= numRows, numColumns <= 1000

Example:
numRows = 3,
numColumns = 3
lot = [
[1, 0, 0],
[1, 0, 0],
[1, 9, 1]]

Output: 3

Explanation: Starting from the top-left corner, the demolition robot traversed the cells (0,0) -> (1,0)-> (2,0)->(2,1)
The robot moves 3 times to remove the obstacle “9”
*/

function demolish(grid) {
	let minSolution = null;

	const dfs = (x, y, numMoves, grid) => {
		if (grid[y][x] === 0) return;

		if (grid[y][x] === 9) {
			if (!minSolution) minSolution = numMoves;
			else if (numMoves < minSolution) minSolution = numMoves;
			return;
		}

		numMoves++;

		grid = [...grid];
		grid[y][x] = 0;
		if (x + 1 < grid[0].length) dfs(x + 1, y, numMoves, grid);
		if (x - 1 >= 0) dfs(x - 1, y, numMoves, grid);
		if (y + 1 < grid.length) dfs(x, y + 1, numMoves, grid);
		if (y - 1 >= 0) dfs(x, y - 1, numMoves, grid);
	};

	dfs(0, 0, 0, grid);
	return minSolution;
}

lot = [
[1, 1, 1, 0],
[1, 0, 0, 0],
[1, 1, 1, 9]]
console.log(demolish(lot));