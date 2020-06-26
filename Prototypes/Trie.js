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


module.exports = {
  Trie,
  Node
}