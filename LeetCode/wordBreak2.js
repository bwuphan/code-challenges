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
  const memo = {};
  const wordDictSet = new Set();
  wordDict.forEach(word => wordDictSet.add(word));

  const recurse = (str) => {
    const strArray = [];

    if (str.length === 0)
      return [];

    if (str in memo)
      return memo[str];

    if (wordDictSet.has(str)) {
      if (!memo[str])
        memo[str] = [str];
      strArray.push(str);
    }

    wordDict.forEach(word => {
      if (str.indexOf(word) === 0) {
        const slicedStr = str.slice(word.length, str.length);
        recurse(slicedStr)
          .forEach(subStr => strArray.push(`${word} ${subStr}`));
      }
    });
    memo[str] = strArray;
    return strArray;
  }

  recurse(s);
  return memo[s] ? memo[s] : [];
};

// console.log(wordBreak(s = "catsanddog", wordDict = ["cat", "cats", "and", "sand", "dog"]));
// console.log(wordBreak(s = "pineapplepenapple", wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]));
// console.log(wordBreak(s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak("a", ["a"]))
console.log(wordBreak("aaaaaaa",["aaaa","aa","a"]))