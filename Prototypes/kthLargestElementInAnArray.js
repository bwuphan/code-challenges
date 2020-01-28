/*
https://leetcode.com/problems/kth-largest-element-in-an-array/


Find the kth largest element in an unsorted array. Note that it is the kth largest element in the
sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

class MaxHeap {
  constructor() {
    this._heap = [];
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
    console.log('Top:', topOfHeap);
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let maxHeap = new MaxHeap();

  for (let i = 0; i < nums.length; ++i) {
    maxHeap.insert(nums[i]);
  }

  maxHeap.log();

  let largest = null;
  for (let i = 0; i < k; ++i) {
    largest = maxHeap.remove();
  }

  return largest;
};

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))