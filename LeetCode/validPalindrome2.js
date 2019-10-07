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
  console.log(s);
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


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let sArr = s.toLowerCase().split('').filter(char => char.match(/^[0-9a-z]+$/));

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (sArr[left] !== sArr[right]) {
      let unshift = sArr.slice(left, right + 1);
      unshift.unshift();
      let pop = sArr.slice(left, right + 1);
      pop.pop();
      console.log(unshift, pop);
      return (isPalindrome(unshift.join('')) || isPalindrome(pop.join('')));
    }

    left++;
    right--;
  }
  return true;
};


console.log(validPalindrome('aba'));
console.log(validPalindrome('abbbaca'));