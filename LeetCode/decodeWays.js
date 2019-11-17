/*
https://leetcode.com/problems/decode-ways/


A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/

var Node = function(val) {
  this.val = val;

  this.next = null;
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this._first) {
      this._first = node;
      this._last = this._first;
    }
    else {
      this._last.next = node;
      this._last = node;
    }
  }

  dequeue() {
    if (!this._first) return null;

    const dequeued = this._first;

    if (this._first === this._last) {
      this._first = null;
      this._tail = null;
    }
    else {
      this._first = dequeued.next;
    }
    return dequeued.val;
  }

  peek() {
    return this._first.val;
  }

  isEmpty() {
    return this._first === null;
  }

  log() {
    let curNode = this._first;

    let qString = '';
    while (curNode) {
      qString += `${curNode.val}, `;
      curNode = curNode.next;
    }

    console.log(`Queue: ${qString}`);
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  /*
    We're going to use DP to store already made solutions.
  */

  if (!s || s[0] === '0') return 0;

  let map = {}; // DP. Stores already made solutions.
  const recurse = function(remStr, numSol) {
    // If the remaining string is empty, increment numSol by 1 and return it.
    if (!remStr.length)
      return numSol + 1;

    // If solution already exists, return that solution instead.
    if (map[remStr]) return map[remStr];

    // Number of possible solutions for just one number and the first and second combined.
    let numSol1 = 0;
    let numSol2 = 0;

    const firstNum = remStr[0];

    if (firstNum === '0') return 0;

    // Recurse through with just one character.
    const remStr1 = remStr.slice(1, remStr.length);
    numSol1 = map[remStr1] ? map[remStr1] : recurse(remStr1, numSol);

    // Get the second character.
    const secondNum = remStr[1];
    if (secondNum) {
      // Get the actual number from the combined characters.
      const combined = parseInt(firstNum + secondNum);

      // As long as combined is between 1 and 26, we can recurse through with the combined characters.
      if (combined < 27 && combined !== 0) {
        const remStr2 = remStr.slice(2, remStr);
        numSol2 = map[remStr2] ? map[remStr2] : recurse(remStr2, numSol);
      }
    }

    // Set the new solution and return.
    map[remStr] = numSol1 + numSol2;
    return map[remStr];
  }

  recurse(s, 0);

  return map[s];
};

// console.log(numDecodings(""));
console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("00"));
console.log(numDecodings("7541387519572282368613553811323167125532172369624572591562685959575371877973171856836975137559677665"));