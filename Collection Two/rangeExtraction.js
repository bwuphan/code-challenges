// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

const rangeExtraction = (array) => {
	let resultArr = [];
	for (let i = 0; i < array.length; i++) {
		let pushThis = array[i].toString();
		let addNum = null;
		let j = i;
		while (array[j + 1] - array[j] === 1) {
			addNum = array[j + 1];
			j++;
		}
		if (j - i >= 2) {
			pushThis += `-${addNum}`;
			i += (j - i);
		}
		resultArr.push(pushThis);
	}
	return resultArr.join(',');
};

console.log(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));