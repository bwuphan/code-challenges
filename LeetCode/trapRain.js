/**
 * @param {number[]} height
 * @return {number}
 */

const trap = function(height) {
  const calcSingleCol = (index, height) => {
    let hLeft = null;
    for (let i = index; i >= 0; --i) {
      if (hLeft === null || height[i] > hLeft) hLeft = height[i];
    }

    let hRight = null;
    for (let i = index; i < height.length; ++i) {
      if (hRight === null || height[i] > hRight) hRight = height[i];
    }
    const returnVal = Math.min(hLeft, hRight) - height[index];
    return returnVal >= 0 ? returnVal : 0;
  }

  let heightSum = 0;
  for (let i = 0; i < height.length; ++i) {
    const hLeft = (i - 1) >= 0 ? height[i - 1] : 0;
    const hRight = (i + 1) < height.length ? height[i + 1] : 0;
    const hCol = height[i];

    heightSum += calcSingleCol(i, height);
  }

  return heightSum;
};