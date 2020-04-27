/*
https://leetcode.com/problems/design-hashmap/

https://leetcode.com/problems/design-hashmap/

Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap.
  If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if
  this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the
  mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.

*/

/**
 * Initialize your data structure here.
 */
class MyHashMap {
  constructor() {
    this.hashModulo = 2068;
    this.storage = [];
  }

  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const idx = key % this.hashModulo;
    if (this.storage[idx]) {
      const bucket = this.storage[idx];
      // Find if there already is the key in the bucket.
      const foundPair = bucket.find(pair => pair.key === key);
      if (foundPair)
        foundPair.value = value;
      else
        bucket.push({ key, value });
    }
    else {
      this.storage[idx] = [{ key, value }];
    }
  };

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const bucket = this.storage[key % this.hashModulo];
    if (!bucket) return -1;

    const foundPair = bucket.find(pair => pair.key === key);

    if (foundPair)
      return foundPair.value;
    else return -1;
  };

  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    console.log('in remove');
    const bucket = this.storage[key % this.hashModulo];
    if (bucket) {
      const idx = bucket.findIndex(pair => pair.key === key);
      console.log(idx);
      if (idx > -1)
        bucket.splice(idx, 1);
    }
  };
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1) === 1);            // returns 1
console.log(hashMap.get(3) === -1);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
console.log(hashMap.get(2) === 1);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
console.log(hashMap.storage);
console.log(hashMap.get(2) === -1);            // returns -1 (not found)