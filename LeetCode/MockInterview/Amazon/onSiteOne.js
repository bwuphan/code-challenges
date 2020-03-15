var Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}


var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(val) {
  const newNode = new Node(val);
  // If there is no head, make this the new head.
  if (!this.head) {
    this.head = newNode;
  }
  // Else, add to tail.
  else {
    const oldTail = this.tail;
    // If there is no tail, add tail to head.
    if (!this.tail) {
      this.head.next = newNode;
      newNode.prev = this.head;
    }
    // Else, add to previous tail.
    else {
      newNode.prev = oldTail;
      oldTail.next = newNode;
    }

    // Set tail to newest node.
    this.tail = newNode;
  }

  return newNode;
}

LinkedList.prototype.removeFromHead = function() {
  // Only remove if a head exists.
  if (this.head) {
    const curHead = this.head;
    this.head = this.head.next;

    // If the head and tail are the same, this is the only node and we need to null out this.tail.
    if (this.head === this.tail) {
      this.tail = null;
    }

    return curHead;
  }
  return null;
}

LinkedList.prototype.removeFromTail = function() {
  // Only remove if a tail exists.
  if (this.tail) {
    const removedTail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return removedTail;
  }
}

LinkedList.prototype.removeNode = function(node) {
  console.log(node);
  if (this.head === node) {
    return this.removeFromHead();
  }
  else if (this.tail === node) {
    return this.removeFromTail();
  }
  else {
    // Connect previous node to next node.
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
  }
}

LinkedList.prototype.moveToTail = function(node) {
  this.removeNode(node);
  node.prev = null; node.next = null;
  return this.addToTail(node.val);
}

LinkedList.prototype.removeDuplicates = function() {
  let valObj = {};

  let curNode = this.head;
  while(curNode !== null) {
    const nextNode = curNode.next;
    // If the current node value is in valObj, remove the node.
    if (curNode.val in valObj) {
      this.removeNode(curNode);
    }
    // Else, set current node value in valObj.
    else {
      valObj[curNode.val] = true;
    }

    curNode = nextNode;
  }
}

LinkedList.prototype.outputVals = function() {
  let curNode = this.head;
  while (curNode !== null) {
    curNode = curNode.next;
  }
}

LinkedList.prototype.returnKthFromTail = function(k) {
  let i = 0;
  let curNode = this.tail;
  while (curNode !== null) {
    if (i === k) {
      return curNode;
    }
    i++;
    curNode = curNode.prev;
  }
  return null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this._capacity = capacity;
  this._size = 0;
  this._cache = new LinkedList();
  this._keyValueMap = new Map();
  this._valueKeyMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  console.log('GET', this._keyValueMap, this._valueKeyMap, 'HEAD', this._cache.head, this._cache.tail);
  const node = this._keyValueMap.get(key);

  if (node && node.val) {
    this._cache.moveToTail(node);
    return node.val;
  }
  else
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  console.log('PUT', key, value);
  let node = null;

  if (node = this._keyValueMap.get(key)) {
    if (node.val !== value) {
      this._valueKeyMap.delete(node.val);
      this._valueKeyMap.set(value, key);

      const newNode = this._cache.addToTail(value);
      this._keyValueMap.set(key, newNode);
    }
    else
      this._cache.moveToTail(node);
  }
  else {
    if (this._size >= this._capacity) {
      const removedNode = this._cache.head;
      const removedKey = this._valueKeyMap.get(removedNode.val);
      this._cache.removeFromHead();
      console.log("REMOVED NODE", removedNode.val, removedKey)
      // console.log('REMOVED', this._valueKeyMap, this._keyValueMap);
      this._keyValueMap.delete(removedKey);
      this._valueKeyMap.delete(removedNode.val);
    }

    const newNode = this._cache.addToTail(value);
    this._keyValueMap.set(key, newNode);
    this._valueKeyMap.set(newNode.val, key);
    this._size++;
  }
  console.log('MAPS', this._cache.head,  this._keyValueMap, this._valueKeyMap);
};

const cache = new LRUCache( 2 /* capacity */ );

console.log(cache.put(2, 1));
console.log(cache.put(2, 2));
console.log(cache.get(2));       // returns 2
console.log(cache.put(1, 1));
console.log(cache.put(4, 1));    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4
