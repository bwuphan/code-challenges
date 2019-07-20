/**
 * @param {number} capacity
 */
var Node = function(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

var dLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.numNodes = 0;

}
dLinkedList.prototype.addToTail = function(data) {
  const newNode = new Node(data);
  if (!this.head && !this.tail) {
    this.head = newNode;
  } else {
    if (!this.tail) {
      this.head.next = newNode;
      newNode.prev = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }
  this.numNodes++;
  return newNode;
}

dLinkedList.prototype.removeFromHead = function() {
  // console.log('in remove from head');
  if (!this.head) return null;
  else {
    const tempNode = this.head;
    if (!this.tail) {
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.numNodes--;
    // console.log('DLL');
    // printDll(this);
    return tempNode.data;
  }
}

dLinkedList.prototype.removeNode = function(Node) {
  // console.log('NODE TO REMOVE', Node);
  const prevNode = Node.prev;
  const nextNode = Node.next;
  if (!Node.prev && !Node.next) {
    this.head = null;
  } else if (!Node.prev) {
    nextNode.prev = null;
    // console.log('new HEEEEEEEEEEEAAAADDDDDSB', nextNode);
    this.head = nextNode;
  } else if (!Node.next) {
    prevNode.next = null;
    if (this.tail) this.tail = prevNode;
  } else {
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
  this.numNodes--;
}

var LRUCache = function(capacity) {
  this.dll = new dLinkedList();
  this.capacity = capacity;
  this.object = {};
};

var LRUCacheItem = function (key, value) {
  /* START SOLUTION */
  this.value = value === undefined ? null : value;
  this.key = key === undefined ? null : key;
  this.node = null;
  /* END SOLUTION */
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  console.log('GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETTTTTTTTTTTTTTTTTTTTT', key);
  console.log(this.object);
  printDll(this.dll);
  // printDll(this.dll);
  let returnVal = -1;
  if (key in this.object) {
    if (this.capacity >= this.dll.numNodes) {
      this.dll.removeNode(this.object[key]);
      // console.log('AFTER REMOVAL'); printDll(this.dll);
      const newItem = new LRUCacheItem(key, this.object[key].data);
      newItem.node = this.dll.addToTail(this.object[key].data);
      this.object[key] = newItem;
      console.log('new item in get', newItem);
    }
    returnVal = this.object[key].value;
  }
  // console.log('END OF GET'); printDll(this.dll);
  // console.log(returnVal);
  console.log('Final Obj', this.object);
  console.log('rval', returnVal);
  return returnVal;

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  console.log('PUT', key, value);
  if (key in this.object) {
    // console.log('DUP')
    this.dll.removeNode(this.object[key]);
  }
  if (this.dll.numNodes >= this.capacity) {
    const headVal = this.dll.removeFromHead();
    delete this.object[key];
  }
  const newItem = new LRUCacheItem(key, value);
  newItem.node = this.dll.addToTail(value);

  this.object[key] = newItem;
  console.log('Final Obj', this.object);
  // console.log(printDll(this.dll));
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 let dll = new dLinkedList();
 dll.addToTail(5);
 dll.addToTail(4);
 dll.addToTail(3);

// printDll(dll);
// console.log(dll.removeFromHead());
// printDll(dll);

function printDll(dll) {
  console.log(`Head: ${dll.head ? dll.head.data : null}`);
  console.log(`Tail: ${dll.tail ? dll.tail.data : null}`);
  console.log(`Num Nodes: ${dll.numNodes}`);
  printNode(dll.head);
}
function printNode(Node) {
  console.log(`Val here: ${Node.data} `);
  if (!Node.next) return;
  else {
    return printNode(Node.next);
  }
}

// let lru = new LRUCache(3);
// lru.put(1,1);
// lru.put(2,2);
// lru.put(3,3);
// lru.put(4,4);
// lru.get(4);
// lru.get(3);
// lru.get(2);
// // console.log(lru.object);
// lru.get(1);
// lru.put(5,5);
// lru.get(1);
// // printDll(lru.dll);
// // console.log(lru.object);
// lru.get(2);
// lru.get(3);
// lru.get(4);
// lru.get(5);


/*
["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]
[[3],        [1,1],[2,2],[3,3],[4,4],[4],  [3],  [2],  [1],  [5,5],[1],  [2],  [3],  [4],  [5]]
*/

// let lru = new LRUCache(1);
// lru.put(2,1);
// lru.get(2);
// console.log(lru.object);
// printDll(lru.dll);
// lru.put(3,2);
// console.log("HEW");
// console.log(lru.object);
// printDll(lru.dll);
// lru.get(2);
// lru.get(3)

let lru = new LRUCache(2)
lru.put(1,1);
lru.put(2,2);
lru.get(1);
// console.log(lru.object);
// printDll(lru.dll);
lru.put(3,3);
// console.log("HEW");
// console.log(lru.object);
// printDll(lru.dll);
lru.get(2);
lru.put(4,4);
lru.get(3)
lru.get(1)
lru.get(4)