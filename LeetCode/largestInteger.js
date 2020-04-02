/*
Microsoft Online Assessment

https://leetcode.com/discuss/interview-question/406031/

Write a function that, given an array A of N integers, returns the lagest integer K > 0 such that
both values K and -K exisit in array A. If there is no such integer, the function should return 0.

Example 1:

Input: [3, 2, -2, 5, -3]
Output: 3
Example 2:

Input: [1, 2, 3, -4]
Output: 0
*/

const largestInteger = (numbers) => {
  numbers = numbers.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer && numbers[leftPointer] < 0 && numbers[rightPointer] > 0) {
    const negative = numbers[leftPointer];
    const positive = numbers[rightPointer];

    const posNegative = negative * -1;
    if (posNegative === positive)
      return numbers[rightPointer];

    if (posNegative > positive)
      leftPointer++;
    else
      rightPointer--;
  }

  return 0;
}


/*
Solution:
Sort the array. Set left and right pointers and move pointers to the bounds of the array and move
them in until we find 2 matching opposite numbers.

*/

console.log(largestInteger([3, 2, -2, 5, -3]));

console.log(largestInteger([1,2,3,-4]))