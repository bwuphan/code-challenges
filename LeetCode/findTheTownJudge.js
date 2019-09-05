/*
https://leetcode.com/problems/find-the-town-judge/

In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.



Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3


Note:

1 <= N <= 1000
trust.length <= 10000
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= N
*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  // If there is only one person return that person.
  if (N === 1) return N;


  let trustObj = {};
  trust.forEach(el => {
    const person = el[0];
    const pTrust =  el[1];

    // If a person appears in this list, he cannot be judge because a judge trusts no one.
    trustObj[person] = null;

    // If the person to trust is not already in the trustObj, init it to 0.
    if (!(pTrust in trustObj)) {
      trustObj[pTrust] = 0;
    }

    // If the number of trustees is a number, increment.
    if (typeof trustObj[pTrust] === 'number') {
      trustObj[pTrust]++;
    }
  });

  // Loop through to find if there a judge.
  for (let person in trustObj) {
    if (trustObj[person] === N - 1) {
      return person;
    }
  }
  return -1;
};


console.log(findJudge(2, [[1,2]]));
console.log(findJudge(3, [[1,3],[2,3]]));
console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
console.log(findJudge(3, [[1,2],[2,3]]));
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));
console.log(findJudge(2, [[1,2],[2,1]]))
