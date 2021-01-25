/*
https://leetcode.com/problems/group-shifted-strings/

Given a string, we can "shift" each of its letter to its successive letter,
for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of non-empty strings which contains only lowercase alphabets, group all strings that
belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output:
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
*/


/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  if (!strings || !strings.length) return [];

  const map = {};

  // Method for adding strings/patterns to the map
  const addToMap = (pattern, string) => {
    if (!(pattern in map)) map[pattern] = [string];
    else map[pattern].push(string);
  }

  strings.forEach(str => {
    if (!str) {
      addToMap('', str);
      return;
    }
    if (str.length === 1) {
      addToMap('1', str);
      return;
    }

    let shifts = '';

    // We're going to loop through characters in the string and get the gaps
    // between their letters and then add it to the map.
    for (let i = 1; i < str.length; ++i) {
      const prev = str.charCodeAt(i - 1);
      const cur = str.charCodeAt(i);
      // We do this logic to get around the wrap around. This way, az, ba
      // are both treated as 25.
      shifts += `${(26 + cur - prev) % 26},`
      const gap = (26 + cur - prev) % 26
    }

    addToMap(shifts, str);
  });

  const results = [];
  for (const pattern in map) results.push(map[pattern]);

  return results;
};

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]))
