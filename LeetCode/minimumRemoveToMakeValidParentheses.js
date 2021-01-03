/*
https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that
the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.


Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"


Constraints:

1 <= s.length <= 10^5
s[i] is one of  '(' , ')' and lowercase English letters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let openParenIdx = [];

  let i = 0;
  let correctedS = '';
  while (i < s.length) {
    const char = s[i];
    // Add open paren.
    if (char === '(') {
      openParenIdx.push(correctedS.length);
    }
    else if (char === ')') {
      // If there is an available open paren, pop it out.
      if (openParenIdx.length > 0) {
        openParenIdx.pop();
      }
      // If there is no open parens preceeding, it would be invalid to include this char.
      else {
        ++i;
        continue;
      }
    }
    correctedS += char;
    i++;
  }

  while (openParenIdx.length) {
    const outIdx = openParenIdx.pop();
    correctedS = `${correctedS.slice(0, outIdx)}${correctedS.slice(outIdx + 1, correctedS.length)}`;
  }
  return correctedS;
};

/*
Solution:

Create a new string where a left paren is only added to that string when there is an appropriate left preceeding.
Keep track of remaining open parens.

For remaining open parens, slice these out of the new corrected string.

*/

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("a)b(c)d"))
console.log(minRemoveToMakeValid("))(("))
console.log(minRemoveToMakeValid("(a(b(c)d)"))
console.log(minRemoveToMakeValid("())()((("))