/*
https://leetcode.com/problems/add-binary/

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let aArr = a.split('').reverse().map(num => +num);
	let bArr = b.split('').reverse().map(num => +num);

	let rArr = [];

	// The carry num. Could be 1 or 0;
	let carry = 0;

	// Max is the max length between a and b.
	const max = Math.max(aArr.length, bArr.length) + 1;
	for (let i = 0; i < max; ++i) {

		// Init the num to 0 if it is a falsey value in cause it's undefined.
		if (!aArr[i]) aArr[i] = 0;
		if (!bArr[i]) bArr[i] = 0;

		// If we are at the last loop and both values are 0, don't add another num.
		if (i === max - 1 && !aArr[i] && !bArr[i] && !carry) {
			break;
		}

		// Get the current sum from adding the nums and the carry.
		let curSum = aArr[i] + bArr[i] + carry;

		rArr.push(curSum % 2);

		if (curSum >= 2) carry = 1;
		else carry = 0;
	}

	return rArr.reverse().join('');
};


console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
console.log(addBinary('0', '0'));
console.log(addBinary('0', '1'));