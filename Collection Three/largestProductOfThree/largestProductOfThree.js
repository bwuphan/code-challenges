 /* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
/* START SOLUTION */
// Create a convenience function that sorts arrays ascending numerically
Array.prototype.sortAscending = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  return this;
};
/* END SOLUTION */

var largestProductOfThree = function(array) {
  /* START SOLUTION */
  // Make a copy of the input array and sort it numerically
  array = array.slice().sortAscending();

  var secondFromLast = array[array.length - 2];
  var thirdFromLast = array[array.length - 3];

  return array[array.length - 1] * Math.max(secondFromLast * thirdFromLast, array[0] * array[1]);
  /* ELSE
  // TODO: everything
  END SOLUTION */
};
console.log(largestProductOfThree([-1,3,6,9]))

/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
 var largestProductOfThree = function(array) {
   // TODO: everything
   var product;
   var sorted = array.sort((a, b) => a < b);
   var largest = sorted[0];
   console.log('Sorted: ', sorted);
   var productOfTwoSecondLargest = sorted.slice(1, 3).reduce((a, b) => a * b, 1);
   // console.log('productOfTwoSecondLargest:', productOfTwoSecondLargest);
   var negative = array.filter((a) => a < 0);
   //console.log('Negative: ', negative);
   if (negative.length > 1) {
     var productOfTwoLargestNegative = negative.sort((a, b) => a > b).slice(0, 2).reduce((a, b) => a * b, 1);
     product = largest * (productOfTwoSecondLargest > productOfTwoLargestNegative ?
                 productOfTwoSecondLargest : productOfTwoLargestNegative);
   } else {
      // console.log('largest': largest)
     product = largest * productOfTwoSecondLargest;
     // console.log('PRODUCT': product)
   }
   //console.log('Product: ', product);
   return product;
 };

console.log(largestProductOfThree([2, 5, 3, 7]));  //30

console.log(largestProductOfThree([2, 13, 7, 3, 5, 11])) //300 something
console.log(largestProductOfThree([2, 3, -11, 7, 5, -13])) //300 something

//