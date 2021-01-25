/*

Given an input string (s) and a pattern (p), implement regular expression matching with support
for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).



Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a'
once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Example 5:

Input: s = "mississippi", p = "mis*is*p*."
Output: false


Constraints:

0 <= s.length <= 20
0 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character
to match.
*/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!s && !p) return true;
  // Cache results in here
  const cache = {};

  const recurse = (s, p) => {
    if (`${s},${p}` in cache) return cache[`${s},${p}`]

    // If there is no pattern left, it is only valid if also no string left.
    if (!p) return !s

    // Boolean to tell if there is a match between characters (or .).
    const firstMatch = s && (s[0] === p[0] || p[0] === '.');

    // Boolean to tell if second char is a *
    const star = (p.length >= 2 && p[1] && p[1] === '*') ? true : false;

    let hasMatch = false;
    // If second character is a star, we need to go through 2 paths.
    // 1. Since star means 0 - infinite, first case is delete the part of the pattern.
    // 2. Characters match so we remove a character from the string instead.
    if (star)
      hasMatch = recurse(s, p.slice(2)) || (firstMatch && recurse(s.slice(1), p));
    // Else it's not a star so it's simple. If there is a match, remove a char
    // from both string and pattern.
    else
      hasMatch = firstMatch && recurse(s.slice(1), p.slice(1));

    // Set the result in the cache.
    cache[`${s},${p}`] = hasMatch;
    return hasMatch;
  }

  recurse(s, p);

  return matches[`${s},${p}`] || false
};

// console.log(isMatch('aa', 'a'))
// console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch("aa", "a*"))
// console.log(isMatch('mississippi', 'mis*is*p*.'))
console.log(isMatch("ab", ".*c"))
console.log(isMatch("", ""))