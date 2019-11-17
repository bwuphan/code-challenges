/*
https://leetcode.com/interview/1/

There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off
every second bulb. On the third round, you toggle every third bulb (turning on if it's off or
turning off if it's on). For the i-th round, you toggle every i bulb. For the n-th round, you
only toggle the last bulb. Find how many bulbs are on after n rounds.

Example:

Input: 3
Output: 1
Explanation:
At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off].

So you should return 1, because there is only one bulb is on.
*/


/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  let bulbArr = Array.from({ length: n }, (v, k) => false);
  console.log(bulbArr);
  for (let i = 1; i <= n; ++i) {
    const mod = i;
    for (let j = 0; j < n; ++j) {
      if (j % mod === 0) {
        bulbArr[j] = !bulbArr[j];
      }
    }
    console.log(i, bulbArr);
  }

  return bulbArr;
};

// console.log(bulbSwitch(1));
console.log(bulbSwitch(3));