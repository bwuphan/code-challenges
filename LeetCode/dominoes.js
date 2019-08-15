/*
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

 

Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
 

Constraints:

1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9
*/

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let numPairs = 0;
  let dominoesObj = {};
  for (let i = 0; i < dominoes.length; ++i) {
    const currentDom = dominoes[i];
    const revCurrentDom = [...currentDom].reverse();
    const strCur = JSON.stringify(currentDom);
    const strRev = JSON.stringify(revCurrentDom);
    if (strCur in dominoesObj) {
      delete dominoesObj[strCur];
      numPairs++;
    } else if (strRev in dominoesObj) {
      delete dominoesObj[strRev];
      numPairs++;
    } else {
      dominoesObj[strCur] = true;
    }
    console.log(dominoesObj, numPairs);
  }
  return numPairs;
};

console.log(numEquivDominoPairs(
[[1,2],[1,2],[1,1],[1,2],[2,2]]))