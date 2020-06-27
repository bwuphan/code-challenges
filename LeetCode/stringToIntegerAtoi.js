/*
https://leetcode.com/problems/string-to-integer-atoi/

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-
whitespace character is found. Then, starting from this character, takes an optional initial plus
or minus sign followed by as many numerical digits as possible, and interprets them as a numerical
value.

The string can contain additional characters after those that form the integral number, which are
ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no
such sequence exists because either str is empty or it contains only whitespace characters, no
conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed
integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values,
INT_MAX (231 − 1) or INT_MIN (−231) is returned.

Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
*/


/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let i = 0;
  while (str[i] === ' ')
    i++;

  let isNegative = false;
  if (str[i] === '+' || str[i] === '-') {
    isNegative = str[i] === '-' ? true : false;
    i++;
  }

  if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57)
    return 0;

  let result = 0;
  for (; i < str.length; ++i) {
    const ascii = str.charCodeAt(i);
    if (ascii >= 48 && ascii <= 57) {
      const digitVal = str[i] - '0';
      result = result * 10 + digitVal;
    }
    else
      break;
  }

  if (isNegative) {
    result *= -1;
    return result >= -2147483648 ? result : -2147483648;
  }
  else return result <= 2147483647 ? result : 2147483647;
};


/*
Solution:
Find the start index by trimming the whitespace from the beginning first.

Then we find whether it's negative or positive.

If the first character left is not an integer return 0 because we can't operate on it.

Then we loop through and start adding to the result. If the current char is not a digit,
stop right there.
Else, cast to a digit and multiple the result by 10 and add the new digit.

Figure out if the number is out of bounds and if it is, return the max instead.
*/

console.log(myAtoi("   -42") === -42);
console.log(myAtoi("4193 with words") === 4193);
console.log(myAtoi("words and 987") === 0);
console.log(myAtoi("-91283472332") === -2147483648);
console.log(myAtoi("3.14159") === 3)
console.log(myAtoi("  -0012a42") === -12)