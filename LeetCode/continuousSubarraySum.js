/*
https://leetcode.com/problems/continuous-subarray-sum/

Given a list of non-negative numbers and a target integer k, write a function to check if the array
has a continuous subarray of size at least 2 that sums up to a multiple of k, that is, sums up to
n*k where n is also an integer.



Example 1:

Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
Example 2:

Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.


Note:

The length of the array won't exceed 10,000.
You may assume the sum of all the numbers is in the range of a signed 32-bit integer.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const map = {
    0: -1
  };

  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    sum += num;

    if (k !== 0)
      sum = sum % k;

    if (sum in map && i - map[sum] >= 2)
      return true
    else
      map[sum] = i;
  }

  return false;
};

/*
Here is my understanding. Let's focus on a specific input shown below. In a nutshell we are looking
for subarray sum % k equal to 0.

k=6
[23, 2, 4, 6, 5]
If we do accumulated sum, like the approach 2, along with sum[i] % k, we will have the following
two arrays.

accumulated; sum = [23, 25, 29, 35, 40]
sum[i] % 6;  rem = [ 5,  1,  5,  5,  4]
Notice that rem[0] == rem[2] == 5. The way to reason about why matching remainders mean that there
is a subarray with multiple of 6 (k), is the following. If accumulated sum[0] % 6 == 5, that means
that element (e.g. nums[0] is bringing in 5 remainder. And, since we have accumulated array, the
effect of that remainder is 'carried forward' in the 'accumulated sum'.

Down the line, e.g. with rem[2], when we find another 'accumulated sum' with remainder == 5, at
that time if we remove/subtract effect of the nums[0] (which brought us remainder 5), we can get
to remainder == 0. And, that is what we are looking for!

Note that rem[3] is also 5. Since effect of nums[0] is getting carried forward. But based on the
constraint of the problem, e.g. subarray length must be >= 2; that answer is not valid.

*/

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
console.log(checkSubarraySum([23,2,6,4,7], 0))
console.log(checkSubarraySum([0,0], 0))
console.log(checkSubarraySum([23,2,4,6,6], 7))
console.log(checkSubarraySum([0], 1))
console.log(0 % 1)