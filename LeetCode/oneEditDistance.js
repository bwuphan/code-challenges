/*
https://leetcode.com/problems/one-edit-distance/

Given two strings s and t, determine if they are both one edit distance apart.

Note:

There are 3 possiblities to satisify one edit distance apart:

Insert a character into s to get t
Delete a character from s to get t
Replace a character of s to get t
Example 1:

Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.
Example 2:

Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.
Example 3:

Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if (s === t) return false;

  const diffLength = s.length - t.length;

  if (diffLength > 1 || diffLength < -1) return false;


  for (let i = 0; i < Math.max(s.length, t.length); ++i) {
    if (s[i] !== t[i]) {
      if (diffLength === 0) {
        s = s.slice(0, i) + t[i] + s.slice(i + 1, s.length);
      }
      else if (diffLength === 1) {
        s = s.slice(0, i) + s.slice(i + 1, s.length);
      }
      else if (diffLength === -1) {
        s = s.slice(0, i) + t[i] + s.slice(i, s.length);
      }

      // If strings are equal, then we are good, else it is not possible.
      if (s === t) return true;
      else return false;
    }
  }
};

console.log(isOneEditDistance(s = "ab", t = "acb"));
console.log(isOneEditDistance(s = "cab", t = "ad"));
console.log(isOneEditDistance(s = "1203", t = "1213"));