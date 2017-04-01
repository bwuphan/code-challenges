commonCharacters = function(string1, string2){
  const storage2 = string2.split('').reduce(function(update, letter) {
    letter in update && (/^[A-Z]+$/i.test(letter)) ? update[letter]++ : update[letter] = 1;
    return update;
  }, {});
  const duplicateChecker = {};
  return string1.split('').reduce(function(returnString, letter) {
    if (letter in storage2 && !(letter in duplicateChecker) && letter !== ' ') {
      duplicateChecker[letter] = 'woo!';
      returnString += letter;
    }
    return returnString;
  },'');
};

console.log(commonCharacters("Riding on a buffalo makes me more approachable", "so what"))

/*
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')

Returns: 'aeiou'

var should = chai.should();

describe('Common Characters', function(){
  it('returns common characters', function(){
    commonCharacters('abc', 'abc').should.equal('abc');
  });

  it('returns common characters', function(){
    commonCharacters("What is love?", "Baby don't hurt me").should.equal('hatoe');
  });

  it('returns common characters', function(){
    commonCharacters('Riding on a buffalo makes me more approachable', 'so what').should.equal('oash');
  });

  it('returns empty string', function(){
    commonCharacters('', 'No more').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('No more', '').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('', '').should.equal('')
  });
});



var commonCharacters = function(str1, str2) {
  // Basic plan - find the intersection of the characters
  // in each string
  var common = intersection(objectify(str1), objectify(str2));
  // Go through the first string, gather the characters
  // that are in the intersection object
  return str1.split('').reduce(function(result, char){
    if (common[char]) {
    result += char;
    // We don't want repeats, so we need to delete the
    // key from the intersection object after we've used it once
    delete common[char]
  }
  return result;
  }, '');
};

var intersection = function (set1, set2) {
  // Using Object.keys to get an array of the keys from set1
  return Object.keys(set1).reduce(
    function (out, val) {
    // If the letter from set1 is in set2,
    // we add it to our intersection object
      if (val in set2) {
    out[val] = true;
    }
      return out;
    },
  {});
};
// Helper to turn store characters from our strings as
// properties in an object
var objectify = function (str) {
   return str.split('').reduce(function (obj, char) {
     if (char.match(/[a-z]/i)) {
     obj[char] = true;
   }
     return obj;
   }, {});
};

// Refactoring with es6 sets
var commonCharacters = function(str1, str2) {
  // This forms sets from our strings, with unique letters
  var set1 = new Set(str1.replace(/[^a-zA-Z]/g, ‘’));
  var set2 = new Set(str2.replace(/[^a-zA-Z]/g, ‘’));

  // we DO have a guarantee of order in sets
  // the keys come out in the order they were stored
  var intersection = [...set1].filter(letter => {
    set2.has(letter);
  })

  return intersection.join(‘’)
};
*/