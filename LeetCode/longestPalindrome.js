/*
https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, find the longest palindromic substring in s. You may assume
that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';

  var centeredPalindrome = function(left, right) {
    let palindrome = '';
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      palindrome = s.slice(left, right + 1);
      left--;
      right++;
    }

    return palindrome;
  }

  for (let i = 0; i < s.length; ++i) {
    let oddPalindrome = centeredPalindrome(i - 1, i + 1) || s[i];
    let evenPalindrome = centeredPalindrome(i, i + 1) || s[i];

    if (oddPalindrome.length > longest.length) longest = oddPalindrome;
    if (evenPalindrome.length > longest.length) longest = evenPalindrome;
  }

  return longest;
};


console.log(longestPalindrome('abba'));
console.log(longestPalindrome('racecar'));
console.log(longestPalindrome("abccccdd"));