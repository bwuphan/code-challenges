/*
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
	const sArr = S.split('');
	const sArrReverse = [...sArr].reverse();
	lastOccuredObj = sArrReverse.reduce((obj, letter, idx) => {
		if (!(letter in obj)) {
			obj[letter] = S.length - idx - 1;
		}
		return obj;
	}, {});

	let lastIdx = null;
	let diffIdx = 0;
	return sArr.reduce((arr, letter, idx) => {
		if (lastIdx === null) lastIdx = lastOccuredObj[letter];
		if (lastOccuredObj[letter] > lastIdx) lastIdx = lastOccuredObj[letter];
		if (idx === lastIdx) {
			arr.push(diffIdx + 1);
			lastIdx = null;
			diffIdx = 0;
		} else {
			diffIdx++;
		}
		return arr;
	}, []);
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));