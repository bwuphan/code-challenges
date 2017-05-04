/**
 * Given an arbitrary input array, write a function that reverses the contents
 * of the array (ie, without modifying the original array.)
 * Don't use the native Array.prototype.reverse() method.
 *
 * Extra Credit: Reverse in-place (don't use an extra array).
 *
 *
 * Here's a sample input to get you going:
 *
 *   reverseArray([1, 8, 39, null, 2, 9, 'bob'])[0] // should equal => 'bob'
 */

var reverseArray = function(array) {
  /* START SOLUTION */
  for (var i = 0; i < array.length; i++) { array.splice(i, 0, array.pop()); }
  return array;
  /* END SOLUTION */
};
