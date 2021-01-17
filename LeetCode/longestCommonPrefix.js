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
  if (!strs || !strs.length)
    return '';
  if (strs.length === 1)
    return strs[0];

  let longest = '';

  for (let i = 0; i < Math.min(strs[0].length, strs[1].length); ++i) {
    if (strs[0][i] === strs[1][i])
      longest += strs[0][i];
    else
      break;
  }

  if (!longest)
    return '';

  if (strs.length === 2)
    return longest;

  for (let i = 2; i < strs.length; ++i) {
    const str = strs[i];

    let newLongest = '';
    for (let j = 0; j < Math.min(str.length, longest.length); ++j) {
      if (str[j] === longest[j])
        newLongest += str[j]
    }

    longest = newLongest;
  }

  return longest
};


console.log(longestCommonPrefix(["flower","flow","flight"]))

console.log(longestCommonPrefix(["dog","racecar","car"]))
