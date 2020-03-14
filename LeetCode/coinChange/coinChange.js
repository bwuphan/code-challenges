/*
https://leetcode.com/problems/coin-change/

You are given coins of different denominations and a total amount of money amount. Write a function
to compute the fewest number of coins that you need to make up that amount. If that amount of money
cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let numMoves = 0;
  coins = coins.sort((a, b) => b - a);
  let coinIdx = 0;
  console.log('COINS', coins);
  while (amount > 0 && coinIdx < coins.length) {
    console.log(amount, coinIdx, numMoves);
    const curCoin = coins[coinIdx];
    if (curCoin <= amount) {
      amount -= curCoin;
      numMoves++;
    }
    else {
      coinIdx++;
    }
  }

  return amount === 0 ? numMoves : -1;
};

module.exports = {
  coinChange
}