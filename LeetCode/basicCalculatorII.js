/*
https://leetcode.com/problems/basic-calculator-ii/

Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.



Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5


Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.
*/


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.trim();

  let curOp = '+';
  let curNum = 0;
  let lastNum = 0;
  let result = 0;

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    // If char is a whitespace, skip
    if (char === ' ') continue;

    // If char is a digit, add it to the curNum
    if (!isNaN(char)) curNum = (curNum * 10) + (char - '0')

    // If this is not a digit or whitespace or we are at the end.
    if (isNaN(char) || i === s.length - 1) {
      // Addition and subtraction, we could just add the lastNum to the result
      // and reset the lastNum to the current num.
      if (curOp === '-' || curOp === '+') {
        result += lastNum;
        lastNum = round(curOp === '+' ? curNum : -curNum);
      }
      // If it's multiplication, multiply lastNum * curNum
      else if (curOp === '*') lastNum = round(lastNum * curNum);
      // If it's division, divide lastNum by curNum
      else if (curOp === '/') lastNum = round(lastNum / curNum);

      // Set curOp to the new op
      curOp = char;

      // Reset curNum to 0
      curNum = 0;
    }
  }

  result += lastNum;
  return round(result);
};

function round(num) {
  return num >= 0 ? Math.floor(num) : Math.ceil(num);
}


// console.log(calculate("3+2*2"))
console.log(calculate(" 3/2 "))
console.log(calculate("14/3*2"))
// console.log(calculate(" 3+5 / 2 "))
