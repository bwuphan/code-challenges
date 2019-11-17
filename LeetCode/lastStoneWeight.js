/*
https://leetcode.com/problems/last-stone-weight/

We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have
weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no
stones left.)



Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.


Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (!stones.length) return null;

  stonesCpy = [...stones].sort((a, b) => a - b);


  for (let i = stonesCpy.length - 1; stonesCpy.length > 1; --i) {
    const bigger = stonesCpy[i];
    const smaller = stonesCpy[i - 1];

    const diff = bigger - smaller;
    if (diff === 0) {
      stonesCpy.pop();
      stonesCpy.pop();
      --i;
    }
    else {
      stonesCpy[i - 1] = diff;
      stonesCpy.pop();
    }
    stonesCpy = stonesCpy.sort((a, b) => a - b);
  }
  return stonesCpy.length === 1 ? stonesCpy[0] : 0;
};


// console.log(lastStoneWeight([2,7,4,1,8,1]))
// console.log(lastStoneWeight([1,3]))
console.log(lastStoneWeight([10,10,7,2]))