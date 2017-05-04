/**
 * Write a function that accepts a number `n` as its input and returns a boolean
 * value representing whether or not `n` is a power of 2.
 * 
 * Example:
 *
 * isPowerOfTwo(32) === true
 *
 * If your answer is iterative, try solving it using recursion (and vice versa).
 * Once you've solved the problem both ways, see if you can devise a clever way
 * of solving the problem using bitwise operators.
 */

var isPowerOfTwo = function(n) {
  // TODO: your code here
  /* START SOLUTION */
/*  if( typeof n !== 'number' || n % 1 !== 0 || n < 2){
    return false;
  };*/
  while (n > 1 && Math.round(n) === n) {
    n = n / 2;
  }
  return n === 1;
  /* END SOLUTION */
};
