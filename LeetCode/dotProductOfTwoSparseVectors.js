/*
https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
Given two sparse vectors, compute their dot product.

Implement class SparseVector:

SparseVector(nums) Initializes the object with the vector nums
dotProduct(vec) Compute the dot product between the instance of SparseVector and vec

A sparse vector is a vector that has mostly zero values, you should store the sparse vector
efficiently and compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse?



Example 1:

Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
Example 2:

Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
Output: 0
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
Example 3:

Input: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
Output: 6


Constraints:

n == nums1.length == nums2.length
1 <= n <= 10^5
0 <= nums1[i], nums2[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  this.nonZeros = {}
  this.length = nums.length

  nums.forEach((n, i) => {
    if (n !== 0) this.nonZeros[i] = n
  })
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
  const vec1 = this.nonZeros
  const vec2 = vec.nonZeros

  let sum = 0
  for (let i = 0; i < this.length; ++i) {
    const num1 = i in vec1 ? vec1[i] : 0
    const num2 = i in vec2 ? vec2[i] : 0

    sum += num1 * num2
  }

  return sum
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

const nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]

let v1 = new SparseVector(nums1);
let v2 = new SparseVector(nums2);
let ans = v1.dotProduct(v2);
console.log(ans)