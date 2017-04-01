  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      //YOUR CODE HERE
      var bucket = storage[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          console.log('key', key)
          bucket[i][1] = value;
          return;
        }
      }
      bucket.push([key, value]);
    };

    table.retrieve = function(key){
      //YOUR CODE HERE
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index];
      if (bucket && bucket.length > 0) {
        for (let i = 0; i < bucket.length; i ++) {
          if (bucket[i][0] === key) {
            return bucket[i][1];
          }
        }
      }
    };

    table.remove = function(key){
      //YOUR CODE HERE
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            bucket.splice(i, 1);
          }
        }
      }
    }
    return table;
  };
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };

var hashTable = makeHashTable();
      var n = 1010;
      for(var i = 0; i < n; i++){
        hashTable.insert('userid:' + i, 'Jamie Hyneman #' + i);
      }
      for (var i = 0; i < n; i++) {
        console.log(hashTable.retrieve('userid:' + i));
      }



/*
makeHashTable = function(){
  var result = {};
  // Mimicking a private variable through closure
  var storage = [];
  var storageLimit = 1000;

result.insert = function(key, value){
  // Calculate the hash (index)
  var hash = getHash(key, storageLimit);
  // Grab and initialize the storage slot
  storage[hash] = storage[hash] || [];
  var pairs = storage[hash];

  var replaced = false;
  // Replace the pair, if it already exists
  _.each(pairs, function(pair) {
    if (pair[0] === key) {
      pair[1] = value;
      replaced = true;
    }
  });
  // Add the pair, if it is new
  if (!replaced) {
    pairs.push([key, value]);
  }
};

result.retrieve = function(key){
  // Calculate the hash (index)
  var hash = getHash(key, storageLimit);
  // Grab the storage slot
  var pairs = storage[hash] || [];
  var pair;

  // Loop through the storage slot
  for (var i = 0; i < pairs.length; i++) {
    pair = pairs[i];
    // If the keys match, return its value
    if (pair[0] === key) {
      return pair[1];
    }
  }
};


result.remove = function(key){
  // Calculate the hash (index)
  var hash = getHash(key, storageLimit);
  // Grab the storage slot
  var pairs = storage[hash] || [];
  var pair;

  // Loop through the storage slot
  for (var i = 0; i < pairs.length; i++) {
    pair = pairs[i];
    if (pair[0] === key) {
      // The only difference:
      // Remove the key-value pair
      var removedPair = pairs.splice(i,1);
      // And return the value
      return removedPair[1];
    }
  }
  return result
};
 var getHash = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };

*/

