/*
https://leetcode.com/problems/cinema-seat-allocation/

A cinema has n rows of seats, numbered from 1 to n and there are ten seats in each row, labelled
from 1 to 10 as shown in the figure above.

Given the array reservedSeats containing the numbers of seats already reserved, for example,
reservedSeats[i]=[3,8] means the seat located in row 3 and labelled with 8 is already reserved.

Return the maximum number of four-person families you can allocate on the cinema seats. A four-
person family occupies fours seats in one row, that are next to each other. Seats across an aisle
(such as [3,3] and [3,4]) are not considered to be next to each other, however, It is permissible
for the four-person family to be separated by an aisle, but in that case, exactly two people have
to sit on each side of the aisle.



Example 1:



Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4
Explanation: The figure above shows the optimal allocation for four families, where seats mark with blue are already reserved and contiguous seats mark with orange are for one family.
Example 2:

Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
Output: 2
Example 3:

Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
Output: 4
*/


/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  const map = {};
  reservedSeats.forEach(seat => {
    const row = seat[0];
    const col = seat[1];
    if (!(row in map))
      map[row] = new Set();
    map[row].add(col);
  });

  let numFam = 0;

  const checkAvailability = (row, seats) => {
    if (seats.every(num => !map[row].has(num))) {
      numFam++;
      return true;
    }
    return false;
  }

  for (let i = 1; i <= n; ++i) {
    if (map[i]) {

      // Check left most possibility.
      const left = checkAvailability(i, [2,3,4,5]);
      if (!left)
        checkAvailability(i, [4,5,6,7]);

      checkAvailability(i, [6,7,8,9]);
    }
    else {
      numFam += 2;
    }

  }

  return numFam;
};

console.log(maxNumberOfFamilies(n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]) === 4);
console.log(maxNumberOfFamilies(n = 2, reservedSeats = [[2,1],[1,8],[2,6]]) === 2);
console.log(maxNumberOfFamilies(n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]) === 4);
console.log(maxNumberOfFamilies(2, [[1,6],[1,8],[1,3],[2,3],[1,10],[1,2],[1,5],[2,2],[2,4],[2,10],[1,7],[2,5]]) === 1);
