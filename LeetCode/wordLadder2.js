
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
    const wordSet = new Set(wordList);
    wordSet.add(beginWord);

    if (!wordSet.has(endWord)) return [];

    const distanceMap = new Map();
    const wordMap = new Map();

    // 1. BFS construct distanceMap and wordMap from end to start
    const queue = [];
    const visited = new Set();

    // Flag to check if we can reach start from end
    let reached = false;

    queue.push(endWord);
    visited.add(endWord);
    let distance = 0;
    distanceMap.set(endWord, distance);
    while(queue.length !== 0) {
        let size = queue.length;
        distance++;
        for(let i = 0; i < size; i++) {
            const word = queue.shift();
            for(let w of getNextWords(word, wordSet)) {
                // push into wordMap from start to end
                // we need to push here before visited check
                if (!wordMap.has(w)) wordMap.set(w, []);
                wordMap.get(w).push(word);

                if (visited.has(w)) continue;
                if (w === beginWord) reached = true;

                // put into distance map
                distanceMap.set(w, distance);

                queue.push(w);
                visited.add(w);
            }
        }
    }

    // short circuit if can not reach
    if (!reached) return [];

    // 2. DFS find path where distance - 1
    const result = [];
    dfs(result, [beginWord], beginWord, endWord, wordMap, distanceMap);

    return result;
};

var dfs = function(result, tmpPath, word, endWord, wordMap, distanceMap) {
    if (word === endWord) {
        result.push([...tmpPath]);
        return;
    }

    for (let nextWord of wordMap.get(word)) {
        if (distanceMap.get(word) === distanceMap.get(nextWord) + 1) {
            tmpPath.push(nextWord);
            dfs(result, tmpPath, nextWord, endWord, wordMap, distanceMap);
            tmpPath.pop();
        }
    }
}

var getNextWords = function(word, wordSet) {
    const result = [];
    for (let i = 0; i < word.length; i++) {
        let currentCode = word.charCodeAt(i);
        for (let c = 97; c <= 122; c++) {
            if (c !== currentCode) {
                const chars = word.split('');
                chars[i] = String.fromCharCode(c);
                let newWord = chars.join('');
                if (wordSet.has(newWord)) {
                    result.push(newWord);
                }
            }
        }
    }

    return result;
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