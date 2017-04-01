function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
  //use recursion
  //create a results array
  var results = [];
  //use inner function
  var traverse = function(arrays){
    //if matrix.length is 0, return
    if(arrays.length === 0){
      return;
    }
    //go thru and add to result and shift off while pushing into array
    results = results.concat(arrays.shift());
    // console.log('first run ',results)
    //add each last element in the rows, popping off while you do
    for(let i = 0; i < arrays.length; i++) {
      // console.log(arrays[i])
      results.push(arrays[i].pop());
    }
    //add in reverse order, popping off while you do
    var toReverse = [];
    toReverse = toReverse.concat(arrays.pop());
    // console.log('toReverse', toReverse)
    results = results.concat(toReverse.reverse());

    //add each first element of the rows, shifting off while you do
    var upReverse = [];
    for(let i = 0; i < arrays.length; i++) {
      upReverse = upReverse.concat(arrays[i].shift());
    }
    // console.log(upReverse)
    results = results.concat(upReverse.reverse());

    //recurse
    traverse(arrays);
  }
  traverse(matrix);
  return results.reduce(function(update, current){
    if(current){
      update.push(current);
    }
    return update
  }, [])
}

var sample =[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]
var sample2 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ];
var sample3 = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ];
var sample4 = [ [ 1, 2, 3, 4, 5, 6, 7 ] ];

console.log('sample 1 ', spiralTraversal(sample))
console.log('sample 2 ', spiralTraversal(sample2))
console.log('sample 3 ', spiralTraversal(sample3))
console.log('sample 4 ', spiralTraversal(sample4))
/*
Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

Examples
Input Output
matrix:
[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]

[ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
matrix:
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ]

[ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
matrix:
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

 [ 1, 2, 3, 4 ]
matrix:
[ [ 1, 2, 3, 4, 5, 6, 7 ] ]

[ 1, 2, 3, 4, 5, 6, 7 ]

*/