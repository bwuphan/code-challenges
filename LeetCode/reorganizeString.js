/*
https://leetcode.com/problems/reorganize-string/

Given a string S, check if the letters can be rearranged so that two characters
that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500].
*/


class MaxHeap {
  constructor(array) {
    this._heap = [];

    if (array) {
      array.forEach(num => this.insert(num));
    }
  }

  insert(occurObj) {
    /*
      Push the new val to the heap.
      Set current idx to the last pushed index and get the parent index.
      If there is no parent, we know we're in the right place and we can return.
      Otherwise keep swapping until we find the right spot. The inserted val has to be greater
      than its parent.
     */
    this._heap.push(occurObj);

    let thisIdx = this._heap.length - 1;
    let parentIdx = this.getParentIdx(thisIdx);

    if (parentIdx === null) return occurObj;

    while (parentIdx !== null && this._heap[thisIdx].occurences > this._heap[parentIdx].occurences) {
      this.swap(parentIdx, thisIdx);
      thisIdx = parentIdx;
      parentIdx = this.getParentIdx(thisIdx);
    }
  }

  swap(idx1, idx2) {
    const temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }

  getParentIdx(idx) {
    const pIdx = Math.floor((idx - 1) / 2);
    return pIdx < 0 ? null : pIdx;
  }

  peek() {
    const topOfHeap = this._heap.length ? this._heap[0] : null;
    return topOfHeap;
  }

  getLeftChildIdx(idx) {
    const lIdx = Math.floor((2 * idx) + 1);
    return lIdx < this._heap.length ? lIdx : null;
  }

  getRightChildIdx(idx) {
    const rIdx = Math.floor((2 * idx) + 2);
    return rIdx < this._heap.length ? rIdx : null;
  }

  remove() {
    /*
      Swap the first element with the last and pop off the new last element.
      Start at the first element and compare with the higher of its two children.
      If the larger of the children is larger than the current element, swap the two positions.
      Keep doing this until you find the right location.
    */

    if (this._heap.length === 0)
      return null;

    const lastIdx = this._heap.length - 1;
    this.swap(0, lastIdx);

    const returnVal = this._heap.pop();

    let curIdx, leftChildIdx, rightChildIdx, largerIdx = null;

    curIdx = 0;

    while (true) {
      leftChildIdx = this.getLeftChildIdx(curIdx);

      rightChildIdx = this.getRightChildIdx(curIdx);

      largerIdx = null;

      if (rightChildIdx === null || this._heap[leftChildIdx].occurences > this._heap[rightChildIdx].occurences) {
        largerIdx = leftChildIdx;
      }
      else {
        largerIdx = rightChildIdx;
      }

      if (this._heap[curIdx] && this._heap[largerIdx] && this._heap[curIdx].occurences < this._heap[largerIdx].occurences) {
        this.swap(curIdx, largerIdx);
        curIdx = largerIdx;
        continue;
      }
      else {
        break;
      }
    }
    return returnVal;
  }

  log() {
    console.log(this._heap);
  }
}



/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  let numLetters = 0; // The number of total unique letters in the string.
  const occurObj = {}; // Key: letter, Val: num of occurences.
  for (let i = 0; i < S.length; ++i) {
    const letter = S[i];
    if (letter in occurObj)
      occurObj[letter]++;
    else {
      occurObj[letter] = 1;
      numLetters++;
    }
  }

  // Insert into heap / priority queue.
  const heap = new MaxHeap();
  for (let letter in occurObj)
    heap.insert({ letter, occurences: occurObj[letter] });

  // If top occuring is greater than (n + 1) / 2, it is impossible, return ''.
  if (heap.peek().occurences > ((S.length + 1) / 2))
    return '';

  let returnStr = '';
  while (numLetters > 0) {
    // Remove top two occurences and place them next to each other.
    const first = heap.remove();
    const second = heap.remove();

    if (first && first.occurences) {
      returnStr += first.letter;
      first.occurences--;
      if (first.occurences > 0)
        heap.insert(first);
      else
        numLetters--;
    }

    if (second && second.occurences) {
      returnStr += second.letter;
      second.occurences--;
      if (second.occurences > 0)
        heap.insert(second);
      else
        numLetters--;
    }
  }

  return returnStr;
};

/*
Solution: Going to use a priority queue to pull off top two occurences every time.
If the highest occuring letter is greater than (n + 1) / 2, it is an impossible task.

*/

console.log(reorganizeString('aaabccc'));
console.log(reorganizeString('aaab'));
console.log(reorganizeString("blflxll"))