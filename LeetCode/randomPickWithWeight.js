/*
https://leetcode.com/problems/random-pick-with-weight/


You are given an array of positive integers w where w[i] describes the weight
of ith index (0-indexed).

We need to call the function pickIndex() which randomly returns an integer in the range
[0, w.length - 1].
pickIndex() should return the integer proportional to its weight in the w array.
For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%)
while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).

More formally, the probability of picking index i is w[i] / sum(w).



Example 1:

Input
["Solution","pickIndex"]
[[[1]],[]]
Output
[null,0]

Explanation
Solution solution = new Solution([1]);
solution.pickIndex(); // return 0. Since there is only one single element on the array the only
option is to return the first element.
Example 2:

Input
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output
[null,1,1,1,1,0]

Explanation
Solution solution = new Solution([1, 3]);
solution.pickIndex(); // return 1. It's returning the second element (index = 1) that has
probability of 3/4.
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 0. It's returning the first element (index = 0) that has
probability of 1/4.

Since this is a randomization problem, multiple answers are allowed so the following outputs can be
considered correct :
[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
and so on.
*/

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  /*
  Create an array that has the sums in increasing order.
  Example: [1,4,1]
  this.sums = [1,5,6]
  this.sum = 6
  */
  if (w) {
    let sum = 0;
    this.sums = w.map((weight, i) => {
      sum += weight;
      return sum;
    });

    this.sum = sum;
  }
  else {
    this.sums = [];
    this.sum = 0;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  // Randomize a number.
  const randomNum = this.sum * Math.random();

  // Binary search through the array.
  let low = 0;
  let high = this.sums.length - 1;
  let midIdx = null;
  while (low < high) {
    midIdx = Math.floor((low + high) / 2);
    // If we found the target.
    // Target would be found if the random num is in between the midpoint and the number before it.
    // Or if the midpoint is at the first index.
    if (randomNum <= this.sums[midIdx] && (midIdx === 0 || randomNum > this.sums[midIdx - 1]))
      return midIdx;

    // If randomNum is higher than the midpoint, increase high.
    // Otherwise, lower the low.
    if (randomNum < this.sums[midIdx])
      high = midIdx - 1;
    else
      low = midIdx + 1;

    // If high is the same as low, we found the target.
    if (high === low)
      return high;
  }

  // Return midpoint in case it hasn't been returned.
  return midIdx
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */


const test = new Solution([1,3,1]);
console.log(test.pickIndex())
console.log(test.pickIndex())
console.log(test.pickIndex())