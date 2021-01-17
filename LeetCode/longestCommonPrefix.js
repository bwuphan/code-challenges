/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // Base cases.
  if (!strs || !strs.length) return '';
  if (strs.length === 1) return strs[0];
  if (!strs[0].length) return '';

  // Loop through characters in strs[0]. We can just pick any str since they all have to have
  // matches (all or nothing)
  for (let i = 0; i < strs[0].length; ++i) {
    const char = strs[0][i];

    // Loop throough other strings in list
    for (let j = 0; j < strs.length; ++j) {
      const str = strs[j];
      // If we found a non match, return this substr
      if (char !== str[i]) return strs[0].substring(0, i) || '';
    }
  }

  // If we made it to the end that means strs[0] fully matches all other strings.
  return strs[0];
};

/*
Vertically scan all words one character by one to see if there is a match.

*/

// console.log(longestCommonPrefix(["flower","flow","flight"]))

// console.log(longestCommonPrefix(["dog","racecar","car"]))

console.log(longestCommonPrefix(["",""]))