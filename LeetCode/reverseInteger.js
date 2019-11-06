/*
https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed
integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns
0 when the reversed integer overflows.
*/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let neg = false;
  if (x < 0) {
    neg = true;
    x *= -1;
  }
  let newX = x
    .toString()
    .split('')
    .reverse()
    .join('');


  newX = +newX;

  if (neg === true) newX *= -1;

  return (newX < (Math.pow(2, 31) - 1) && newX > Math.pow(-2, 31)) ? newX : 0;

};

console.log(reverse(120));