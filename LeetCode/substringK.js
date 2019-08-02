/*
Michelle has created a word game for her students. The word game begins with Michelle writing a string and a number, K, on the board. The students have to ﬁnd the substrings of size K with K distinct characters.

Write an algorithm to help the students ﬁnd the correct answer. If the given string does not have K distinct characters then output an empty list.

Input
The input to the function/method consists of two arguments -
str, representing the string written by the teacher;
k, an integer, written by the teacher on the board.

Output
Return distinct substrings of input string of size K with K distinct characters.

Constraints
0 ≤ k ≤ 26

Note
The input string consists of only lowercase letters of the English alphabet. Substrings are not necessarily distinct.

Example 1:

Input: str = "awaglknagawunagwkwagl", k = 4
Output: [wagl, aglk, glkn, lkna, knag, gawu, awun, wuna, unag, nagw, agwk, kwag]
Explanation: 
Substrings in order are: wagl, aglk, glkn, lkna, knag, gawu, awun, wuna, unag, nagw, agwk, kwag, wagl 
"wagl" is repeated twice, but is included in the output once.
*/

const substringK = (string, k) => {
	let substrings = [];
	for (let i = 0; i < string.length; ++i) {
		const curLetter = string[i];
		let wordObj = {};
		wordObj[curLetter] = true;
		let curWord = curLetter;
		for (let j = 1; j < 4; ++j) {
			const curSubLetter = string[i + j];
			if (curSubLetter in wordObj) {
				break;
			} else {
				curWord += curSubLetter;
				wordObj[curSubLetter] = true;
			}
		}
		if (curWord.length === 4) {
			substrings.push(curWord);
		}
	}
	return substrings;
}

console.log(substringK("awaglknagawunagwkwagl", 4));