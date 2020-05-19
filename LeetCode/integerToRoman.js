/*
https://leetcode.com/problems/integer-to-roman/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together.
Twelve is written as, XII, which is simply X + II. The number twenty seven is written
as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However,
the numeral for four is not IIII. Instead, the number four is written as IV. Because
the one is before the five we subtract it making four. The same principle applies to
the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (num === 0) return 0;

  const romanMap = {
    I:  1,
    IV: 4,
    V:  5,
    IX: 9,
    X:  10,
    XL: 40,
    L:  50,
    XC: 90,
    C:  100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  const order = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

  let oIdx = 0;
  let result = '';
  const recurse = (remainder) => {
    if (!remainder) return;

    const letter = order[oIdx];
    const value = romanMap[letter];

    if (remainder >= value) {
      result += letter;
      remainder -= value;
    }
    else {
      oIdx++;
    }
    recurse(remainder);
  }

  recurse(num);

  return result;
};

// console.log(intToRoman(3));
// console.log(intToRoman(4));
// console.log(intToRoman(9));
// console.log(intToRoman(58));
console.log(intToRoman(1994));

console.log(50% 10)