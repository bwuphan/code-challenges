/*
https://leetcode.com/problems/add-and-search-word-data-structure-design/

Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing
only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.
*/

var Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(val) {
  return this._storage.push(val);
}

Stack.prototype.pop = function() {
  return this._storage.pop();
}

Stack.prototype.isEmpty = function() {
  return this._storage.length === 0;
}

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
    this.dict = new Set();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    if (this.dict.has(word))
      return;

    this.dict.add(word);
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
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.trie = new Trie();
  this.cache = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  this.trie.insert(word);
  this.cache = {};
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  if (this.cache[word])
    return this.cache[word];

  if (this.trie.dict.has(word)) {
    return true;
  }

  if (!word.includes('.')) {
    return false;
  }


  const childNodes = this.trie.root.children;
  const stack = new Stack();
  const visited = new Set();

  let hasMatch = false;
  const dfs = function(node, curWord) {
    if (hasMatch || visited.has(node)) return;

    const curLetter = curWord[0];
    if (curLetter !== '.' &&  curLetter !== node.letter) {
      return;
    }

    visited.add(node);

    const newWord = curWord.slice(1, curWord.length);

    if (!newWord.length && node.endOfWord && (curLetter === node.letter || curLetter === '.')) {
      hasMatch = true;
    }
    else if (!newWord.length) {
      return;
    }
    else if (newWord[0] === '.') {
      node.children.forEach(node => {
        dfs(node, newWord);
      });
    }
    else if ((curLetter === node.letter || curLetter === '.') && (node.children.has(newWord[0])) ) {
      dfs(node.getChild(newWord[0]), newWord);
    }

    return;
  }


  this.trie.root.children.forEach(node => dfs(node, word));

  this.cache[word] = hasMatch;
  return hasMatch
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// const test = new WordDictionary();

const test = new WordDictionary();
// test.addWord("bad")
// test.addWord("dad")
// test.addWord("mad")
// console.log(test.search("pad") === false)
// console.log(test.search("bad") === true)
// console.log(test.search(".ad") === true)
// console.log(test.search("b..") === true)
// console.log(test.search("b.m") === false)

console.log(test.addWord('at'));
console.log(test.addWord('and'));
console.log(test.addWord('an'));
console.log(test.addWord('add'));
console.log(test.search('a'));
console.log(test.search('.at'));
console.log(test.addWord('bat'));
console.log(test.search('.at'));
console.log(test.search('an.'));
console.log(test.search('a.d.'));
console.log(test.search('b.'));
console.log(test.search('a.d'));
console.log(test.search('.'));