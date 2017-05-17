/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1


/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value) {
    // TODO: implement `insert()`
    const hash = getIndexBelowMaxForKey(key, storageLimit);
    let replaced = false;
    const bucket = storage[hash];
    if (!bucket) {
      storage[hash] = [[key, value]];
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          replaced = true;
        }
      }
      if (!replaced) {
        bucket.push([key, value]);
      }
    };
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    const hash = getIndexBelowMaxForKey(key, storageLimit);
    const bucket = storage[hash];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    };
    return null;
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    const hash = getIndexBelowMaxForKey(key, storageLimit);
    const bucket = storage[hash];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket.splice(i, 1);
      }
    }
    return null;
  };

  return result;
};


var hashTable = makeHashTable();
      hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
      hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
      var value = hashTable.retrieve('Tarantino\'s best movie');
      console.log(value)
// var getIndexBelowMaxForKey = function(str, max) {
//   var hash = 0;
//   for (var i = 0; i < str.length; i++) {
//     hash = (hash << 5) + hash + str.charCodeAt(i);
//     hash = hash & hash; // Convert to 32bit integer
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// };

// var makeHashTable = function() {
//   var result = {};
//   var storage = [];
//   var storageLimit = 1000;
//   result.insert = function(/*...*/ /* START SOLUTION */ key, value /* END SOLUTION */) {
//     // TODO: implement `insert()`
//     /* START SOLUTION */

//     var index = getIndexBelowMaxForKey(key, storageLimit);
//     storage[index] = storage[index] || [];
//     var pairs = storage[index];
//     var pair;
//     var replaced = false;
//     for (var i = 0; i < pairs.length; i++) {
//       pair = pairs[i];
//       if (pair[0] === key) {
//         pair[1] = value;
//         replaced = true;
//       }
//     }

//     if (!replaced) {
//       pairs.push([key, value]);
//     }
//     /* END SOLUTION */
//   };

//   result.retrieve = function(/*...*/ /* START SOLUTION */ key /* END SOLUTION */) {
//     // TODO: implement `retrieve()`
//     /* START SOLUTION */
//     var index = getIndexBelowMaxForKey(key, storageLimit);
//     var pairs = storage[index];
//     if (!pairs) { return; }
//     var pair;
//     for (var i = 0; i < pairs.length; i++) {
//       pair = pairs[i];
//       if (pair && pair[0] === key) {
//         return pair[1];
//       }
//     }
//     /* END SOLUTION */
//   };

//   result.remove = function(/*...*/ /* START SOLUTION */ key /* END SOLUTION */) {
//     // TODO: implement `remove()`
//     /* START SOLUTION */
//     var index = getIndexBelowMaxForKey(key, storageLimit);
//     var pairs = storage[index];
//     var pair;
//     for (var i = 0; i < pairs.length; i++) {
//       pair = pairs[i];
//       if (pair[0] === key) {
//         var value = pair[1];
//         delete pairs[i];
//         return value;
//       }
//     }
//     /* END SOLUTION */
//   };

//   return result;
// };
