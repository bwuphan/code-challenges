/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // Create product array from left to right.
  // ex: nums = [1,2,3,4], left = [1,1,2,6]
  let left = [];
  let prodL = 1;
  for (let i = 0; i < nums.length; ++i) {
    left[i] = prodL;
    prodL *= nums[i];
  }

  // Create product array from right to left.
  // ex: right = [24,12,4,1]
  let right = [];
  let prodR = 1;
  for (let i = nums.length - 1; i >= 0; --i) {
    right[i] = prodR;
    prodR *= nums[i];
  }

  // Return array is left * right at that index.
  let returnArr = [];
  for (let i = 0; i < nums.length; ++i) {
    returnArr[i] = right[i] * left[i];
  }

  return returnArr;
};


console.log(productExceptSelf([1,2,3,4]));