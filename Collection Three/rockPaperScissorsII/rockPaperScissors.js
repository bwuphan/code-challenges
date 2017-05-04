/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Example:
*   [
*     [ // one possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'scissors' // round 3
*     ],
*     [ // next possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'rock'     // round 3
*     ],
*   etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (/* START SOLUTION */rounds/* END SOLUTION */) {
  // TODO: your solution here
  /* START SOLUTION */
  rounds = rounds || 3;
  var outcomes = [];

  var plays = ['rock', 'paper', 'scissors'];

  var combos = function(roundsToGo, playedSoFar) {
    if ( roundsToGo === 0 ) {
      outcomes.push( playedSoFar );
      return;
    }

    for ( var i = 0; i < plays.length; i++ ) {
      var currentPlay = plays[i];
      combos( roundsToGo - 1, playedSoFar.concat(currentPlay) );
    }
  };
  combos( rounds, [] );

  return outcomes;
  /* END SOLUTION */
};
