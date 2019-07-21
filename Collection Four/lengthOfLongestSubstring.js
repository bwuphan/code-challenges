/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = '';
  for (let i = 0; i < s.length; ++i) {
    if (longest.length > s.slice(i, s.length).length) {
      return longest.length;
    };
    let strLetters = {};
    strLetters[s[i]] = true;

    let longestCur = s[i];
    for (let j = i + 1; j < s.length; ++j) {
      if (s[j] in strLetters) {
        break;
      } else {
        longestCur += s[j];
        strLetters[s[j]] = true;
      }
    }

    if (longestCur.length > longest.length) {
      longest = longestCur;
    }
  }
  return longest.length;
};