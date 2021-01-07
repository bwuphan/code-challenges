/*
https://leetcode.com/problems/divide-two-integers/

Given two integers dividend and divisor, divide two integers without using multiplication, division,
and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For
example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:

Assume we are dealing with an environment that could only store integers within the 32-bit signed
integer range: [−231,  231 − 1]. For this problem, assume that your function returns 231 − 1 when
the division result overflows.


Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Example 3:

Input: dividend = 0, divisor = 1
Output: 0
Example 4:

Input: dividend = 1, divisor = 1
Output: 1


Constraints:

-231 <= dividend, divisor <= 231 - 1
divisor != 0
*/


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  // Check if final answer should be a negative or positive number.
  const hasNegative = (dividend < 0 && divisor >= 0) || (dividend >=0 && divisor < 0);

  // Take care of some edge cases
  if (dividend < 0) dividend = -dividend;
  if (divisor < 0) divisor = -divisor;
  if (dividend === divisor) return hasNegative ? -1 : 1;
  if (divisor === 1) return hasNegative ? -dividend : dividend;

  // Create an array of exponents.
  const exponents = [divisor];
  let num = divisor;
  while (num < Number.MAX_SAFE_INTEGER && num < dividend) {
    num *= 2
    exponents.push(num);
  }

  let answer = 0;
  let remainder = dividend
  while (remainder > divisor) {
    for (let i = 0; i < exponents.length; ++i) {
      if (exponents[i + 1] > remainder) {
        answer = answer + Math.pow(2, i);
        remainder -= exponents[i];
        break;
      }
    }
  }

  return hasNegative ? -answer : answer;
};

console.log(divide(dividend = 10, divisor = 3))
console.log(divide(93706, 157))
console.log(divide(-93706, 157))
console.log(divide(7, -3))