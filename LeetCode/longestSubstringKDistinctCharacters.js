/*
https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (k === 0) return 0;
  let longest = 0;
  for (let i = 0; i < s.length; ++i) {
    let occurences = {};
    let curStr = '';
    let numUnique = 0;
    for (let j = i; j < s.length; ++j) {
      let curLetter = s[j];
      if (curLetter in occurences) {
        occurences[curLetter]++;
      }
      else {
        numUnique++;
        if (numUnique > k) {
          break;
        }
        occurences[curLetter] = 0;
      }
      curStr += curLetter;
      if (curStr.length > longest) {
        longest = curStr.length;
      }
    }
  }
  return longest;
};

// console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
// console.log(lengthOfLongestSubstringKDistinct("aa", 1));
// console.log(lengthOfLongestSubstringKDistinct("a", 0));
console.log(lengthOfLongestSubstringKDistinct("aba", 1));