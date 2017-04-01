function rockPaperPermutation(roundCount){
  if(roundCount === 0){
    return [];
  }
  let combinations = [];
  let choices = ['r','p','s'];
  function rounds(combinationString){
    if(combinationString.length === roundCount){
      combinations.push(combinationString);
      return;
    }
    choices.forEach(function(choice, index){
      rounds(combinationString + choice)
    });
  }
  rounds('');
  return combinations
}

//Jamie solution

var rps = function(n) {

};

1. What is our measure of 'smaller'
  -smaller values of n
2. base cases
  -n === 0: []
  -n === 1: ['r','p', 's']
3. Examples:
  -n === 2: ['r + r','r + p', 'r + s' ...


//Ivey's Solution

var rockPaperPermutation = function (rounds) {
  // Collecting each permutation here
  var outcomes = [];
  // If we start with 0 rounds, we return the empty array
  if (!rounds) return outcomes;

  var plays = ['r', 'p', 's'];
  // subroutine
  var combos = function(roundsToGo, playedSoFar){
    if( roundsToGo === 0 ){
      outcomes.push( playedSoFar );
      return;
    }
  // incrementing i moves us across the tree
    for(var i=0; i < plays.length; i++ ){
      var currentPlay = plays[i];
    // recursive call moves us down the tree
      combos( roundsToGo-1, playedSoFar + currentPlay );
    };
  };
  // initiate the subroutine
  combos(rounds, '');
  return outcomes;
};