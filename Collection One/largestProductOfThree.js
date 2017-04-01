function largestProductOfThree (array) {
  // Write your code here, and
  // return your final answer.
  const allNegatives = array.reduce((bool, element) =>{
    if (element > 0) {
      bool = false;
    }
    return bool;
  }, true);
  let newArr = [].concat(array);

  if (!allNegatives) {
    newArr = array.sort((a,b) => b - a);
    const bottoms = [].concat([newArr[newArr.length-2], newArr[newArr.length-1]]);
    const alternateArr = [].concat(newArr);
    let bigNegatives = 0;

    for (let i = 0; i < bottoms.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (bottoms[i] * -1 > alternateArr[j]) {
          alternateArr.splice(j, 1, bottoms[i]);
          bigNegatives++;
          break;
        }
      }
    }
    if (bigNegatives >= 2) {
      newArr = alternateArr;
    }
  } else {
    newArr = array.sort();
  }

  return newArr.slice(0,3).reduce((product, num)=>{
    return product *= num;
  }, 1);
};



const arr = [ -5, -1, -3, -2, -4 ];
console.log(largestProductOfThree(arr));
console.log(arr)
var two = [...arr].splice(1,1)
// two.splice(1,1)
console.log(arr);
console.log(two)

/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

Examples
Input Output
array:
[ 2, 1, 3, 7 ]  42
array:
[ 0, 2, 3 ] 0



Solution
// Time complexity: n*log(n)

// If we implemented radix sort, TC would be n*k
// where k is the number of digits in the
// largest number (ie. 9000 has 4 digits)
// sorting numbers <= 9999 has a TC of 4n

// Takeaway: Radix sort beats n*log(n) algorithms
// when k < log(n)
var largestProduct = function(array) {
  // We make a copy because sort is done in place
  // and mutates the array
  var arrayCopy = array.slice().sort(sortAscending);
  var n = arrayCopy.length;

  var lastProduct =
    arrayCopy[n-1] * arrayCopy[n-2] * arrayCopy[n-3];
  // Handling negative numbers
  var firstProduct =
    arrayCopy[n-1] * arrayCopy[0] * arrayCopy[1];

  return Math.max(firstProduct, lastProduct);
};
// Without a custom sorting function, JS will sort
// alphabetically (meaning 99 > 1111)
var sortAscending = function(a, b) {
  return a - b;
};


// Radix Sort resources:
// Learn about it:
// http://www.geeksforgeeks.org/radix-sort/
// See it in action:
// https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

*/