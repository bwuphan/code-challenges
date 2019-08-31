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
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}

LinkedList.prototype.removeNode = function(node) {
  if (this.head === node) {
    this.removeFromHead();
  }
  else if (this.tail === node) {
    this.removeFromTail();
  }
  else {
    // Connect previous node to next node.
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

LinkedList.prototype.moveToTail = function(node) {
  this.removeNode(node);
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
    console.log(curNode.val);
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
  this._map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // console.log(this._map);
  if (key in this._map) {
    this._cache.moveToTail(this._map.get(key));
  }
  // console.log(this._map.get(key));
  if (this._map.get(key)) {
    return this._map.get(key).val;
  }
  else {
    return null;
  }
  // return this._map.get(key).val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // If we are already at capacity.
  if (this._size === this._capacity) {
    const removedNode = this._cache.removeFromHead();
    this._map.delete(removedNode.key);
    this._size--;
    this.put(key, value);
  }
  else {
    // If the key already exists in the cache, just get.
    if (key in this._map) {
      this.get(key);
    }
    // Else, set values as usual.
    else {
      const newNode = this._cache.addToTail(key, value);
      this._map.set(key, newNode);
      this._size++;
    }
  }
  console.log(this._map.keys());
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */