/*
https://leetcode.com/problems/add-strings/

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;

  let sum = [];
  let carry = 0;
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? num1[i] - '0' : 0;
    const n2 = j >= 0 ? num2[j] - '0' : 0;

    let curSum = n1 + n2 + carry;
    if (curSum >= 10) {
      carry = 1;
      curSum = curSum % 10;
    }
    else {
      carry = 0;
    }
    sum.push(curSum);
    i--;
    j--;
  }

  if (carry)
    sum.push('1');


  return sum.reverse().join('');
};

console.log(addStrings('999', '223'));
console.log(11 % 10)