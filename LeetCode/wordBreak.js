/*
https://leetcode.com/problems/word-break/

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

*/


// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//   if (wordDict.length === 0) return false;
//   if (wordDict.length === 1) return s === wordDict[0];

//   let queue = ['']; // Create a queue to determine what to evaluate.
//   let memo = new Map(); // Memo to tell if a word has already been processed.
//   while (queue.length > 0) {
//     const val = queue.shift(); // Pop it off the queue.

//     // Loop through word dictionary.
//     for (let word of wordDict) {
//       // Search word is the popped off val plus the current selected word.
//       // Ex: val = 'applepen', word = 'apple' so searchWord = 'applepenapple'
//       const searchWord = `${val}${word}`;

//       // startsWith is a boolean seeing if s starts with the current searchWord.
//       const startsWith = s.indexOf(searchWord) === 0;

//       // If searchWord and s are the same, we are done and we return true.
//       if (searchWord === s) return true;

//       // If startsWith is true and also the searchWord has yet to be processed, set to memo
//       // and push to queue.
//       else if (!memo.has(searchWord) && startsWith) {
//         memo.set(searchWord, true);
//         queue.push(searchWord);
//       }
//     }
//   }

//   return false;
// };

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (wordDict.length === 0) return false;
  if (wordDict.length === 1) return s === wordDict[0];

  const dp = {};
  const visited = new Set();
  const wordDictSet = new Set(wordDict);

  const populateDp = (subStr) => {
    if (visited.has(subStr)) return;
    if (subStr.length === 0)
      return true;

    if (subStr in dp)
      return dp[subStr];

    visited.add(subStr);

    for (let i = 0; i < wordDict.length; ++i) {
      const word = wordDict[i];
      // If the word is found at the front, break it down.
      if (subStr.indexOf(word) === 0) {
        const slicedStr = subStr.slice(word.length, subStr.length);

        const result = populateDp(slicedStr);

        if (result) {
          dp[subStr] = true;

         return true;
        }
      }
    }
    return false;
  }

  populateDp(s);

  return !!dp[s];
};

/*
Solution:

Do bottom up dp.

Loop through dictionary and see if that word exists at the front of the remaining word.

If it does, break it down further and if the result of recursion is true, set subStr to
true in dp object.

At the end, see if original word is in dp.

*/



console.log(wordBreak('leetcode', ["leet", "code"]))
console.log(wordBreak('applepenapplepenapplepenpen', ["apple", "pen"]))
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]))


  console.log(wordBreak('ccbb', ["bc", "cb"]))

  // console.log('sleetcode'.slice(0,1))