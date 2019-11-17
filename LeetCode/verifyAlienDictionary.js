/*In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Note:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are english lowercase letters.
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // If there is 1 or 0 word in the words array, it is valid.
  if (words.length < 2) return true;
 
  // Create a map of the letter and index for fast lookup.
  let orderMap = {};
  for (let i = 0; i < order.length; ++i) {
  	const letter = order[i];
  	orderMap[letter] = i;
  }
 
 	// Loop through words starting at the second one since we need to compare it
 	// with the word before.
  for (let i = 1; i < words.length; ++i) {
  	const word1 = words[i - 1];
  	const word2 = words[i];
  	if (!compareWord(word1, word2, orderMap)) {
  		return false;
  	}
  }
 	
 	return true;
 
};

// Function for comparing whether word2 comes after word1.
function compareWord(word1, word2, orderMap) {
	// If the words are the same, return true since it can't be not valid.
	if (word1 === word2) return true;

	// Loop through the max length of both words.
  for (let i = 0; i < Math.max(word1.length, word2.length); ++i) {
    const charWord1 = word1[i];
    const charWord2 = word2[i];

    // If charWord1 does not exist and charWord2 does, we know word1 < word2.
    if (!charWord1 && charWord2) {
    	return true;
    }
    // If charWord2 does not exist and charWord1 does, we know word1 > word2.
    else if (!charWord2 && charWord1) {
    	return false;
    }
    else if (orderMap[charWord2] < orderMap[charWord1]) {
      return false;
    }
    else if (orderMap[charWord2] > orderMap[charWord1]) {
    	return true;
    }
  }
}


// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
// console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"));
console.log(isAlienSorted(["ubg","kwh"], "qcipyamwvdjtesbghlorufnkzx"));