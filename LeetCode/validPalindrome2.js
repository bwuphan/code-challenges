/*
https://leetcode.com/problems/valid-palindrome-ii/

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a
palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s, left, right) {
  // If left is less than 0, we are done.
  while (left <= right) {
    if (s.charAt(left) !== s.charAt(right))
      return false;

    left++;
    right--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  for (let i = 0; i < Math.floor(s.length / 2); ++i) {
    if (s[i] !== s[s.length - i - 1]) {
      const leftRemoved = isPalindrome(s, i + 1, s.length - i - 1, s.length / 2 % 2 === 0);
      const rightRemoved = isPalindrome(s, i, s.length - i - 2, s.length / 2 % 2 === 0);
      return leftRemoved || rightRemoved;
    }
  }
  return true;
};

/*
Solution:

*/

console.log(validPalindrome('aba'));
console.log(validPalindrome('abbbaca'));
console.log(validPalindrome('deeeee'));
