/*
https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = {};
  let numDistinct = 0;
  let longest = 0;
  let l = 0; // left pointer
  let r = 0; // right pointer

  while (r < s.length) {
    const right = s[r];
    // If the right char is in map, we don't have to increase numDistinct
    if (right in map)
      map[right]++;
    else {
      map[right] = 1;
      numDistinct++;

      // Move left pointer until numDistinct is <= k
      while (numDistinct > k) {
        const left = s[l];

        map[left]--;
        if (map[left] <= 0) {
          numDistinct--;
          delete map[left];
        }
        l++;
      }
    }

    if ((r - l + 1) > longest)
      longest = r - l + 1;
    r++;
  }

  return longest;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
console.log(lengthOfLongestSubstringKDistinct("aa", 1));
console.log(lengthOfLongestSubstringKDistinct("a", 0));
console.log(lengthOfLongestSubstringKDistinct("aba", 1));

/*
Solution:

Use sliding window.
Keep a map of all the characters.
If the number of distinct characters is ever greater than k, move the left pointer until valid.
*/