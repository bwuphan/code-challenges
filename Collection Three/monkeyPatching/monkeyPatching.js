/*
 * Extend the native class prototypes for Object, Array, and Function such that
 * the following use cases would work:
 *
 * {a:3,b:4}.size(); // => 2
 * [3,4,5,6].shuffle(); // => [4,6,3,5] or similar
 * alert.runTwice(window, 'hi'); // alerts 'hi' then alerts 'hi' again.
 *    // the first argument is the context and any additional arguments are
 *    // passed to the original function
 */

// TODO: Your code here!

/* START SOLUTION */
Object.prototype.size = function() {
  return Object.keys(this).length;
};

Array.prototype.shuffle = function() {
  var arr = this.slice(); // copy
  var randIndex;
  var tmp;
  for (var i = 0; i < arr.length; i++) {
    randIndex = Math.floor(Math.random() * arr.length);
    tmp = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = tmp;
  }
  return arr;
};

Function.prototype.runTwice = function(context) {
  if (typeof window !== 'undefined') {
    context = context || window;
  }
  this.apply(context, Array.prototype.slice.call(arguments, 1));
  this.apply(context, Array.prototype.slice.call(arguments, 1));
};

/* END SOLUTION */

