/*
https://leetcode.com/problems/word-break-ii/

Given a non-empty string s and a dictionary wordDict containing a list of non-
empty words, add spaces in s to construct a sentence where each word is a valid
dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  // Dynamic programming Memoization obj to keep track of past results.
  const dpObj = {};

  // Create a set to find a word in O(1) time in the wordDict.
  const wordDictSet = new Set();
  wordDict.forEach(word => wordDictSet.add(word));

  // Populate the dp obj.
  const populateDp = (subStr) => {
    const breakdownSubStr = [];

    // If there is no more substr, return the empty array.
    if (subStr.length === 0)
      return breakdownSubStr;

    // If we have already computed the sub problem, return the computed result.
    if (subStr in dpObj)
      return dpObj[subStr];

    // If the subStr is contained in wordDictSet push to the array but don't return
    // because of cases where subStr = 'aaaa' and we have 'a' and 'aaaa' in the dict.
    // We need to keep breaking it down.
    if (wordDictSet.has(subStr))
      breakdownSubStr.push(subStr);

    // Loop through wordDict.
    wordDict.forEach(word => {
      // If the first part of the subStr contains the word.
      if (subStr.indexOf(word) === 0) {
        // Slice out the word out of the beginning of the subStr.
        const slicedStr = subStr.slice(word.length, subStr.length);
        // Get the results of the breakdown of the sliced string.
        populateDp(slicedStr)
          // Loop through and add the word to the beginning of the broken down subStr array.
          .forEach(subStr => breakdownSubStr.push(`${word} ${subStr}`));
      }
    });
    dpObj[subStr] = breakdownSubStr;
    return breakdownSubStr;
  }

  populateDp(s);
  return dpObj[s] ? dpObj[s] : [];
};


/*
  Solution:
  We are going to dp bottom up by recursing to the bottom and solving the bottom subproblems.
  Along the way, we populate the dpObj until we have the answer for s in the dpObj.
*/
// console.log(wordBreak(s = "catsanddog", wordDict = ["cat", "cats", "and", "sand", "dog"]));
// console.log(wordBreak(s = "pineapplepenapple", wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]));
// console.log(wordBreak(s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak("a", ["a"]))
console.log(wordBreak("aaaaaaa",["aaaa","aa","a"]))