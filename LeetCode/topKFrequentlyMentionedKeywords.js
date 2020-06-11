/*
https://leetcode.com/discuss/interview-question/542597/


Given a list of reviews, a list of keywords and an integer k. Find the most
popular k keywords in order of most to least frequently mentioned.

The comparison of strings is case-insensitive.
Multiple occurances of a keyword in a review should be considred as a single mention.
If keywords are mentioned an equal number of times in reviews, sort alphabetically.

Example 1:

Input:
k = 2
keywords = ["anacell", "cetracular", "betacellular"]
reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
]

Output:
["anacell", "betacellular"]

Explanation:
"anacell" is occuring in 2 different reviews and "betacellular" is only occuring in 1 review.
Example 2:

Input:
k = 2
keywords = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]

Output:
["betacellular", "anacell"]

Explanation:
"betacellular" is occuring in 3 different reviews. "anacell" and "deltacellular"
are occuring in 2 reviews, but "anacell" is lexicographically smaller.
*/


const topKKeywords = (k, keywords, reviews) => {
  // Create a map where the key is the keyword to lower case and the value is its number of occurences.
  const occurMap = {};
  keywords.forEach(word => {
    occurMap[word.toLowerCase()] = 0;
  });

  reviews.forEach(review => {
    // Create a set of unique words in the review (separated from their punctuation).
    const words = new Set(review.replace(/[^\w\s]|_/g, ($1) => ' ' + $1 + ' ').split(' ').map(word => word.toLowerCase()));

    for (let word in occurMap) {
      if (words.has(word))
        occurMap[word]++;
    }
  });

  // Sort the keywords by their number of occurences and if that is equal, sort alphabetically ascending.
  return keywords
    .slice() // Create copy of keywords.
    .sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();

      if (occurMap[a] > occurMap[b])
        return -1;
      else if (occurMap[a] < occurMap[b])
        return 1;
      else {
        if (a < b)
          return -1;
        else
          return 1;
      }
    })
    .slice(0, k);
}

console.log(topKKeywords(k = 2,
keywords = ["betacellular", "cetracular", "deltacellular", "eurocell", "anacell"],
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]
));