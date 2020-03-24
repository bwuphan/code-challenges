/*
https://leetcode.com/problems/string-compression/

Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.


Follow up:
Could you solve it using only O(1) extra space?
*/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let lastChar = null;
  for (let i = 0; i < chars.length; ++i) {
    const curChar = chars[i];
    if (lastChar !== curChar) {
      let numLetters = 1;
      for (let j = i + 1; j < chars.length; ++j) {
        const innerCurChar = chars[j];
        if (innerCurChar === curChar)
          numLetters++;
        else
          break;
      }
      if (numLetters > 1) {
        const numLettersArr = `${numLetters}`.split('');
        // Use apply for cases like '12' since it has to be set as '1', '2'.
        chars.splice.apply(chars, [i + 1, numLetters - 1].concat(numLettersArr));
        i++;
      }
    }
    lastChar = curChar;
  }
  return chars.length;
};
/*
Solution:
Have outer loop and inner loop that starts the search for the number of same characters when the
character changes.
*/