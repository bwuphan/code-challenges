const DoublyLinkedList = require('../Prototypes/DoublyLinkedList').DoublyLinkedList;

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new DoublyLinkedList();
    this.size = 0;
    this._keyNodeMap = new Map();
    this._valKeyMap = new Map();
  }

  get(key) {

  }

  put(key, value) {
    if (this.size === this.capacity && !this._keyNodeMap.has(key)) {
      const removedNode = this.cache.removeHead();
      this._keyNodeMap.delete(key);
      this._valKeyMap.delete(removedNode.val);
      this.size--;
      this.put(key, value);
    }
    else {
      if (this._keyNodeMap.has(key)) {
        const node = this._keyNodeMap.get(key);
        this.cache.removeNode(node);
        const newTail = this.cache.append(node.val);
        this._keyNodeMap.set()
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


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

module.exports = {
  LRUCache
}