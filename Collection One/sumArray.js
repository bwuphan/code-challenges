function sumArray (array) {
  // Write your code here, and
  // return your final answer.
  let memo = {};
  let highestSum = -100000;
  var x = 0;
  for(let i = 0; i < array.length; i++){
    for(let j = array.length; j > i; j--){
      let tempArray = array.slice(i, j);
      if(!(JSON.stringify(tempArray) in memo)){
        memo.tempArray = tempArray.reduce(function(sum, current){
        return sum += current;
        }, 0);
        x++
      }
      if(highestSum < memo.tempArray){
        highestSum = memo.tempArray;
      }
    }
  }
  console.log(x)
  return highestSum
}

function sumArray (array) {
  // Write your code here, and
  // return your final answer.
  let highestSum = -100000;
  var x = 0
  for(let i = 0; i < array.length; i++){
    for(let j = array.length; j > i; j--){
      let tempArray = array.slice(i, j);
      x++
      let tempSum = tempArray.reduce(function(sum, current){
        return sum += current;
      }, 0)
      if(tempSum > highestSum){
        highestSum = tempSum;
      }
    }
  }
  console.log(x)
  return highestSum
}

// console.log(sumArray([-7,-6,-9]))
console.log(sumArray([ 1, 2, 3, -6, 4, 5, 6 ]))

// Input Output
// array:
// [ 1, 2, 3 ] 6
// array:
// [ 4, -1, 5 ]  8
// array:
// [ 10, -11, 11 ] 11
// array:
// [1,2,3,-4,5,-4,5,-4,-4,-1]  15

//[-7,-6,-9]


/*
var sumArray = function(array) {
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;

  for(var i = 0; i < array.length; i++) {
    // Add the new number to the current sum
    currentSum += array[i];
    // Record as the largest sum if necessary
    maxSum = Math.max(maxSum, currentSum);
    // If negative, throw out earlier progress
    // and consider intervals starting at this point
    if(currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};
*/