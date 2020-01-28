/*
https://leetcode.com/problems/minimum-window-substring/

Share
Given a string S and a string T, find the minimum window in S which will contain all the characters
in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum
 window in S.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left, right = 0;

  let solution = {};
  for (let i = 0; i < t.length; ++i) {
    const letter = t[i];
    if (letter in solution) solution[letter]++;
    else solution[letter] = 1;
  }
  console.log(solution);

  for (let i = 0; i < s.length; ++i) {

  }
};

function check()


console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"));