/* functionalMath
 * 
 * Instructions:
 * 
 * 1. Define functions for each digit, from 'zero' to 'nine'.
 *
 * 2. Write out functions for the following mathematical operators: 
 *    plus, minus, multipliedBy, and dividedBy.
 *
 * The most outer function represents the left operand, and the most
 * inner function represents the right operand.
 * 
 * Examples: 
 * seven(multipliedBy(five())); // must return 35
 * four(plus(nine())); // must return 13
 * eight(minus(three())); // must return 5
 * six(dividedBy(two())); // must return 3
 * six(multipliedBy(five(multipliedBy(three())))); //must return 90
 *
 * HINT: This is functional programming, think about what each of 
 *       these functions should return based on their arguments.
 */

'use strict';

var zero = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(0) : 0;
  /* END SOLUTION */
};

var one = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(1) : 1;
  /* END SOLUTION */
};
var two = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(2) : 2;
  /* END SOLUTION */
};
var three = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(3) : 3;
  /* END SOLUTION */
};
var four = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(4) : 4;
  /* END SOLUTION */
};
var five = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(5) : 5;
  /* END SOLUTION */
};
var six = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(6) : 6;
  /* END SOLUTION */
};
var seven = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(7) : 7;
  /* END SOLUTION */
};
var eight = function(func) {
  /* START SOLUTION */
  return func ? func(8) : 8;
  /* END SOLUTION */
};
var nine = function(/* START SOLUTION */ func /* END SOLUTION */) {
  /* START SOLUTION */
  return func ? func(9) : 9;
  /* END SOLUTION */
};

//Math Operators

var plus = function(/* START SOLUTION */ rightSide /* END SOLUTION */) {
  /* START SOLUTION */
  return function(value) { return value + rightSide; };
  /* END SOLUTION */
};
var minus = function(/* START SOLUTION */ rightSide /* END SOLUTION */) {
  /* START SOLUTION */
  return function(value) { return value - rightSide; };
  /* END SOLUTION */
};
var multipliedBy = function(/* START SOLUTION */ rightSide /* END SOLUTION */) {
  /* START SOLUTION */
  return function(value) { return value * rightSide; };
  /* END SOLUTION */
};
var dividedBy = function(/* START SOLUTION */ rightSide /* END SOLUTION */) {
  /* START SOLUTION */
  return function(value) { return value / rightSide; };
  /* END SOLUTION */
};

