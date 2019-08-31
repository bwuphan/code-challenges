var Node = function(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}


var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(key, val) {
  const newNode = new Node(key, val);
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
  return this.addToTail(node.key, node.val);
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
  this._map = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (key in this._map) {
    const node = this._cache.moveToTail(this._map[key]);
    this._map[key] = node;
    return node.val;
  }
  else {
    return -1;
  }
  // return this._map.get(key).val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // If we are already at capacity but also the key can not be already in the map because
  // in that case, we don't want to remove anything, just overwrite.
  if (this._size === this._capacity && !(key in this._map)) {
    const removedNode = this._cache.removeFromHead();
    delete this._map[removedNode.key];
    this._size--;
    this.put(key, value);
  }
  else {
    // If the key already exists in the cache, delete the old node and call put again..
    if (key in this._map) {
      const removedNode = this._cache.removeNode(this._map[key]);
      delete this._map[removedNode.key];
      this._size--;
      this.put(key,value);
    }
    // Else, set values as usual.
    else {
      const newNode = this._cache.addToTail(key, value);
      this._map[key] = newNode;
      this._size++;
    }
  }
};


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// let cache = new LRUCache( 2 /* capacity */ );

// console.log(cache.put(1, 1));
// console.log(cache.put(2, 2));
// console.log(cache.get(1));       // returns 1
// console.log(cache.put(3, 3));    // evicts key 2
// console.log(cache.get(2));       // returns -1 (not found)
// console.log(cache.put(4, 4));    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4


// let cache = new LRUCache(1);

// cache.put(2,1);
// console.log(cache.get(2));
// cache.put(3,2);
// console.log(cache.get(2));
// console.log(cache.get(3));

// let cache = new LRUCache(2);

// cache.put(2,1);
// cache.put(2,2);
// console.log(cache.get(2));
// cache.put(1,1);
// cache.put(4,1);
// console.log(cache.get(2));


// let cache = new LRUCache(2);

// cache.put(2,1);
// cache.put(1,1);
// console.log(cache.get(2));
// cache.put(4,1);
// console.log(cache.get(2));
// console.log(cache.get(1));

let cache = new LRUCache(2);

console.log(cache.get(2));
cache.put(2,6);
console.log(cache.get(1));
cache.put(1,5);
cache.put(1,2);
console.log(cache.get(1));
console.log(cache.get(2));
