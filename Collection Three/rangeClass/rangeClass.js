/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */

var Range = function(start, end, step) {
  //Your code here
  this.start = start;
  this.end = end || start;
  if (end === 0) {
    this.end = 0;
  }
  this.orderBool = this.start < this.end;
  this.step = step || 1;
  if (!this.orderBool && this.step > 0) {
    this.step *= -1;
  }
};

Range.prototype.size = function () {
  //Your code here
  return Math.abs(Math.ceil((this.end - this.start + 1) / this.step));
};

Range.prototype.each = function (callback) {
  //Your code here
  console.log(this.orderBool, this.start, this.end)
  for (let i = this.start; this.orderBool ? i <= this.end : i >= this.end; i += this.step) {
    callback(i);
  }
};

Range.prototype.includes = function (val) {
  //Your code here
  var bool = false;
  this.each(function(number) {
    if (number === val) {
      bool = true;
    }
  });
  return bool;
};

var range = new Range(2,8,2);
console.log(range.size())
var testFunc = function(val) {
  console.log(val);
}
console.log(range.step)
range.each(testFunc);

// var oneToOneHundred = new Range(1, 100);
// var sum = 0;
// oneToOneHundred.each(function(val){
//   sum += val;
// });
// console.log(sum)

// var countdown = new Range(10, 0, -2); // Let's count down by twos
// var elements = [];
// countdown.each(function(val){elements.push(val);});
// console.log(elements);
// elements.should.eql([10, 8, 6, 4, 2, 0]);
// elements.should.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// console.log(range.includes(5));


// var Range = function(start, end, step) {
//   /* START SOLUTION */
//   if (start === undefined) {
//     return null;
//   }

//   this.start = start;

//   if (end === undefined) {
//     this.end = this.start;
//   } else {
//     this.end = end;
//   }

//   if (step === undefined) {
//     this.step = (this.start < this.end) ? 1 : -1;
//   } else {
//     this.step = step;
//   }

//   return this;
//   /* END SOLUTION */
// };

// Range.prototype.size = function () {
//   /* START SOLUTION */
//   return Math.floor((this.end - this.start) / this.step) + 1;
//    END SOLUTION
// };

// Range.prototype.each = function (callback) {
//   /* START SOLUTION */
//   if (this.step > 0) {
//     for (var i = this.start; i <= this.end; i += this.step) {
//       callback(i);
//     }
//   } else {
//     for (var i = this.start; i >= this.end; i += this.step) {
//       callback(i);
//     }
//   }
//   /* END SOLUTION */
// };

// Range.prototype.includes = function (val) {
//   /* START SOLUTION */
//   return ((val >= this.start) && (val <= this.end) && (((this.start - val) % this.step) === 0));
//   /* END SOLUTION */
// };


