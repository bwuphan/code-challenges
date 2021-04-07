/*
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to 
such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  // Create and populate alphaMap with s
  const alphaMap = Array(26);
  for (let i = 0; i < s.length; ++i) {
    const idx = s.charCodeAt(i) - 97;
    alphaMap[idx] ? alphaMap[idx]++ : alphaMap[idx] = 1;
  }

  // Update alphaMap by decrementing when chars match from s and t
  for (let i = 0; i < t.length; ++i) {
    const idx = t.charCodeAt(i) - 97;

    if (alphaMap[idx]) alphaMap[idx]--;
    // Else if this letter doesn't appear in s, we can return false and stop right here
    else if (alphaMap[idx] === undefined) return false;
  }

  // Loop through and check if any elements remain
  for (let i = 0; i < 26; ++i)
    if (alphaMap[i]) return false;

  // If no returns yet, we have an anagram
  return true;
};

// console.log(isAnagram(s = "anagram", t = "nagaram"))
console.log(isAnagram(s = "rat", t = "car"))
