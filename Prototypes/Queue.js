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

module.exports = {
  Queue: Queue
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.log();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
