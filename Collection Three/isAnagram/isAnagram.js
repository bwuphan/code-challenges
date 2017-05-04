/**
 * Modify the String prototype to add a new method `isAnagram`.
 * `isAnagram` takes a single string argument. It returns true if that string
 * is an anagram of the string it was called on, and false otherwise.
 *
 * Example:
 *  ("roasting").isAnagram("organist"); // true
 *  ("presence").isAnagram("presents"); // false
 *
 * Anagrams should ignore spaces, punctuation, and capitalization:
 *  ("Quid est veritas?").isAnagram("Est vir qui adest."); // true
 *
 * Extra credit: It is bad practice to extend a native prototype with enumerable
 * properties. Make your isAnagram method non-enumerable.
 *
 * Extra extra credit: What is the complexity of your method in time and space?
 * There is an algorithm that uses O(n) time and O(1) space.
 *
 */

String.prototype.isAnagram = function(string) {
  // TODO: Your code here!
  /* START SOLUTION */
  // Normalize the strings
  // (This allows numerals as well. Do numerals count?)
  var thisString = this.replace(/[^\w]/g, '').toUpperCase();
  var testString = string.replace(/[^\w]/g, '').toUpperCase();

  // Check lengths first
  if (thisString.length !== testString.length) {
    return false;
  }
  // A word is not its own anagram
  if (thisString === testString) {
    return false;
  }
  // Use an array to keep track of which letters have been found
  var testLetters = testString.split('');
  for (var i = 0; i < thisString.length; i++) {
    var index = testLetters.indexOf(thisString[i]);
    if (index > -1) {
      delete testLetters[index];
    } else {
      return false;
    }
  }
  return true;
  /* END SOLUTION */
};

/* START SOLUTION */
// For extra credit!

// The other solution is in O(n) space.
// This is the constant space solution:
// (there is no other reason to like it)
String.prototype.isAnagram = function(string) {
  // never will have more than 26 letters
  var letterCounts = {};
  var i;
  var j;
  // Count up the letters in the subject string
  for (i = 0; i < this.length; i++) {
    if (this[i].match(/\w/)) {
      var key = this[i].toUpperCase();
      letterCounts[key] = letterCounts[key] ? letterCounts[key] + 1 : 1;
    }
  }
  // Count down the letters in the test string, short circuit if we can't
  for (i = 0; i < string.length; i++) {
    if (string[i].match(/\w/)) {
      var key = string[i].toUpperCase();
      if (!letterCounts[key]) {
        return false;
      } else {
        letterCounts[key] -= 1;
      }
    }
  }
  // Check for any unaccounted-for letters
  for (i in letterCounts) {
    if (letterCounts[i]) {
      return false;
    }
  }
  // We may have an anagram! But we still need to check that they're not identical.
  // We already know that both strings contain the same number of letters,
  // so we just have to look for a difference in letter order
  var regexIndexOf = function (str, regex, index) {
    // This iterates each string only once, so still in O(n)
    while (index < str.length && !str[index].match(regex)) { index++; }
    return index === str.length ? -1 : index;
  };
  // Find the first letter
  i = regexIndexOf(this, /\w/, 0);
  j = regexIndexOf(string, /\w/, 0);
  while (i !== -1 && j !== -1) {
    // If this letter is not the same, they must be different and it's an anagram
    if (this[i].toUpperCase() !== string[j].toUpperCase()) {
      return true;
    }
    i = regexIndexOf(this, /\w/, i + 1);
    j = regexIndexOf(string, /\w/, j + 1);
  }
  // If the strings have ended, they must be identical
  return false;
};

// Make it non-enumerable
Object.defineProperty(String.prototype, 'isAnagram', {
  value: String.prototype.isAnagram,
  enumerable: false
});
/* END SOLUTION */
