
/*
https://leetcode.com/problems/word-ladder-ii/

Given two words (beginWord and endWord), and a dictionary's word list, find all shortest
transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

const Queue = require('../Prototypes/Queue.js').Queue;
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
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
  queue.enqueue({ word: beginWord, moves: 1, list: beginWord });
  const results = [];
  const visited = new Set(beginWord);
  let minMoves = null;
  while (!queue.isEmpty()) {
    let item = queue.dequeue();
    visited.add(item.word);
    if (minMoves && item.moves > minMoves) {
      break;
    }

    // If the current word is equal to the endWord, we have reached a solution. Return the number
    // of moves it took to get there.
    if (item.word === endWord) {
      minMoves = item.moves;
      results.push(item.list);
    }

    // Otherwise, iterate through the wordList and see if the diff between two words is only 1.
    const words = new Set();
    for (let i = 0; i < beginWord.length; ++i) {
      const key = item.word.slice(0, i) + '*' + item.word.slice(i + 1, beginWord.length);
      const dictSet = dict[key];

      if (dictSet)
        dictSet.forEach(w => {
          if (!visited.has(w)) {
            queue.enqueue({ word: w, moves: item.moves + 1, list: item.list + ',' + w });
          }
        });
    }
  }

  return results.map(sol => sol.split(','));
};

console.log(findLadders(beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]))


console.log(findLadders(beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log"]))

console.log(findLadders("qa",
"sq",
["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))