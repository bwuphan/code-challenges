/*
https://leetcode.com/problems/decode-string/

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is
being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are
well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are
only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/


/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  let decodedString = '';

  for (let i = 0; i < s.length; ++i) {
    const c = s[i];

    if (!isNaN(c)) {
      let digitBegin = i;
      // Get digits.
      while (s[i] !== '[')
        i++;
      // K is the number of times we're going to repeat.
      const k = +s.slice(digitBegin, i);
      // Count the first left bracket as 1. string begins after the bracket.
      const stringBegin = i + 1;
      i++;
      // Keep a count so we can know when we have equal number of opening and closing brackets.
      let count = 1;

      // Get end of encoded string.
      while (count !== 0) {
        if (s[i] === '[')
          count++;
        else if (s[i] === ']')
          count--;
        i++;
      }
      // Decrement i to bring it back to the last character, a ].
      i--;
      const recurseDecoded = decodeString(s.slice(stringBegin, i));

      // Repeat the adding of the recursedDecoded string by the number of K times.
      for (let j = 0; j < k; ++j)
        decodedString += recurseDecoded;
    }
    else
      decodedString += c;
  }

  return decodedString;
}



console.log(decodeString("3[a]2[bc]") === 'aaabcbc');
console.log(decodeString("3[a2[c]]") === "accaccacc");
console.log(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");
