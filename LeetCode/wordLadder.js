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
  // Create a dictionary where the keys are possible words but with one letter starred and the keys are
  // the words in the wordList that can match up with that word.
  // ie   *ot': Set { 'hot', 'dot', 'lot' }
  // This allows us to quickly access the words we can add to the queue.
  const dict = {};
  wordList.forEach(word => {
    for (let i = 0; i < beginWord.length; ++i) {
      const newWord = word.slice(0, i) + '*' + word.slice(i + 1, beginWord.length);
      if (!dict[newWord])
        dict[newWord] = new Set();

      dict[newWord].add(word);
    }
  });


  let queue = new Queue();
  queue.enqueue({ word: beginWord, moves: 1 });

  const visited = new Set(beginWord);
  while (!queue.isEmpty()) {
    let item = queue.dequeue();

    // If the current word is equal to the endWord, we have reached a solution. Return the number
    // of moves it took to get there.
    if (item.word === endWord)
      return item.moves;

    // Otherwise, iterate through the wordList and see if the diff between two words is only 1.
    const words = new Set();
    for (let i = 0; i < beginWord.length; ++i) {
      const key = item.word.slice(0, i) + '*' + item.word.slice(i + 1, beginWord.length);
      const dictSet = dict[key];

      if (dictSet)
        dictSet.forEach(w => {
          if (!visited.has(w)) {
            queue.enqueue({ word: w, moves: item.moves + 1 });
            visited.add(w);
          }
        });
    }
  }

  return 0;
};


/*
Solution:
Create a dictionary where the keys are possible words but with one letter starred and the keys are
the words in the wordList that can match up with that word.
ie   *ot': Set { 'hot', 'dot', 'lot' }
This allows us to quickly access the words we can add to the queue.

BFS through using the dict. Use a visited set to mark off visited words.
*/

// console.log(numDifferences('doc','cog'))
console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"]))