/*
 * Given two numbers, find all factors of each.
 * Return all of their common factors sorted from highest to lowest.
 *
 * Example 1:
 *  Find all the common factors of 12 and 18.
 *  Factors of 12 are 12, 6, 4, 3, 2, 1
 *  Factors of 18 are 18, 9, 6, 3, 2, 1
 *  The common factors of 12 and 18 are 6, 3, 2, 1
 *
 * Example 2:
 *  var common = commonFactors(20, 25);
 *  console.log(common); // [5, 1]
*/

var commonFactors = function(num1, num2) {
  // TODO: Your code here!
  /* START SOLUTION */
  var t;
  var i = 0;
  var factors = [];
  var results = [];

  // make sure num1 is smaller
  // NOTE: this is only an optimization. removing it will have no effect on the
  // solution.
  if ( num1 > num2) {
    // if not, swap them
    t = num1;
    num1 = num2;
    num2 = t;
  }

  // find all the factors of num1
  for (i = num1; i >= 0; i--) {
    if ( (num1 / i) % 1 === 0) { factors.push(i); }
  }
  // remove all the factors that aren't a factor of num2
  for (i = 0; i < factors.length; i++) {
    if ( num2 / factors[i] % 1 === 0 ) { results.push(factors[i]); }
  }
  return results;
  /* END SOLUTION */
};



