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
  if (amount === 0)
    return 0;

  coins = coins.sort((a, b) => b - a);
  let fewestMoves = null;

  const movesObj = {};
  const recurse = (amount, moves) => {
    if (amount < 0 || movesObj[amount] === false)
      return false;

    if (amount === 0) {
      if (fewestMoves === null || moves < fewestMoves)
        fewestMoves = moves;
      return moves;
    }

    if (movesObj[amount] || amount === 0) {
      moves = moves + movesObj[amount];
      if (fewestMoves === null || moves < fewestMoves)
        fewestMoves = moves;
      return moves;
    }

    let minMoves = null;
    coins.forEach(coin => {
      const totMoves = recurse(amount - coin, moves + 1);
      if (totMoves) {
        const numMoves = totMoves - moves;
        if (minMoves === null || numMoves < minMoves)
          minMoves = numMoves;
      }
    });

    if (minMoves)
      movesObj[amount] = minMoves;
    else
      movesObj[amount] = false;
  }

  recurse(amount, 0);
  return fewestMoves ? fewestMoves : -1;
};

module.exports = {
  coinChange
}