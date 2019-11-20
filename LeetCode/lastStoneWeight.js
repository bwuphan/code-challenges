/*
https://leetcode.com/problems/last-stone-weight/

We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have
weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no
stones left.)



Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.


Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/

class MaxHeap {
  constructor(array) {
    this._heap = [];

    if (array) {
      array.forEach(num => this.insert(num));
    }
  }

  insert(val) {
    /*
      Push the new val to the heap.
      Set current idx to the last pushed index and get the parent index.
      If there is no parent, we know we're in the right place and we can return.
      Otherwise keep swapping until we find the right spot. The inserted val has to be greater
      than its parent.
     */
    this._heap.push(val);

    let thisIdx = this._heap.length - 1;
    let parentIdx = this.getParentIdx(thisIdx);

    if (parentIdx === null) return val;

    while (parentIdx !== null && this._heap[thisIdx] > this._heap[parentIdx]) {
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

  size() {
    return this._heap.length;
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

      if (rightChildIdx === null || this._heap[leftChildIdx] > this._heap[rightChildIdx]) {
        largerIdx = leftChildIdx;
      }
      else {
        largerIdx = rightChildIdx;
      }

      if (this._heap[curIdx] < this._heap[largerIdx]) {
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
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let maxHeap = new MaxHeap(stones);

  while (maxHeap.size() > 1) {
    const stone1 = maxHeap.remove();
    const stone2 = maxHeap.remove();

    if (stone1 !== stone2) {
      maxHeap.insert(stone1 - stone2);
    }
  }

  return maxHeap.size() > 0 ? maxHeap.remove() : 0;
};


console.log(lastStoneWeight([2,7,4,1,8,1]))
console.log(lastStoneWeight([1,3]))
console.log(lastStoneWeight([10,10,7,2]))