/*
Microsoft Online Assessment

https://leetcode.com/discuss/interview-question/451422/
*/

const fairIndices = (arrayA, arrayB) => {
  const forwardArrA = new Array(arrayA.length);
  const forwardArrB = new Array(arrayB.length);
  const backwardArrA = new Array(arrayA.length);
  const backwardArrB = new Array(arrayB.length);

  let forwardSumA = 0;
  let forwardSumB = 0;
  for (let i = 0; i < arrayA.length; ++i) {
    forwardSumA += arrayA[i];
    forwardSumB += arrayB[i];
    forwardArrA[i] = forwardSumA;
    forwardArrB[i] = forwardSumB;
  }

  let backwardSumA = 0;
  let backwardSumB = 0;
  for (let i = arrayA.length - 1; i >= 0; --i) {
    backwardSumA += arrayA[i];
    backwardSumB += arrayB[i];
    backwardArrA[i] = backwardSumA;
    backwardArrB[i] = backwardSumB;
  }

  let numFairIndices = 0;
  for(let i = 0; i < arrayA.length - 1; ++i) {
    const sumArray = [forwardArrA[i], forwardArrA[i], backwardArrA[i + 1], backwardArrB[i + 1]];
    let match = sumArray.every(sum => sum === sumArray[0]);

    if (match === true)
      numFairIndices++;
  }

  return numFairIndices;
}

console.log(fairIndices([4,-1,0,3], [-2,5,0,3]) === 2)
console.log(fairIndices([2,-2,-3,3],[0,0,4,-4]) === 1)
console.log(fairIndices([4,-1,0,3],[-2,6,0,4]) === 0)
console.log(fairIndices([3,2,6], [4,1,6]) === 0)
console.log(fairIndices([1,4,2,-2,5], [7,-2,-2,2,5]) === 2)



