/*

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
var decodeString = function(s) {
  let result = '';
  let curDigits = null;
  let curSubstring = null;
  for (let i = 0; i < s.length; ++i) {
    if (!curDigits) {
      let endOfSubstring;
      for (let j = i; j < s.length; ++j) {
        if (s[j] === ']') {
          endOfSubstring = j;
          break;
        }
      }
      const string = s.slice(i, endOfSubstring + 1);
      const match = string.match(/(\d+)\[(\w+)\]/);
      const k = +match[1];
      const encode = match[2];
      for (let j = 0; j < k; j++) {
        result += encode;
      }
      i = endOfSubstring;
    }
  }

  return result;
};

const decodeString = (s) => {
  for (let i = 0; i < s.length; ++i) {
    if (!isNaN(s[i])) {
      let haveSeenLeftBracket = false;
      for (let j = i; j < s.length; ++j) {
        if (s[j] === '[') {
          haveSeenLeftBracket = true;
        }
        else if (haveSeenLeftBracket && !isNaN(s[j])) {
          const sub = decodeString(s.slice(j));
          s = s
        }
        if (s[j] === ']') {
          break;
        }
      }
    }
  }
}

function spliceSlice(str, index, count, add) {
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index;
    if (index < 0) {
      index = 0;
    }
  }

  return str.slice(0, index) + (add || "") + str.slice(index + count);
}

console.log(decodeString("3[a]2[bc]") === 'aaabcbc');
console.log(decodeString("3[a2[c]]") === "accaccacc");
console.log(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");
