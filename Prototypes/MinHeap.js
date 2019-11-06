var MinHeap = function(capacity) {
  this._heap = [];
  this._capacity = capacity;
}

MinHeap.prototype.insert = function(val) {
  this._heap.push(val);


}

