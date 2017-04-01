function coinSums (total) {
  // Write your code here, and
  // return your final answer.
  var coins = [1,2,5,10,20,50,100,200];
  // var coins = [200,100,50,20,10,5,2,1]
  var possiblities = 0;
  //create inner recursive function
  function loopThruCoins (coins, change, add){
    var sum = change + add;
    console.log(change + ' + ' + add)
    //if change === total, increment and return
    if( sum === total ) {
      possiblities++;
      return;
    }
    //if change > total, coins.slice off the last one
    else if( sum > total ) {
      change -= add;
      coins = coins.splice(1, coins.length)
    }
    //create a for loop to iterate thru coins
    loopThruCoins(coins, change, coins[0])
    // for (var i = 0; i < coins.length; i++ ) {
    //   loopThruCoins(coins, change, coins[0] );
    // }
  }
  loopThruCoins(coins, 0, 0)
  return possiblities;
}
var coins = [200,100,50,20,10,5,2,1]
console.log(coinSums(17))
var coins = [1,2,5,10,20,50,100,200];
coins = coins.splice(1, coins.length)
// console.log(coins.splice(1, coins.length))
console.log(coins)
/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)
Given a given number of pence, return the possible number of ways someone could make change.

It is possible to make 5 pence in the following ways:

5 * 1p

3 * 1p + 1 * 2p

1 * 1p + 2 * 2p

1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/