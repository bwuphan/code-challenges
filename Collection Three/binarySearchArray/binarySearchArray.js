/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */


const binarySearch = (array, target) => {
  const searched = {};
  console.log(array.length)
  const subroutine = (low, high) => {
    console.log('low', low);
    console.log('high', high)
    const midIndex = Math.floor((low + high) / 2);
    if (array[midIndex] === target) {
      console.log('done', midIndex)
      return midIndex;
    };
    if (low === high) {
      return -1;
    }
    if (target < array[midIndex]) {
      return subroutine(low, midIndex - 1);
    } else {
      return subroutine(midIndex + 1, high);
    }
  };
  return subroutine(0, array.length - 1)
};
var arr = [0,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400,4500,4600,4700,4800,4900]
console.log(binarySearch(arr, 1700))

// var binarySearch = function (array, target) {
//   /* START SOLUTION */
//   var sub = function (low, high) {
//     // If we are done, we haven't found the target.
//     if (high === low) { return null; }

//     // Find the middle point.
//     var mid = Math.floor((high - low) / 2) + low;

//     // See if we found the target.
//     if (array[mid] === target) {
//       return mid;

//     // Second check to see if we haven't found the target.
//     } else if (low === high - 1) {
//       return null;

//     // If not, decide which half to recurse on.
//     } else if (array[mid] > target) {
//       return sub(low, mid);
//     } else {
//       return sub(mid, high);
//     }
//   };

//   // Do the recursion.
//   return sub(0, array.length);
//   /* END SOLUTION */
// };


