/*
https://leetcode.com/problems/longest-common-subsequence/

Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some
characters(can be none) deleted without changing the relative order of the remaining characters.
(eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is
a subsequence that is common to both strings.



If there is no common subsequence, return 0.



Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
*/


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const cache = [new Array(text2.length + 1).fill(0)];
  for (let i = 1; i < text1.length + 1; ++i) {
    cache.push([0].concat(new Array(text2.length)));
  }

  for (let i = 1; i < cache.length; ++i) {
    for (let j = 1; j < cache[0].length; ++j) {
      if (text1[i - 1] === text2[j - 1])
        cache[i][j] = cache[i][j] = cache[i - 1][j - 1] + 1;
      else
        cache[i][j] = Math.max(cache[i - 1][j], cache[i][j - 1]);
    }
  }
  return cache[text1.length][text2.length];
};



console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace") === 3);
console.log(longestCommonSubsequence(text1 = "abc", text2 = "abc") === 3);
console.log(longestCommonSubsequence(text1 = "abc", text2 = "def") === 0);
console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv") === 1);