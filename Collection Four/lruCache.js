/**
 * @param {number} capacity
 */

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class dLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    node.prev = this.tail;
    this.tail.next = node;

    this.tail = node;
  }
}
var LRUCache = function(capacity) {

};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */