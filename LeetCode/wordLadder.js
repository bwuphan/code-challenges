/*
https://leetcode.com/problems/word-ladder/

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest
transformation sequence from beginWord to endWord, such that:

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
  // BFS
  let queue = new Queue();
  queue.enqueue({ word: beginWord, moves: 1, wordList });

  while (!queue.isEmpty()) {
    let item = queue.dequeue();

    // If the current word is equal to the endWord, we have reached a solution. Return the number
    // of moves it took to get there.
    if (item.word === endWord)
      return item.moves;

    // Otherwise, iterate through the wordList and see if the diff between two words is only 1.
    wordList.forEach(word => {
      if (numDifferences(item.word, word) === 1) {
        // Filter out the used word out of the new wordList.
        wordList = wordList.filter(w => w !== word);
        queue.enqueue({ word, moves: item.moves + 1, wordList });
      }
    });
  }

  return 0;
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