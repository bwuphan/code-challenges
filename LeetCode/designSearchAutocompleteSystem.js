/*
https://leetcode.com/problems/design-search-autocomplete-system/


Design a search autocomplete system for a search engine. Users may input a sentence (at least one
word and end with a special character '#'). For each character they type except '#', you need to
return the top 3 historical hot sentences that have prefix the same as the part of sentence already
typed. Here are the specific rules:

The hot degree for a sentence is defined as the number of times a user typed the exactly same
sentence before.

The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If
several sentences have the same degree of hot, you need to use ASCII-code order (smaller one appears
first).

If less than 3 hot sentences exist, then just return as many as you can.
When the input is a special character, it means the sentence ends, and in this case, you need to
return an empty list.

Your job is to implement the following functions:

The constructor function:

AutocompleteSystem(String[] sentences, int[] times): This is the constructor. The input is
historical data. Sentences is a string array consists of previously typed sentences. Times is
the corresponding times a sentence has been typed. Your system should record these historical data.

Now, the user wants to input a new sentence. The following function will provide the next character the user types:

List<String> input(char c): The input c is the next character typed by the user. The character
will only be lower-case letters ('a' to 'z'), blank space (' ') or a special character ('#'). Also,
the previously typed sentence should be recorded in your system. The output will be the top 3
historical hot sentences that have prefix the same as the part of sentence already typed.


Example:
Operation: AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2])
The system have already tracked down the following sentences and their corresponding times:
"i love you" : 5 times
"island" : 3 times
"ironman" : 2 times
"i love leetcode" : 2 times
Now, the user begins another search:

Operation: input('i')
Output: ["i love you", "island","i love leetcode"]
Explanation:
There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have
same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should
be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be
ignored.

Operation: input(' ')
Output: ["i love you","i love leetcode"]
Explanation:
There are only two sentences that have prefix "i ".

Operation: input('a')
Output: []
Explanation:
There are no sentences that have prefix "i a".

Operation: input('#')
Output: []
Explanation:
The user finished the input, the sentence "i a" should be saved as a historical sentence in system.
And the following input will be counted as a new search.


Note:

- The input sentence will always start with a letter and end with '#', and only one blank space will
exist between two words.
- The number of complete sentences that to be searched won't exceed 100. The length of each sentence
including those in the historical data won't exceed 100.
- Please use double-quote instead of single-quote when you write test cases even for a character
input.
- Please remember to RESET your class variables declared in class AutocompleteSystem, as
static/class variables are persisted across multiple test cases. Please see here for more details.
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
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// var trie = new Trie();

// trie.insert("apple");
// console.log(trie.search("apple"));   // returns true
// console.log(trie.search("app"));     // returns false
// console.log(trie.startsWith("apples")); // returns true
// trie.insert("app");
// console.log(trie.search("app"));     // returns true
// trie.insert('apple');

// console.log('FINAl', trie.root.children);
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
  this.trie = new Trie();

  sentences.forEach((sentence, i) => {
    for (let j = 0; j < times[i]; ++j) {
      this.trie.insert(sentence);
    }
  });

  this.curSentence = '';
  this.curNode = this.trie.root;
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
  const newCurNode = this.curNode.children.get(c);
  if (c === '#') {
    this.trie.insert(this.curSentence);
    this.curNode = this.trie.root;
    return [];
  }
  // else {
    this.curSentence += c;
    if (newCurNode) {
      this.curNode = newCurNode;
      return Object.keys(this.curNode.wordOccurences)
        .sort((a, b) => {
          const occurA = this.curNode.wordOccurences[a];
          const occurB = this.curNode.wordOccurences[b];

          if (occurA > occurB)
            return -1;
          else if (occurA < occurB)
            return 1;
          else
            return a < b ? -1 : 1;

        })
        .slice(0, 3);
    }
    else {
      return [];
    }
  // }
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

const test = new AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2]);
console.log(test.input('i'));
console.log(test.input(' '));
console.log(test.input('a'));
console.log(test.input('#'));
console.log()
console.log(test.trie.root.children);