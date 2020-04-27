
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
  if (wordList.indexOf(endWord) === -1 && wordList.indexOf(beginWord) === -1)
    return [];

  let queue = new Queue();
  queue.enqueue({ word: beginWord, moves: 1, usedWords: new Set(), path: beginWord });

  const solutions = [];
  let minMoves = null;
  while (!queue.isEmpty()) {
    const item = queue.dequeue();

    if (item.word === endWord) {
      if (!minMoves || item.moves <= minMoves) {
        solutions.push(item.path.split(','));
        minMoves = item.moves;
      }
    }
    else {
      wordList.forEach(word => {
        if (!item.usedWords.has(word) && numDifferences(item.word, word) === 1) {
          const usedWords = new Set(item.usedWords);
          usedWords.add(word);
          queue.enqueue({ word, moves: item.moves + 1, usedWords, path: `${item.path},${word}`});
        }
      });
    }
  }

  return solutions.filter(solution => solution.length === minMoves);
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

// console.log(findLadders(beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]))


// console.log(findLadders(beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log"]))

console.log(findLadders("qa",
"sq",
["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))