/*
https://leetcode.com/problems/find-all-anagrams-in-a-string/

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not
be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const pMap = new Map(); // Create map for solution or p substring.
  let slidingWindow = new Map(); // Create initial sliding window.
  for (let i = 0; i < p.length; ++i) {
    const curLetterP = p[i];
    if (pMap.has(curLetterP)) pMap.set(curLetterP, pMap.get(curLetterP) + 1);
    else pMap.set(curLetterP, 1);

    const curLetterS = s[i];
    if (slidingWindow.has(curLetterS)) slidingWindow.set(curLetterS, slidingWindow.get(curLetterS) + 1);
    else slidingWindow.set(curLetterS, 1);
  }

  let results = []; // Results array to store indices.

  // If pMap matches init sliding window, 0 is a solution.
  if (compareMaps(pMap, slidingWindow)) results.push(0);

  // Start at index 1 and go until the end of the s string but minus the length of the p string.
  for (let i = 1; i < (s.length - p.length + 1); ++i) {
    const prevLetter = s[i - 1];
    const curLastLetter = s[i + p.length - 1];

    // Remove the previous letter from the sliding window.
    slidingWindow.set(prevLetter, slidingWindow.get(prevLetter) - 1);
    if (slidingWindow.get(prevLetter) === 0) {
      slidingWindow.delete(prevLetter);
    }

    // Add the current new last letter to the sliding window.
    const numCurLastLetter = slidingWindow.get(curLastLetter) || 0;
    slidingWindow.set(curLastLetter, numCurLastLetter + 1);

    // If the pMap and sliding window are the same, we have a solution.
    if (compareMaps(pMap, slidingWindow)) {
      results.push(i);
    }
  }
  return results;
};

// Compare two maps. Return true if they match.
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  let match = true;

  map1.forEach((value, key) => {
    if (value !== map2.get(key)) {
      match = false;
    }
  });

  return match;
}

console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab"))
console.log(findAnagrams("", "a"))