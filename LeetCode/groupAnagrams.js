/*
https://leetcode.com/problems/group-anagrams/

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const strMap = strs.map(str => {
    return { word: str, sortedWord: str.split('').sort().join('') }
  });

  const countObj = strMap.reduce((countObj, wordObj) => {
    if (!(wordObj.sortedWord in countObj)) {
      countObj[wordObj.sortedWord] = [wordObj.word];
    }
    else {
      countObj[wordObj.sortedWord].push(wordObj.word);
    }
    return countObj;
  }, {});

  let results = [];

  for (let word in countObj) {
    results.push(countObj[word]);
  }

  return results;
};