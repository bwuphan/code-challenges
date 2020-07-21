/*
https://leetcode.com/problems/word-search-ii/

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells
are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.



Example:

Input:
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]


Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.
*/

class Node {
  constructor(letter, endOfWord) {
    this.letter = letter;
    this.children = new Map();
    this.endOfWord = endOfWord;
    this.wordOccurences = {};
  }

  getLetter() {
    return this.letter;
  }


  addChild(node) {
    this.children.set(node.getLetter(), node);
  }

  getChild(letter) {
    return this.children.get(letter);
  }
}


class Trie {
  constructor() {
    // Init root to an empty node.
    this.root = new Node(null, false);
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curNode = this.root;

    for (let i = 0; i < word.length; ++i) {
      const letter = word[i];

      const curNodeChild = curNode.getChild(letter);

      // If there is a curNodeChild, set the curNode to that child.
      if (curNodeChild) {
        curNode = curNodeChild;

        if (word in curNode.wordOccurences)
          curNode.wordOccurences[word]++;
        else
          curNode.wordOccurences[word] = 1;

        // If we are at the end of the inserted word, then we know that this new curNode is also
        // and endOfWord.
        if (i === word.length - 1) curNode.endOfWord = true;
      }
      // Else, we are going to make a new child node and set curNode to this new child node.
      else {
        const newChildNode = new Node(letter, i === (word.length - 1));
        newChildNode.wordOccurences[word] = 1;
        curNode.addChild(newChildNode);
        curNode = newChildNode;
      }
    }
  }
  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let curNode = this.root;

    for (let i = 0; i < word.length; ++i) {
      const letter = word[i];

      const curNodeChild = curNode.getChild(letter);

      if (curNodeChild) {
        if (i === (word.length - 1) && curNodeChild.endOfWord) return true;
        else curNode = curNodeChild;
      }
      else return false;
    }

    return false;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    // Find node for last letter of prefix.
    let curNode = this.root;
    for (let i = 0; i < prefix.length; ++i) {
      const letter = prefix[i];

      const curNodeChild = curNode.getChild(letter);
      if (curNodeChild) curNode = curNodeChild;
      else return false;
    }

    // DFS through until we find a node that is an endOfWord.
    let stack = [curNode];
    curNode = stack.pop();

    while (curNode) {
      if (curNode.endOfWord) return true;

      curNode.children.forEach(n => stack.push(n));

      curNode = stack.pop();
    }

    return false;
  }
}


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const trie = new Trie();
  const firstLetterObj = {};
  words.forEach(word => {
    trie.insert(word);

    const firstLetter = word[0];
    if (firstLetter in firstLetterObj)
      firstLetterObj[firstLetter].push(word);
    else {
      firstLetterObj[firstLetter] = [word];
    }
  });

  const backtrack = (i, j, word) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length)
      return;

    word += board[i][j];
    const origLetter = board[i][j];
    board[i][j] = '#';
    if (trie.startsWith(word)) {
      backtrack(i + 1, j, word);
      backtrack(i - 1, j, word);
      backtrack(i, j + 1, word);
      backtrack(i, j - 1, word);
    }

    board[i][j] = origLetter;
    if (trie.search(word))
      solution[word] = true;;
  }

  const solution = {};
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] in firstLetterObj) {
        backtrack(i, j, '');
      }
    }
  }

  return Object.keys(solution);
}

const board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];

console.log(findWords(board, ["oath","pea","eat","rain"]))

const words = ["oath","pea","eat","rain"]

// console.log(findWords(board, words));

const board2 = [
  ["a","b","c"],
  ["a","e","d"],
  ["a","f","g"]
]
const words2 = ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"]

// console.log(findWords(board2, words2))

board3 = copy2dArray(board2);
// board3[0][0] = null;
// console.log(board2, board3);

console.log(board3[0])
>>>>>>> a76114f837804aee351674fd1cc6eec6f0522b10
