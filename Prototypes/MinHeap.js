class MinHeap {
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

    while (parentIdx !== null && this._heap[thisIdx] < this._heap[parentIdx]) {
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
      Swap the first element with the last and pop off the new last element.
      Start at the first element and compare with the lower of its two children.
      If the smaller of the children is smaller than the current element, swap the two positions.
      Keep doing this until you find the right location.
    */

    if (this._heap.length === 0)
      return null;

    const lastIdx = this._heap.length - 1;
    this.swap(0, lastIdx);

    const returnVal = this._heap.pop();

    let curIdx, leftChildIdx, rightChildIdx, smallerIdx = null;

    curIdx = 0;

    while (true) {
      leftChildIdx = this.getLeftChildIdx(curIdx);

      rightChildIdx = this.getRightChildIdx(curIdx);

      smallerIdx = null;

      if (rightChildIdx === null || this._heap[leftChildIdx] < this._heap[rightChildIdx]) {
        smallerIdx = leftChildIdx;
      }
      else {
        smallerIdx = rightChildIdx;
      }

      if (this._heap[curIdx] > this._heap[smallerIdx]) {
        this.swap(curIdx, smallerIdx);
        curIdx = smallerIdx;
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

var minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(4);
minHeap.insert(15);
minHeap.log();
console.log(minHeap.remove());
minHeap.log();
minHeap.insert(20);
minHeap.insert(0);
minHeap.insert(30);
minHeap.log();
console.log(minHeap.remove());
console.log(minHeap.remove());
minHeap.log();
minHeap.insert(2);
minHeap.insert(4);
minHeap.insert(-1);
minHeap.insert(-3);
minHeap.log();