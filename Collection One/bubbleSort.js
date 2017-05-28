/*
Solution
// Here we are stopping our inner loop
// one index earlier after each pass
// BUT time complexity is still O(n^2)
var bubbleSort = function (array) {
  var len = array.length;

  for (var i = 0; i < len - 1; i++) {
    var swaps = false;

    for(var j = 0; i < len-1-i; j++) {
      if (array[j] < array[j + 1]) {
         swaps = true;
         swap(j, j + 1, array);
      }
    }

    if (!swaps) { break; }
  };

  return array;
};
// "Normal" swapping function
var swap = function (i, j, array) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

// Swap with destructuring
var swap = function (i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
  return array;
};

// Bitwise swap using exclusive or
// The XOR operator converts both numbers to binary
// and then checks the bits at corresponding locations
// returning a 1 for that location if EXACTLY 1 bit equals 1
// and a 0 otherwise
var swap = function (i, j, array) {
  array[i] ^= array[j];
  array[j] ^= array[i];
  array[i] ^= array[j];
  return array;
};
// Examples:
// I = 1111                      K = 010010111 ^
// J = 0000                      L = 110101001

// I ^= J // I:1111, J:0000      K ^= L // K:100111110, L:110101001
// J ^= I // I:1111, J:1111      L ^= K // K:100111110, L:010010111
// I ^= J // I:0000, J:1111      K ^= L // K:110101001, L:010010111
*/


function mutate(array) {
  array[0] = 1;
  return array;
}


var test = [3,1,7];
mutate(test);
console.log(test);