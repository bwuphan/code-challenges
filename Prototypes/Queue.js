// var Queue = function() {
//   this.storage = [];
// }

// Queue.prototype.enqueue = function(item) {
//   this.storage.push(item);
//   return item;
// }

// Queue.prototype.dequeue = function() {
//   return this.storage.shift();
// }

// Queue.prototype.isEmpty = function() {
//   return this.storage.length === 0;
// }


var Node = function(val) {
  this.val = val;

  this.next = null;
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;

    this._size = 0;
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

    this._size++;
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

    this._size--;

    return dequeued.val;
  }

  peek() {
    if (!this._first) return null;

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

module.exports = {
  Queue: Queue
}

