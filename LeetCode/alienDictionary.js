/*
https://leetcode.com/problems/alien-dictionary/

There is a new alien language which uses the latin alphabet. However, the order among letters are
unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted
lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"
Example 3:

Input:
[
  "z",
  "x",
  "z"
]

Output: ""

Explanation: The order is invalid, so return "".
Note:

You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/

function alienOrder(words) {
  var graph = {};
  words.forEach(w => w.split('').forEach(ch => graph[ch] = new Set()));
  words.reduce((prev, curr) => {
    for (var i = 0; i < Math.min(prev.length, curr.length); i++) {
      if (prev[i] !== curr[i]) {
        graph[prev[i]].add(curr[i]);
        break;
      }
    }
    return curr;
  });

  var marked = {}, visited = {};
  var str = '';
  var hasCycle = false; // If there is a cycle, it is impossible.

  Object.keys(graph).map(visit);
  return hasCycle ? '' : str;

  function visit(n) {
    if (marked[n]) return;

    if (visited[n]) {
      hasCycle = true;
      return;
    }

    visited[n] = true;
    graph[n].forEach(visit);
    marked[n] = true;
    str = n + str;
  }
}

// const Graph = require('../Prototypes/Graph.js').Graph;
// const Stack = require('../Prototypes/Stack.js').Stack;

// /**
//  * @param {string[]} words
//  * @return {string}
//  */
// var alienOrder = function(words) {
//   let lettersObj = {};
//   let lettersArr = [];

//   words.forEach(word => {
//     for (let i = 0; i < word.length; ++i) {
//       const letter = word[i];
//       if (!(letter in lettersObj)) {
//         lettersObj[letter] = true;
//         lettersArr.push(letter);
//       }
//     }
//   });

//   let graph = new Graph();
//   lettersArr.forEach(letter => {
//     graph.addNode(letter);
//   });

//   graph.log();

//   let visited = {};
//   let order = new Stack();

//   // words.forEach(wor)
//   for (let i = 1; i < words.length; ++i) {
//     const word1 = words[i - 1];
//     const word2 = words[i];

//     for (let j = 0; j < word1.length && j < word2.length; ++j) {
//       let char1 = word1[j];
//       let char2 = word2[j];
//       if (char1 !== char2) {
//         graph.addEdge(char1, char2);
//         break;
//       }
//     }
//   }

//   graph.log();
//   graph.topologicalSort();
// };


var input = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
];

var input2 =
[
  "z",
  "x"
]

var input3 =
[
  "z",
  "x",
  "z"
]


console.log(alienOrder(input));
console.log(alienOrder(input2));
console.log(alienOrder(input3));
