/*
https://leetcode.com/problems/time-based-key-value-store/

Create a timebased key-value store class TimeMap, that supports two operations.

1. set(string key, string value, int timestamp)

Stores the key and value, along with the given timestamp.
2. get(string key, int timestamp)

Returns a value such that set(key, value, timestamp_prev) was called previously, with
timestamp_prev <= timestamp.

If there are multiple such values, it returns the one with the largest timestamp_prev.
If there are no values, it returns the empty string ("").


Example 1:

Input: inputs = ["TimeMap","set","get","get","set","get","get"],
inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]

Output: [null,null,"bar","bar",null,"bar2","bar2"]
Explanation:
TimeMap kv;
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
kv.get("foo", 1);  // output "bar"
kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
kv.set("foo", "bar2", 4);
kv.get("foo", 4); // output "bar2"
kv.get("foo", 5); //output "bar2"

Example 2:

Input: inputs = ["TimeMap","set","set","get","get","get","get","get"],
  inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
Output: [null,null,null,"","high","high","low","low"]


Note:

All key/value strings are lowercase.
All key/value strings have length in the range [1, 100]
The timestamps for all TimeMap.set operations are strictly increasing.
1 <= timestamp <= 10^7
TimeMap.set and TimeMap.get functions will be called a total of 120000 times (combined) per test case.
*/


/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this._storage = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  /*
    Each value of the storage map will be a "bucket."
    Each bucket will have an array where all the values w/ timestamps are stored.
      { value, timestamp }

    Each bucket will have a map where the key is a timestamp and the value is the index in which
      this particular timestamp exists in the bucket array.
  */

  // If the storage doesn't already contain the key, we need to create new bucket.
  if (!this._storage.has(key)) {
    const map = new Map();
    map.set(timestamp, 0);
    const newBucket = {
      map,
      arr: [{ value, timestamp }],
    }
    this._storage.set(key, newBucket);
  }
  // Else, add to the bucket.
  else {
    const bucket = this._storage.get(key);

    // Set the map value to the new index and push to the array.
    bucket.map.set(timestamp, bucket.arr.length);
    bucket.arr.push({ value, timestamp });

    this._storage.set(key, bucket);
  }

};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  /*
    Basic strategy is if the key exists and we do not have an exact timestamp match, we will find
    the value we need by using a binary search. From that point, if the timestamp is greater than
    that point, we can return that point. In the case that the timestamp is less than the found
    point, we can return the next lowest (to the left of the array).
  */

  // if the storage doesn't contain the key, return null.
  if (!this._storage.has(key)) return null;

  // Get the bucket.
  const bucket = this._storage.get(key);

  // If the bucket array length is only 1, we don't need to search.
  if (bucket.arr.length === 1)
    return (bucket.arr[0].timestamp === timestamp || bucket.arr[0].timestamp < timestamp) ? bucket.arr[0].value : null;

  // If the timestamp exists exactly in the bucket, we can just return this value.
  if (bucket.map.has(timestamp))
    return bucket.arr[bucket.map.get(timestamp)].value;


  // Binary Search
  let start = 0;
  let end = bucket.arr.length - 1;

  // Go until start and end are the same value.
  while (start < end) {
    const midpointIdx = Math.floor((start + end) / 2);
    const midpointVal = bucket.arr[midpointIdx];

    // If the timestamp is less than the midpoint, search to the left.
    if (timestamp < midpointVal.timestamp) {
      end = midpointIdx - 1;
    }
    // Else, search to the right.
    else if (timestamp > midpointVal.timestamp) {
      start = midpointIdx + 1;
    }
  }

  // If the start is 0, we were not able to find the value.
  if (start === 0) return '';
  // If the timestamp greater than the found idx, return the found idx.
  if (timestamp > bucket.arr[start].timestamp) return bucket.arr[start].value;
  // Else, timestamp must be less than the found idx in which case, return one to the left.
  return bucket.arr[start - 1].value;
};


/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

let kv = new TimeMap();
// kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
// console.log(kv.get("foo", 1));  // output "bar"
// console.log(kv.get("foo", 3)); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
// kv.set("foo", "bar2", 4);
// kv.set("foo", "bar3", 5); // store the key "foo" and value "bar" along with timestamp = 1
// kv.set("foo", "bar4", 7); // store the key "foo" and value "bar" along with timestamp = 1
// console.log(kv.get("foo", 4)); // output "bar2"
// console.log(kv.get("foo", 5)); // output "bar2"
// console.log(kv.get("foo", 6)); //output "bar2"
// console.log(kv.get("foo", 10)); //output "bar2"

// kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
// console.log(kv.get("foo", 1));  // output "bar"
// console.log(kv.get("foo", 3)); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
// kv.set("foo", "bar2", 4);
// console.log(kv.get("foo", 4)); // output "bar2"
// console.log(kv.get("foo", 5)); //output "bar2"


kv.set("love", "high", 10);
kv.set("love", "low", 20);
console.log(kv.get("love", 5));
console.log(kv.get("love", 10))
console.log(kv.get("love", 15))
console.log(kv.get("love", 20))
console.log(kv.get("love", 25))
console.log(kv.get())