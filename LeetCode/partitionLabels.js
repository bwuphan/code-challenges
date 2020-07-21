/*
https://leetcode.com/problems/partition-labels/solution/

A string S of lowercase letters is given. We want to partition this string into as many parts as
possible so that each letter appears in at most one part, and return a list of integers representing
the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const sArr = S.split('');
  const sArrReverse = [...sArr].reverse();
  lastOccuredObj = sArrReverse.reduce((obj, letter, idx) => {
    if (!(letter in obj)) {
      obj[letter] = S.length - idx - 1;
    }
    return obj;
  }, {});


  let curLastIdx = null;
  let partitionLength = 0; // The length of the partitions for the result.
  return sArr.reduce((arr, letter, i) => {
    // If the curLastIdx is null, we set the curLastIdx to whatever the current last
    // index occured is for the current letter.
    if (curLastIdx === null)
      curLastIdx = lastOccuredObj[letter];

    // If we find a letter that occurs after the current curLastIdx, set the curLastIdx
    // to that.
    if (lastOccuredObj[letter] > curLastIdx)
      curLastIdx = lastOccuredObj[letter];

    // If we are at the curLastIdx, it's time to push a result.
    if (i === curLastIdx) {
      arr.push(partitionLength + 1);
      curLastIdx = null;
      partitionLength = 0;
    } else {
      partitionLength++;
    }
    return arr;
  }, []);
};


/*
Solution:

Create an object that stores the last index where every letter in the string occurs.

Then, we loop through the string and keep track of the current last index of the partition we're working with.
If we reach a letter that has a latter occuring last index than the curLastIdx, set the new curLastIdx to it.

If i is the same as the curLastIdx, then we have a partition.
*/

console.log(partitionLabels("ababcbacadefegdehijhklij"));