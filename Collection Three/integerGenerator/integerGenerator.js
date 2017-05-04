/**
 * Given a function which produces a random integer in the range 1 to 5, write
 * a function which produces a random integer in the range 1 to 7.
 */

// produces random integers in the range of [1,5] (inclusive)
var random1to5 = function() {
  // NOTE: You're allowed to use `Math.random()` in your solution.
  // TODO: you're code here!
  /* START SOLUTION */
  return Math.floor(Math.random() * 5) + 1;
  /* END SOLUTION */
};

// produces random integers in the range [1,7] (inclusive)
var random1to7 = function() {
  // NOTE: Don't use `Math.random()` directly.
  // TODO:  your code here!
  /* START SOLUTION */
  var num;
  while (true) {
    num = 5 * (random1to5() - 1) + random1to5();
    if (num < 22) { return ((num % 7) + 1); }
  }
  /* END SOLUTION */
};
