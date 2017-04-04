const rockPaperPermutation = (rounds) => {
  const results = [];
  const choices = ['rock', 'paper', 'scissors'];
  const recurse = (roundsToGo, permutation) => {
    if (roundsToGo === 0) {
      results.push(permutation);
      return;
    }
    choices.forEach((choice) => {
      const added = permutation.concat(choice);
      recurse(roundsToGo-1, added);
    });
  };
  recurse(rounds, []);
  return results;
};

console.log(rockPaperPermutation(3))
/*
// Note: this first solution returns arrays of
// possible outcomes, while the challenge app is
// looking for strings of possible outcomes.
var rockPaperPermutation = function (rounds) {
  var outcomes = [];
  // return empty array for 0 rounds
  if (!rounds) return outcomes;
  var plays = ['rock', 'paper', 'scissors'];
  // Defining the subroutine
  var combos = function(roundsToGo, playedSoFar){
    // base case, we've gone through n rounds
  // and generated a possible outcome
  if( roundsToGo === 0 ){
      outcomes.push( playedSoFar );
      return;
    }
  // Add each play to the current running "game"
    for(var i=0; i < plays.length; i++ ){
      var currentPlay = plays[i];
    // Decrement the rounds to go and pass each generated
    // game state to our recursive function
      combos( roundsToGo-1, playedSoFar.concat(currentPlay) );
    };
  };
  combos(rounds, []);
  return outcomes;
};

// Cutting out the subroutine, but passing the outcomes array as
// an additional argument to the recursive function
var plays = ['rock', 'paper', 'scissors'];
var rpp = function (rounds, outcomes = []) {
  if (!rounds) return outcomes;
  // Could also just return plays here
  if (!outcomes.length) {
    outcomes = [...plays];
    return rpp(rounds - 1, outcomes);
  }
  // Add each play to each previous game
  // outcome
  let newOutcomes =
  outcomes.map(function(outcome) {
    return plays.map(function(play) {
      return outcome + play
    })
  })
  return rpp(rounds - 1, [].concat.apply([], newOutcomes));
};

// Taking out the extra argument
var plays = ['rock', 'paper', 'scissors'];
var rpp = function (rounds) {
  if (!rounds) return [];
  if (rounds === 1) {
    return plays;
  }
  let newOutcomes =
  rpp(rounds - 1).map(function(outcome) {
    return plays.map(function(play) {
      return outcome + play
    })
  })
  return [].concat.apply([], newOutcomes);
};

// And jazzing it up with some es6
var plays = ['rock', 'paper', 'scissors'];
var rpp = function (rounds) {
  if (!rounds) return [];
  if (rounds === 1) {
    return plays;
  }
  return [].concat.apply([], rpp(rounds-1).map(outcome => {
    return plays.map(play => outcome + play)
  }))
};s

*/