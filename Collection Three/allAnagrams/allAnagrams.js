/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  /* START SOLUTION */
  var uniqueOutput = {};

  (function anagram (ana, str) {
    if (str === '') { uniqueOutput[ana] = 1; }

    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);

  return Object.keys(uniqueOutput);
  /* END SOLUTION */
};

var allAnagrams = function(string) {
  console.log('input string', string)
  if (string.length === 0) { return ['']; }  

  var result = {};
  // For each letter in string
  string.split('').forEach(function(letter, i) {
    var remainingLetters = string.slice(0, i) + string.slice(i + 1);
    console.log(remainingLetters, string);
    // For each anagram of the remaining letters
    allAnagrams(remainingLetters).forEach(function(anagram) {
      console.log('ANAGRAM', anagram);
      console.log('LETTER', letter)
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};

console.log(allAnagrams('abc'))