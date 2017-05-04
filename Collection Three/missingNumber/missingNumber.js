/**
 * You're given an array every number between 1 and 100,000, except one integer
 * is missing. The numbers are not guaranteed to be consecutive, either! Write a
 * function to detect which number is missing.
 *
 * Extra credit: Refactor your solution to take O(n) time.
 */

var findMissingNumber = function(array) {
  // Your code here

/* START SOLUTION */
  var range = [];
  var i;

  for (i = 0; i < array.length; i++) {
    range[array[i]] = true;
  }

  for (i = 0; i < array.length + 1; i++) {
    if (range[i] === undefined) {
      return i;
    }
  }
/* END SOLUTION */
};

/**
 * Here's a helpful array with every number between 1 and 100000, excluding one
 * random number.
 */
var testArray = _.shuffle(_.range(100000)).slice(1);
