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
  words.forEach(word => trie.insert(word));

}

const board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];

console.log(findWords(board, ["oath","pea","eat","rain"]))