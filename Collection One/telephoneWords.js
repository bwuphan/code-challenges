// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)
// digitString:
// "0002"  [ "000A", "000B", "000C" ]
// digitString:
// "1123"  [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
let telephonePad = {
  1: ['1'],
  2: ['A','B','C'],
  3: ['D','E','F'],
  4: ['G','H','I'],
  5: ['J','K','L'],
  6: ['M','N','O'],
  7: ['P','Q','R','S'],
  8: ['T','U','V'],
  9: ['W','X','Y','Z'],
  0: ['0']
}

function telephoneWords (digitString) {
  // Write your code here, and
  // return your final answer.
  var traverseNum = function(combinationString, digits) {
    if(digits.length === 0){
      results.push(combinationString);
      return;
    }
    var currentDigit = digits[0];
    var remainDigits = digits.slice(1);
    telephonePad[currentDigit].forEach(function(letter){
      traverseNum(combinationString + letter, remainDigits)
    });
    // digitStringArr.forEach(function(digit){
    //   let letters = telephonePad[digit];
    //   letters.forEach(function(letter){
    //     traverseNum(combinationString + letter, digitCountdown--);
    //   });
    // });
    //
  }
  let results = [];
  let digitStringArr = digitString.split('');
  //create inner function
  //push initial letters into results
  //forEach digitString, call a function that
  traverseNum('', digitStringArr)
  return results;
}

console.log(telephoneWords('1123'))


/*
// Using a subroutine
var telephoneWords = function(digitString) {
  // Save the current words through closure scope
  var words = [];

  var lettersForDigits = function (word, digits) {
    if (digits.length === 0) {
      words.push(word);
      return;
    }
    var remainDigits = digits.slice(1);
    phoneDigitsToLetters[digits[0]].split('')
      .forEach(function(letter) {
        lettersForDigits(word + letter, remainDigits);
      });
  };

  lettersForDigits('', digitString.split(''));
  return words;
};

// Minimal refactor to eliminate subroutine
var telephoneWords = function(digits, word = '', words = []) {
  if (digits.length === 0) {
    return words.concat([word]);
  }
  var remainDigits = digits.slice(1);
  phoneDigitsToLetters[digits[0]].split('')
    .forEach(function(letter) {
      words = telephoneWords(remainDigits, word + letter, words);
    });
  return words;
};

// Further refactor
function telephoneWords (digits, word = '') {
  if (digits.length === 0) {
    return word
  }
  return phoneDigitsToLetters[digits[0]].split('').map(letter => {
    return telephoneWords(digits.slice(1), word + letter)
  }).reduce(flatten, [])
}

function flatten (flat, nest) {
  return flat.concat(nest);
}
*/