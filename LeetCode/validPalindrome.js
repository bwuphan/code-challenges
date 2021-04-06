/*
https://leetcode.com/problems/valid-palindrome/

Given a string, determine if it is a palindrome, considering only alphanumeric characters and
ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
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


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("aa"));