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



// Solution 2 with no sort.

var groupAnagrams = (strs) => {
  if (!strs || !strs.length)
    return [];


  const map = {};

  strs.forEach(str => {
    const occurArr = new Array(26);

    for (let i = 0; i < str.length; ++i) {
      const letter = str[i];
      const idx = letter.charCodeAt(0) - 97;

      occurArr[idx] ? occurArr[idx]++ : occurArr[idx] = 1;
    }

    const occurStr = occurArr.join(',');
    map[occurStr] ? map[occurStr].push(str) : map[occurStr] = [str];
  });

  const results = [];
  for (let key in map) {
    results.push(map[key]);
  }

  return results;
}

/*
Solution:

Create a map where the key is an occurences string. example: abc would be 1,1,1,....,0
and the value is an array of words that have the same occur string.

At the end, make an array and push the values in.
*/


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));