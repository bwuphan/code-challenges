function arrayception (array) {
  // Write your code here, and
  // return your final answer.
  var deepestDepth = 0;
  const recurseArr = (arr, currentDepth) => {
    arr.forEach((element) => {
      if (!Array.isArray(element)) {
        if (currentDepth + 1 > deepestDepth) {
          deepestDepth = currentDepth;
        }
      } else {
        recurseArr(element, currentDepth + 1)
      }
    });
  }
  recurseArr(array, 1);
  return deepestDepth
}

var example = [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ];
var example2 = [ [ 5 ], [ [ ] ] ]
console.log(arrayception(example))
console.log(arrayception(example2))

/*
function arrayception(array, curDepth = 0, maxDepth = 0){
  array.forEach(function(element){
    if (Array.isArray(element)){
    // This item's max depth is equal to the deepest
    // nested Depth of it's elements
      maxDepth = arrayception(element, curDepth+1, maxDepth);
    } else {
    // Count the current level
      curDepth++;
    // See if we have a new max
      maxDepth = Math.max(curDepth, maxDepth);
    // Reset for next element in for loop
      curDepth--;
    }
  });


  return maxDepth;
}
*/

/*
//O I C E
I: containing array with nested arrays
O: interger saying the deepest level of array
C: No time or space constraints
E: empty array


[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]

//iterate thru the arrays, every time I stop, go deepest level, if it is greater then increment

at the start if it is an array, start the counter at 1
[
[10, 20]  ===> 2

 [ [30, [40] ] ] ===> 3 + 1 === 4
]

when i get the 4 i would compare that with 3,
since 4 is greater, then 4 is my new deepest level


//create an outer function

  //if typeof the input, is array, start the counter at 1

  //if length of this array is 1, then return 1

  //create an array to store all the depths

  //subroutine starts here, pass in the array and the number of depths

    //iterate thru array,

      //if any element is an array, then I recurse thru and pass in current number of depths

    //store the depth in the storage array

    //return

  //the subroutine function, pass in original array plus 1

  //return the maximum of the array

*/