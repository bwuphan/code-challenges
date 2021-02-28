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

  const solutions = new Set();

  function recurse(string, i, leftCount, rightCount, leftRemovalCount, rightRemovalCount) {
    if (i >= s.length) {
      if (leftCount === rightCount && !solutions.has(string))
        solutions.add(string);

      return;
    }

    const char = s[i];

    i++;
    if (char === ')') {
      if (rightRemovalCount) {
        recurse(string, i, leftCount, rightCount, leftRemovalCount, rightRemovalCount - 1);
      }
      if (leftCount > rightCount) {
        recurse(string + ')', i, leftCount, rightCount + 1, leftRemovalCount, rightRemovalCount);
      }
    }
    else if (char === '(') {
      if (leftRemovalCount) {
        recurse(string, i, leftCount, rightCount, leftRemovalCount - 1, rightRemovalCount);
      }

      // Have to do unconditionally since we don't know immediately if this is valid or not.
      recurse(string + '(', i, leftCount + 1, rightCount, leftRemovalCount, rightRemovalCount);
    }
    else recurse(string + char, i, leftCount, rightCount, leftRemovalCount, rightRemovalCount);
  }

  recurse('', 0, 0, 0, leftRemovalCount, rightRemovalCount);
  return Array.from(solutions);
};
// console.log(removeInvalidParentheses("()())()"))
// console.log(removeInvalidParentheses('(a)())()'));
// console.log(removeInvalidParentheses(')('))
console.log(removeInvalidParentheses(')()('))


/*
Solution:
1. Get number of possible removals for left and right. This is always going to
be constant for all solutions because the problem is trying to make the minimum number of
removals.

2. We are going to recurse through and use backtracking to figure out all possible solutions.
We keep track of the removal counts because if we are out of removes, we know not to create
a new recursion case where we remove ( or )

3. Base case is if we are at the end. Add to solution if the left and right counts are even.

4. If we encounter a ), we do two things:
If there is still room to remove, we recurse with a removal move.
If we have a greater number of ( vs ), we know this is a valid paren so far so we recurse and add ).

5. If we encounter a (, we do two things:
If we have room to remove (leftRemovalCount), we recurse with a removal move.
Since for (, we can't tell immediately if this is valid by checking the number of ), the only thing
we can do is recurse every time and add the left paren.

6. If normal character, recurse and add char to string.

*/