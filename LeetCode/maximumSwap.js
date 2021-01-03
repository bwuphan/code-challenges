/*
https://leetcode.com/problems/maximum-swap/

Share
Given a non-negative integer, you could swap two digits at most once to get the maximum valued
number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap.
Note:
The given number is in the range [0, 108]
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const maxFromRight = new Map();
  const numArray = num.toString().split('').map(n => +n);

  let maxObj = null;
  for (let i = numArray.length - 1; i >= 0; --i) {
    const curNum = numArray[i];
    if (maxObj === null || curNum > maxObj.max) {
      maxObj = { max: curNum, idx: i };
      maxFromRight.set(i, maxObj);
    }
    else maxFromRight.set(i, maxObj)
  }

  for (let i = 0; i < numArray.length; ++i) {
    const curNum = numArray[i];
    const curMax = maxFromRight.get(i);

    if (curNum < curMax.curMax) {
      const temp = numArray[curMax.idx];
      numArray[curMax.idx] = curNum;
      numArray[i] = temp;

      return numArray.join('');
    }
  }

  return num;
};


console.log(maximumSwap(2736))
console.log(maximumSwap(9973))

console.log(maximumSwap(887873))
console.log(maximumSwap(1993))