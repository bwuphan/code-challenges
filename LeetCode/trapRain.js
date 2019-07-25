/**
 * @param {number[]} height
 * @return {number}
 */

// Dynamic Programming solution

const trap = function(height) {

  let maxLeft = 0, maxRight = 0;
  let maxLeftObj = { '0' : 0 };
  let maxRightObj = {}; maxRightObj[height.length - 1] = 0;

  for (let i = 1; i < height.length; ++i) {
    if (height[i - 1] > maxLeft) maxLeft = height[i - 1];
    maxLeftObj[i] = maxLeft;
  }

  for (let i = height.length - 2; i >= 0; --i) {
    if (height[i + 1] > maxRight) maxRight = height[i + 1];
    maxRightObj[i] = maxRight;
  }


  let heightSum = 0;
  for (let i = 0; i < height.length; ++i) {
    const hCol = Math.min(maxLeftObj[i], maxRightObj[i]) - height[i];

    heightSum += hCol >= 0 ? hCol : 0;
  }

  return heightSum;
};


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