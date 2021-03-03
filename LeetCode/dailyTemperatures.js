/*
https://leetcode.com/problems/daily-temperatures/

Given a list of daily temperatures T, return a list such that, for each day in the
input, tells you how many days you would have to wait until a warmer temperature.
If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each
temperature will be an integer in the range [30, 100].
*/


/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  const result = T.map(() => 0);

  T.forEach((temp, i) => {
    let peeked = stack[stack.length - 1];

    if (peeked && temp > peeked[0]) {
      while (peeked && temp > peeked[0]) {
        result[peeked[1]] = i - peeked[1];
        stack.pop();
        peeked = stack[stack.length - 1];
      }
      stack.push([temp, i]);
    }
    else stack.push([temp, i]);
  });


  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))