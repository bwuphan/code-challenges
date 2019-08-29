/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations
that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that
1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order
you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let phoneMap = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
  }
  let results = [];

  const addToString = function(string, index) {
    const letterArr = phoneMap[digits[index]];

    for(let i = 0; i < letterArr.length; ++i) {
      const curLetter = letterArr[i];
      const newString = string + curLetter;
      if (newString.length === digits.length) {
        results.push(newString);
      }
      else {
        addToString(newString, index + 1);
      }
    }
  }
  addToString('', 0);
  return results;
};

console.log(letterCombinations(""));