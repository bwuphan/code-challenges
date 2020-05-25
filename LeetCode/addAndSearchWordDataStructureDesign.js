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
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.trie = new Trie();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  this.trie.insert(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const childNodes = this.trie.root.children;
  const stack = new Stack();
  const visited = new Set();

  let hasMatch = false;
  const dfs = function(node, curWord) {
    if (hasMatch || visited.has(node)) return;

    visited.add(node);
    const curLetter = curWord[0];

    const newWord = curWord.slice(1, curWord.length);

    // console.log(' HERE', newWord, curLetter)

    if (!newWord.length && node.endOfWord && (curLetter === node.letter || curLetter === '.')) {
      hasMatch = true;
    }
    else if (curLetter === '.' || curLetter === node.letter) {
      node.children.forEach(node => {
        dfs(node, newWord);
      });
    }

    return;
  }

  this.trie.root.children.forEach(node => dfs(node, word));
  // console.log(hasMatch)
  // const visited = new Set();

  // if (word[0] === '.')
  // stack.push({ nodes: childNodes, word });

  // while (!stack.isEmpty()) {
  //   const item = stack.pop();
  //   const nodes = item.nodes;
  //   const word = item.word;
  //   if (!item.word)
  //     return true;

  //   console.log(word);
  //   const newWord = item.word.slice(1, item.word.length);
  //   if (item.word === '.') {
  //     const nodesToLoop = [];
  //     nodes.forEach(node => {
  //       if (node.children)
  //         nodesToLoop.concat(node.children);
  //     });


  //     item.nodes.forEach(node => {
  //       stack.push({ nodes: nodesToLoop, word: newWord });
  //     });
  //   }
  //   else {
  //     for (let i = 0; i < nodes.length; ++i) {
  //       const node = nodes[i];
  //       const child = node.getChild(word);
  //       console.log('child', child);
  //       if (child)
  //         stack.push({ nodes: [node], word: newWord })
  //     }
  //   }
  // }

  return hasMatch
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const test = new WordDictionary();
test.addWord("bad")
test.addWord("dad")
test.addWord("mad")
console.log(test.search("pad"))
console.log(test.search("bad"))
console.log(test.search(".ad"))
console.log(test.search("b.."))
console.log(test.search("b.m"))