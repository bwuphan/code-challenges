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
  // Get minimum removals for both left and right parens.

  // First, go forwards and find out how many right parens we have to remove.
  let rightRemovalCount = 0;
  let unclosedLeftCount = 0;
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (char === '(')
      unclosedLeftCount++;
    else if (char === ')') {
      if (unclosedLeftCount > 0) unclosedLeftCount--;
      else rightRemovalCount++;
    }
  }

  // Then, go backwards and figure out how many left parens we need to remove.
  let leftRemovalCount = 0;
  let unclosedRightCount = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    const char = s[i];
    if (char === ')')
      unclosedRightCount++;
    else if (char === '(') {
      if (unclosedRightCount) unclosedRightCount--;
      else leftRemovalCount++;
    }
  }


};
console.log(removeInvalidParentheses("()())()"))
