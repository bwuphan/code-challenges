/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */
/* START SOLUTION */
var concat = function () {
  return [].concat.apply([], arguments);
};
/* END SOLUTION */

var quicksort = function(array) {
  /* START SOLUTION */
  if (array.length <= 1) { return array; }

  var pivot = array[0];

  var left = array.slice(1).filter(function (x) {
    return x < pivot;
  });

  var right = array.slice(1).filter(function (x) {
    return x >= pivot;
  });

  return concat(quicksort(left), [pivot], quicksort(right));
  /* END SOLUTION */
};
