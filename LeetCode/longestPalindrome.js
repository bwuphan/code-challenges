/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';

  var centeredPalindrome = function(left, right) {
    let palindrome = '';
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      palindrome = s.slice(left, right + 1);
      left--;
      right++;
    }

    return palindrome;
  }

  for (let i = 0; i < s.length; ++i) {
    let oddPalindrome = centeredPalindrome(i - 1, i + 1) || s[i];
    let evenPalindrome = centeredPalindrome(i, i + 1) || s[i];

    if (oddPalindrome.length > longest.length) longest = oddPalindrome;
    if (evenPalindrome.length > longest.length) longest = evenPalindrome;
  }

  return longest;
};


console.log(longestPalindrome('abba'));
console.log(longestPalindrome('racecar'));
console.log(longestPalindrome('abcda'));