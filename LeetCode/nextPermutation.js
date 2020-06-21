/*
https://leetcode.com/problems/next-permutation/

Implement next permutation, which rearranges numbers into the lexicographically next greater
permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order
(ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in
the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

  // Find next decreasing from right.
  let decIdx = null;
  for (let i = nums.length - 1; i >= 0; --i) {
    if (i >= nums.length) continue;
    const curNum = nums[i];
    if (curNum < nums[i + 1]) {
      decIdx = i;
      break;
    }
  }

  // If there is no number decreasing from the left, then the solution is to just sort nums and return.
  if (decIdx === null) return nums.sort((a, b) => a - b);

  // Now, we increase from the decIdx and find where decIdx should be switched with.
  let incIdx = null;
  for (let i = decIdx + 1; i < nums.length; ++i) {
    const nextNum = nums[i + 1];

    // If the next number is less than or equal to the decIdx or is undefined, then we found the right spot.
    // We do less than or equals to because if next num is equal then the cur num is the next largest.
    if (nextNum <= nums[decIdx] || nextNum === undefined) {
      // Swap elements and break.
      incIdx = i;
      let temp = nums[decIdx];
      nums[decIdx] = nums[i];
      nums[i] = temp;
      break;
    }
  }

  // Sort from the dexIdx to the end.
  if (incIdx !== null) {
    const lastSegment = nums.slice(decIdx + 1, nums.length).sort((a, b) => a - b);
    nums.splice(decIdx + 1, nums.length - decIdx);
    lastSegment.forEach(n => nums.push(n));
  }
  console.log(nums);
};
/*
We find the first num to swap by going from the right and finding the first num that is decreasing.
[1,5,8,4,7,6,5,3,1] In this case, it would be 4 because it is the first decreasing from the right.
Next, we go from that number we just found and find the next biggest number from that one.
ie find the next number after 4. In this case, that would be 5.
Then, we swap 1 and 5 so it looks like this [1,5,8,5,7,6,4,3,1].
Last, we sort the numbers after the swap. [1,5,8,5,7,6,4,1,3]

*/
// assert(nextPermutation([1,2,3]), [1,3,2]);
// assert(nextPermutation([3,2,1]), [1,2,3]);
// assert(nextPermutation([1,1,5]), [1,5,1]);
// assert(nextPermutation([1,2]), [2,1]);
assert(nextPermutation([1,3,2]), [2,1,3]);
assert(nextPermutation([1,5,1]), [2,1,3]);
function assert(one, two) {
  console.log(JSON.stringify(one) === JSON.stringify(two));
}