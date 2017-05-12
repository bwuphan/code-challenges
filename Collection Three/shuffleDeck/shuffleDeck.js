/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

const swapCards = (idx1, idx2, array) => {
  const tempVal = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tempVal;
};

const shuffleDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const index1 = Math.floor(Math.random() * 52);
    const index2 = Math.floor(Math.random() * 52);
    if (index1 !== index2) {
      swapCards(index1, index2, deck);
    };
  };
  return deck;
};

const test = orderedDeck();
console.log(test);
const shuffled = shuffleDeck(test);
console.log(shuffled)
// var shuffleDeck = function(deck) {
//   /* START SOLUTION */
//   // Constant space (in-place) solution
//   var swap = function (a, b) {
//     var temp = deck[a];
//     deck[a] = deck[b];
//     deck[b] = temp;
//   };
//   // we shuffle into the front of the array
//   // i is the first index of the un-shuffled portion
//   for (var i = 0; i < deck.length; i++) {
//     // select a random card from the un-shuffled portion
//     var pick = i + Math.floor(Math.random() * (deck.length - i));
//     // swap that card with the first un-shuffled card
//     swap(i, pick);
//     // since the pick is selected randomly each time, the swap is not biasing
//   }
//   return deck;
//   /* ELSE
//   // Your code here
//   END SOLUTION */
// };

// // Ordered deck generator provided for your testing convenience
// // (You may alter this function, but an unaltered copy will be used for tests.)
// var orderedDeck = function() {
//   var suits = [ '♥', '♣', '♠', '♦' ];
//   var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
//   var deck = [];

//   suits.forEach(function(suit) {
//     values.forEach(function(value) {
//       deck.push(value + suit);
//     });
//   });

//   return deck;
// };