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
  if (s.length === 0 || t.length === 0)
    return '';

  let l = 0, r = 0;
  let answerMap = new Map();
  const windowCount = {};
  for (let i = 0; i < t.length; ++i) {
    const char = t[i];
    const num = answerMap.get(char);
    if (num)
      answerMap.set(char, num + 1);
    else
      answerMap.set(char, 1);

    windowCount[char] = 0;
  }

  const required = answerMap.size;
  let formed = 0;

  let answerL = null;
  let answerR = null;
  let hasAnswer = false;

  while (r < s.length) {
    const char = s[r];
    if (char in windowCount) {
      windowCount[char]++;
      if (windowCount[char] === answerMap.get(char))
        formed++;
    }

    if (formed === required) {
      hasAnswer = true;
      if (answerL === null && answerR === null) {
        answerL = l;
        answerR = r;
      }
      while (l <= r && formed === required) {
        if ((r - l) < (answerR - answerL)) {
          answerL = l;
          answerR = r;
        }
        const lChar = s[l];
        if (lChar in windowCount) {
          windowCount[lChar]--;
          if (windowCount[lChar] < answerMap.get(lChar))
            formed--;
        }
        l++;
      }
    }
    r++;
  }

  return hasAnswer ? s.slice(answerL, answerR + 1) : '';
};








minWindow = (s, t) => {
  if (s.length === 0 || t.length === 0)
    return '';

  let l = 0, r = 0;

  const solDict = new Map();
  const actDict = {};
  for (let i = 0; i < t.length; ++i) {
    const char = t[i];
    const num = solDict.get(char);

    if (num)
      solDict.set(char, num + 1);
    else
      solDict.set(char, 1);

    actDict[char] = 0;
  }

  let formed = 0;
  const required = solDict.size;

  let idxL = null;
  let idxR = null;

  while (r < s.length) {
    const rChar = s[r];
    if (rChar in actDict) {
      actDict[rChar]++;

      if (actDict[rChar] === solDict.get(rChar))
        formed++;
      console.log(formed, actDict, solDict);
      if (formed === required) {
        if (idxL === null && idxR === null) {
          idxR = r;
          idxL = l;
        }

        while (l < r && formed === required) {
          const lChar = s[l];
          if ((r - l) < (idxR - idxL)) {
            idxL = l;
            idxR = r;
          }
          if (lChar in actDict && actDict[lChar] > 0) {
            actDict[lChar]--;
            if (actDict[lChar] < solDict.get(lChar))
              formed--;
          }

          l++;
        }
      }
    }

    r++;
  }

  console.log(idxL, idxR);

  return s.slice(idxL, idxR + 1);
}

console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"));
console.log(minWindow(s = "BBA", t = "BA"));
console.log(minWindow(s = "A", t = "A"));