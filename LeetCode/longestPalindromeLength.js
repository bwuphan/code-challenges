/*
https://leetcode.com/problems/longest-palindrome/

Given a string which consists of lowercase or uppercase letters, find the length of the longest
palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  /* Create map of letters.
   * Loop through string and set number of occurences of letters in map.
   * If we add a letter occurence and it is not even, we found a pair and this means we can add 2 to
   * the palindrome length.
   * Once we get to the end, if the palindrome length is even and we still have letters left, we can
   * theoretically put any remaining letter in the center to add to our palindrome length.
   */
  const lMap = new Map();

  let palindromeLength = 0;

  for (let i = 0; i < s.length; ++i) {
    const curLetter = s[i];

    if (!lMap.has(curLetter)) {
      lMap.set(curLetter, 1);
    }
    else {
      const numOccurences = lMap.get(curLetter);

      if (numOccurences % 2 !== 0) {
        palindromeLength += 2;
      }

      lMap.set(curLetter, numOccurences + 1);
    }
  }

  if (palindromeLength % 2 === 0 && palindromeLength < s.length) {
    palindromeLength++;
  }

  return palindromeLength;
};

console.log(longestPalindrome("abccccdd"))