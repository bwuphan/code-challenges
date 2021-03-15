/*
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.
Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.



Example 1:

Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.


Constraints:

1 <= time.length <= 6 * 104
1 <= time[i] <= 500

*/

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const remainders = new Array(60);

  time.forEach(t => {
    const remainder = t % 60;
    if (!remainders[remainder]) remainders[remainder] = 1;
    else remainders[remainder]++;
  });

  let count = 0;
  remainders.forEach((remainder, i) => {
    if (remainder) {
      if (i === 30 || i === 0)
        count += ((remainder * (remainder - 1)) / 2);
      else {
        const match = 60 - i;
        if (remainders[match]) {
          count += (remainder * remainders[match]);
          remainders[match] = 0;
        }
      }

      remainders[i] = 0;
    }
  });

  return count;
};

/*
Solution:

Create remainders array with length of 60.
Fill out remainders array where index is the times % 60 and the values are the number of times
those values occur.

Becomes two sum problem.
Special case for remainder of 30 or 0 since those pair with themselves. (Combination formula)
Otherwise match up with matching pair

Time: O(N)
Space: O(1)
*/
console.log(numPairsDivisibleBy60([30,20,150,100,40]))
console.log(numPairsDivisibleBy60([60, 60, 60]))
console.log(numPairsDivisibleBy60([15,63,451,213,37,209,343,319]))