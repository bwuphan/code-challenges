/*
You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:

0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
 

You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. 
And after cutting, the original place has the tree will become a grass (value 1).

You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. 
If you can't cut off all the trees, output -1 in that situation.

You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

Example 1:

Input: 
[
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
Output: 6
 

Example 2:

Input: 
[
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
Output: -1
*/

/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
	console.log(forest);
	let numSteps = -1;
	const cutTree = (y, x, number) => {
		console.log(number, forest[y][x]);
		if (number > forest[y][x] || forest[y][x] === 0) return;

		forest[y][x] = 1;
		numSteps++;
		number = forest[y][x];
		if (y - 1 >= 0) cutTree(y - 1, x, number);
		if (y + 1 < forest.length) cutTree(y + 1, x, number);
		if (x - 1 >= 0) cutTree(y, x - 1, number);
		if (x + 1 < forest[0].length) cutTree(y, x + 1, number);
	}
	let y = null, x = null, lowestNum = null;
	for (let i = 0; i < forest.length; ++i) {
		for (let j = 0; j < forest[0].length; ++j) {
			if (lowestNum === null || (forest[i][j] < lowestNum && forest[i][j] !== 0)) {
				y = i;
				x = j;
				lowestNum = forest[i][j];
			}
		}
	}

	cutTree(y, x, lowestNum);
	for (let i = 0; i < forest.length; ++i) {
		for (let j = 0; j < forest[0].length; ++j) {
			if (forest[i][j] !== 0) return -1;
		}
	}
	return numSteps;
};

var grid1 = [
 [1,2,3],
 [0,0,4],
 [7,6,5]
];

var grid2 = [ [ 54581641, 64080174, 24346381, 69107959 ],
  [ 86374198, 61363882, 68783324, 79706116 ],
  [ 668150, 92178815, 89819108, 94701471 ],
  [ 83920491, 22724204, 46281641, 47531096 ],
  [ 89078499, 18904913, 25462145, 60813308 ] ]
console.log(cutOffTree(grid2));