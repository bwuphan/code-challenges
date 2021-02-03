/**
 * @param {number[]} height
 * @return {number}
 */

// Dynamic Programming solution

// const trap = function(height) {

//   // Create two max objects from left and right and init both starts to 0.
//   let maxLeft = 0, maxRight = 0;
//   let maxLeftObj = { '0' : 0 };
//   let maxRightObj = {}; maxRightObj[height.length - 1] = 0;

//   // Fill in max left object going from left to right.
//   for (let i = 1; i < height.length; ++i) {
//     if (height[i - 1] > maxLeft) maxLeft = height[i - 1];
//     maxLeftObj[i] = maxLeft;
//   }

//   // Fill in max right object going from right to left.
//   for (let i = height.length - 2; i >= 0; --i) {
//     if (height[i + 1] > maxRight) maxRight = height[i + 1];
//     maxRightObj[i] = maxRight;
//   }

//   let heightSum = 0;
//   // Loop through and get each height unit is the min between max left and right at the same spot.
//   for (let i = 0; i < height.length; ++i) {
//     const hCol = Math.min(maxLeftObj[i], maxRightObj[i]) - height[i];

//     heightSum += hCol >= 0 ? hCol : 0;
//   }

//   return heightSum;
// };


const trap = (height) => {
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = height.length - 1;

  let result = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMax) leftMax = height[left];
      else result += leftMax - height[left];
      left++;
    }
    else {
      if (height[right] > rightMax) rightMax = height[right];
      else result += rightMax - height[right];
      right--;
    }
  }

  return result;
}

/*
Solution:
Iterate thru height by using 2 pointers, left and right.
Left and right increment/decrement respectively based on whether we are looking at left or right.
We determine which side we're going to examine by going with the lesser of height[left] vs height[right]
WHen we examine the side, we either update the left/rightMax if the height is greater than left/rightMax
Or, we add to the result by subtracting the height from the max.

*/

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height));

// Brute Force

// const trap = function(height) {
//   const calcSingleCol = (index, height) => {
//     let hLeft = null;
//     for (let i = index; i >= 0; --i) {
//       if (hLeft === null || height[i] > hLeft) hLeft = height[i];
//     }

//     let hRight = null;
//     for (let i = index; i < height.length; ++i) {
//       if (hRight === null || height[i] > hRight) hRight = height[i];
//     }
//     const returnVal = Math.min(hLeft, hRight) - height[index];
//     return returnVal >= 0 ? returnVal : 0;
//   }

//   let heightSum = 0;
//   for (let i = 0; i < height.length; ++i) {
//     const hLeft = (i - 1) >= 0 ? height[i - 1] : 0;
//     const hRight = (i + 1) < height.length ? height[i + 1] : 0;
//     const hCol = height[i];

//     heightSum += calcSingleCol(i, height);
//   }

//   return heightSum;
// };