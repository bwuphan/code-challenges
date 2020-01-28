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
  let sArr = s.toLowerCase().split('').filter(char => char.match(/^[0-9a-z]+$/));

  let left, right = null;

  if (sArr.length % 2 === 0) {
    left = sArr.length / 2 - 1;
    right = left + 1;
  }
  else {
    left = Math.floor(sArr.length / 2) - 1;
    right = left + 2;
  }

  // If left is less than 0, we are done.
  while (left >= 0) {
    if (sArr[left] !== sArr[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
};


// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("racecar"));
console.log(isPalindrome("aa"));