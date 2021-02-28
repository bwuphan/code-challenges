/*
https://leetcode.com/problems/remove-invalid-parentheses/

Remove the minimum number of invalid parentheses in order to make the input string
valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
*/


/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let closeRemovalNum = 0;
  let unclosedOpens = 0;
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (char === '(')
      unclosedOpens++;
    else if (char === ')') {
      if (unclosedOpens > 0) unclosedOpens--;
      else closeRemovalNum++;
    }
  }

  let openRemoveNum = 0;
  let unopenCloses = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    const char = s[i];
    if (char === ')')
      unopenCloses++;
    else if (char === '(') {
      if (unopenCloses) unopenCloses--;
      else openRemoveNum++;
    }
  }
  console.log(closeRemovalNum, openRemoveNum)
};
console.log(removeInvalidParentheses("()())()"))
