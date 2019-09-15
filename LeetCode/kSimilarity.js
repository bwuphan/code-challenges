/*


Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two
letters in A exactly K times so that the resulting string equals B.

Given two anagrams A and B, return the smallest K for which A and B are K-similar.

Example 1:

Input: A = "ab", B = "ba"
Output: 1
Example 2:

Input: A = "abc", B = "bca"
Output: 2
Example 3:

Input: A = "abac", B = "baca"
Output: 2
Example 4:

Input: A = "aabc", B = "abca"
Output: 2
Note:

1 <= A.length == B.length <= 20
A and B contain only lowercase letters from the set {'a', 'b', 'c', 'd', 'e', 'f'}
*/



/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function(A, B) {
  let occurObjA = {};
  for (let i = 0; i < A.length; ++i) {
    const char = A[i];
    if (char in occurObjA) {
      occurObjA[char].add(i);
    }
    else {
      occurObjA[char] = new Set();
      occurObjA[char].add(i);
    }
  }

  let k = 0;
  for (let i = 0; i < A.length; ++i) {
    const charA = A[i];
    const charB = B[i];
    if (charA !== charB) {

    }
  }

};

console.log(kSimilarity("abc", "bca"));
// console.log(kSimilarity("abac", "baca"));