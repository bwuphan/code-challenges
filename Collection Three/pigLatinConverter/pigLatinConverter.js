/*jshint expr:true*/

// Write a function that takes an English word as a string and converts it to
// Pig Latin. Your Pig Latin implementation should follow two basic rules: For
// words that begin with consonants, move the first letter to the end of the
// word and add "ay" onto the end. For example:
//
//   "happy" → "appyhay"
//
// For words that begin with vowel sounds, add "ay" to the end of the word.
// For example:
//
//   "duck" → "uckday"
//
//
// Extra credit: Make your function accept a string that contains multiple
// words.
//
// Extra extra credit: Write a function that detects Pig Latin and converts
// it back to English.


var convertToPigLatin = function(string) {
  // Convert the string to an array so it's easier to work with. Split on
  // whitespace.
  string = string.split(/\s/);

  var consonants = /^[b-df-hj-np-tv-z]/;
  var vowels = /^[aeiou]/;
  var punctuation = /.*[.,;:')?!]$/;

  for (var i = 0; i < string.length; i++) {
    var cur = string[i];

    // If the current word starts with a consonant or a vowel, Pig Latinize
    // it. If it starts with a number or punctuation, bail out.
    if (consonants.test(cur)) {
      punctuation.test(cur) ? string[i] = cur.slice(1, cur.length - 2) + cur[0] + 'ay' + cur[cur.length - 1]
                            : string[i] = cur.slice(1) + cur[0] + 'ay';
    } else if (vowels.test(cur)) {
      punctuation.test(cur) ? string[i] = cur.slice(0, cur.length - 2) + 'ay' + cur[cur.length - 1]
                            : string[i] = cur + 'ay';
    }
  }

  return string.join(' ');
};
