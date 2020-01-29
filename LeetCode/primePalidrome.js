/*
https://leetcode.com/problems/prime-palindrome/

Find the smallest prime palindrome greater than or equal to N.

Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1.

For example, 2,3,5,7,11 and 13 are primes.

Recall that a number is a palindrome if it reads the same from left to right as it does from right
to left.

For example, 12321 is a palindrome.



Example 1:

Input: 6
Output: 7
Example 2:

Input: 8
Output: 11
Example 3:

Input: 13
Output: 101


Note:

1 <= N <= 10^8
The answer is guaranteed to exist and be less than 2 * 10^8.
Accepted
14,469
Submissions
61,500
*/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let neg = false;
  if (x < 0) {
    neg = true;
    x *= -1;
  }
  let newX = x
    .toString()
    .split('')
    .reverse()
    .join('');


  newX = +newX;

  if (neg === true) newX *= -1;

  return (newX < (Math.pow(2, 31) - 1) && newX > Math.pow(-2, 31)) ? newX : 0;

};



const isPrime = num => {
    const limit = Math.sqrt(num)
    for(let i = 2; i <= limit; ++i)
        if(num % i === 0) return false;

    return true;
}

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
  if (N === 1) N++;

  while (true) {
    if (N === reverse(N) && isPrime(N)) {
      return N;
    }
    N++;

    if (10000000 < N && N < 100000000)
        N = 100000000;
  }


};

console.log(primePalindrome(13))


