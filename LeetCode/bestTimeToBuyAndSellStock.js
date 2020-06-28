/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one
share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const maxArr = new Array(prices.length);
  let curMax = null;
  for (let i = prices.length - 1; i >= 0; --i) {
    if (curMax === null || prices[i] > curMax)
      curMax = prices[i];
    maxArr[i] = curMax;
  }

  let maxDiff = null;
  prices.forEach((price, i) => {
    diff = maxArr[i] - price;
    if (maxDiff === null || diff > maxDiff)
      maxDiff = maxArr[i] - price;
  });

  return maxDiff;
};

/*
Solution: Make one pass thru to create a max price arr from right to left.

Then, make a second pass thru from left to right comparing the max price to the current price.
*/


console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))