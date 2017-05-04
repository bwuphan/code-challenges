// An easy way to reverse an array is by building a new array of the same size but in the opposite order
// However, this requires as much extra memory as the original array takes up.
// In-place reversal is a technique that requires no extra space. Write an in-place array reversal algorithm that
// requires O(1) space

//reverseArray([1,2,3,4]) === [4,3,2,1]

var reverseArray = function(array) {
  /* START SOLUTION */
  for (var i = 0; i < array.length / 2; i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  /* END SOLUTION */
};
