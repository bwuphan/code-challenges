/*
https://leetcode.com/problems/friends-of-appropriate-ages/

Some people will make friend requests. The list of their ages is given and ages[i] is the age of
the ith person.

Person A will NOT friend request person B (B != A) if any of the following conditions are true:

age[B] <= 0.5 * age[A] + 7
age[B] > age[A]
age[B] > 100 && age[A] < 100
Otherwise, A will friend request B.

Note that if A requests B, B does not necessarily request A.  Also, people will not friend request
themselves.

How many total friend requests are made?

Example 1:

Input: [16,16]
Output: 2
Explanation: 2 people friend request each other.
Example 2:

Input: [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -> 16, 18 -> 17.
Example 3:

Input: [20,30,100,110,120]
Output: 3
Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.


Notes:

1 <= ages.length <= 20000.
1 <= ages[i] <= 120.
*/

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  let result = 0;
  const fullAges = new Array(121);

  ages.forEach(age => {
    if (!fullAges[age]) fullAges[age] = 1;
    else fullAges[age]++;
  });

  for (let ageA = 0; ageA < fullAges.length; ++ageA) {
    const countA = fullAges[ageA];

    if (countA) {
      for (let ageB = 0; ageB < fullAges.length; ++ageB) {
        const countB = fullAges[ageB];
        if (!countB) continue;

        if (ageB <= (0.5 * ageA + 7)) continue;
        if (ageB > ageA) continue;
        if (ageB > 100 && ageA < 100) continue;

        result += (countB * countA);
        if (ageA === ageB) result -= countA;
      }
    }
  }

  return result;
};

console.log(numFriendRequests([16,16]))
console.log(numFriendRequests([16,17,18]))
console.log(numFriendRequests([20,30,100,110,120]));
console.log(numFriendRequests([101,56,69,48,30]))
