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

  const solutionDict = {};
  const actionDict = {};
  for (let i = 0; i < t.length; ++i) {
    const c = t[i];
    if (!(c in actionDict))
      actionDict[c] = 0;

    if (!(c in solutionDict))
      solutionDict[c] = 1;
    else
      solutionDict[c]++;
  }

  let missingLetter = null;
  let smallestStr = null;
  for (left = 0, right = 0; right < s.length; ++right) {
    const char = s[right];
    if (char in actionDict)
      actionDict[char]++;

    if (char === missingLetter || checkSolution(actionDict, solutionDict)) {
      missingLetter = null;
      while (!missingLetter) {
        const leftChar = s[left];
        if (leftChar in solutionDict)
          missingLetter = leftChar;
        left++;
      }
      if (smallestStr === null || (right - left) < smallestStr.length)
        smallestStr = s.slice(left - 1, right + 1)
      actionDict[missingLetter]--;
    }
  }
  left--;
  actionDict[s[left]]++;
  console.log(actionDict);
  while (left < right) {
    console.log(left);
    const leftChar = s[left];
    if (leftChar in actionDict)
      actionDict[leftChar]--;
    console.log(actionDict);
    if (checkSolution(actionDict, solutionDict))
      left++;
    else
      break;
  }

  return s.slice(left, right);
};

function checkSolution(actionDict, solutionDict) {
  for (let key in solutionDict) {
    if (actionDict[key] < solutionDict[key])
      return false;
  }

  return true;
}


console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"));
console.log(minWindow(s = "BBA", t = "AB"));