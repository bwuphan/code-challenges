/*
https://leetcode.com/problems/powx-n/

Implement pow(x, n), which calculates x raised to the power n (i.e. xn).



Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25


Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // If less than 0, rearange to 1 / x.
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) result *= x; // If odd, multiply it by itself once so it's even again.
    x *= x; // Basically squaring it here.
    n = Math.floor(n / 2); // Need math.floor so it's a round number.
  }

  return result;
};

/*
Solution:

Works because x^n = (x^(n /2))^2
We are going to iteratively do this

Example: 3^11
first iteration:
odd, so result = 3
x = 9
n = 5

2:
odd so multiple result by x. 3 * 9 = 27
x = 81
n = 2

3:
x = 81 * 81 = 6561
n = 1

4:
odd so multiply result by x. 27 * 6561
Doesnt matter anymore because we have our result.
*/

console.log(myPow(2.00000, 10));
// console.log(myPow(2.00000, -2));
console.log(myPow(3, 11))
