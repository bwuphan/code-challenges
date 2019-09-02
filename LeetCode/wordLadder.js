/*
https://leetcode.com/problems/word-ladder/

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0
*/

const Queue = require('../Prototypes/Queue.js').Queue;
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let queue = new Queue();
  let item = {word: beginWord, num: 1, wordList };
  queue.enqueue(item);
  let solutions = [];

  while(!queue.isEmpty()) {
    item = queue.dequeue();

    // If the item word is the same as the endWord, we found a solution.
    if (item.word === endWord) {
      solutions.push(item);
      break;
    }

    // Iterate through possible next words.
    wordList.forEach(word => {
      // If the number of differences between words is 1, then we found a possible path.
      if (numDifferences(item.word, word) === 1) {
        // Filter out the word out of the wordList.
        wordList = wordList.filter(w => w !== word);

        // Add item to the queue.
        queue.enqueue({ word, num: item.num + 1, wordList});
      }
    });
  }

  let minNum = null;
  solutions.forEach(item => {
    // If minNum is null or the items num is less than minNum, we have a new minNum.
    if (!minNum || item.num < minNum) {
      minNum = item.num;
    }
  });

  return minNum || 0;
};

function numDifferences(str1, str2) {
  let numDifferences = 0;
  for (let i = 0; i < str1.length; ++i) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (char1 !== char2) {
      numDifferences++;
    }
  }
  return numDifferences;
}

// console.log(numDifferences('doc','cog'))
console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"]))