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
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  let left, right = null;

  if (s.length % 2 === 0) {
    left = s.length / 2 - 1;
    right = left + 1;
  }
  else {
    left = Math.floor(s.length / 2) - 1;
    right = left + 2;
  }

  // If left is less than 0, we are done.
  while (left >= 0) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }

    left--;
    right++;
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
      const leftRemoved = s.slice(i + 1, s.length - i);
      const rightRemoved = s.slice(i, s.length - i - 1);
      return isPalindrome(leftRemoved) || isPalindrome(rightRemoved);
    }
  }
  return true;
};


console.log(validPalindrome('aba'));
console.log(validPalindrome('abbbaca'));
console.log(validPalindrome('deeeee'));