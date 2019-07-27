/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = [];
  let prodL = 1;
  for (let i = 0; i < nums.length; ++i) {
    left[i] = prodL;
    prodL *= nums[i];
  }
  
  let prodR = 1;
  let right = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    right[i] = prodR;
    prodR *= nums[i];
  }

  let returnArr = [];
  for (let i = 0; i < nums.length; ++i) {
    returnArr[i] = right[i] * left[i];
  }
  
  return returnArr;
};