/*
https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed
parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let results = [];

  const traverse = function(parenStr, leftCount, rightCount) {
    // If leftCount and rightCount are both 0, we are done and we can push.
    if (!leftCount && !rightCount) {
      results.push(parenStr);
    }

    // If leftCount is not 0 and this is not the last character, add a left paren.
    if (leftCount && parenStr.length !== (n * 2) - 1) {
      traverse(parenStr + '(', leftCount - 1, rightCount);
    }

    // If rightCount is not 0 and this is not the first character and leftCount is less than
    // rightCount, add a right paren. We have to do leftCount is less than rightCount because
    // something like this is invalid "())("
    if (rightCount && parenStr.length !== 0 && leftCount < rightCount) {
      traverse(parenStr + ')', leftCount, rightCount - 1);
    }
  }

  traverse('', n, n);

  return results;
};

console.log(generateParenthesis(3));