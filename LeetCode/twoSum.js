/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function findIndices(num1, num2, nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1 || nums[i] === num2) {
      answer.push(i);
    }
    if (answer.length === 2) {
      return answer;
    }    
  }
}


var twoSum = function(nums, target) {
  let copy = [...nums]
  let numbers = copy.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        return findIndices(numbers[i], numbers[j], nums);
      }
    }
  }
};

console.log(twoSum([1,10,25,35,60], 60))