/*
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s
and removing them causing the left and the right side of the deleted substring to concatenate
together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.



Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"


Constraints:

1 <= s.length <= 10^5
2 <= k <= 10^4
s only contains lower case English letters.
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  if (!s) return '';

  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];

    const peeked = stack[stack.length - 1];
    if (peeked) {
      // If we find enough duplicates, pop.
      if (peeked[0] === char && peeked[1] + 1 >= k) stack.pop();
      // Else if the char matches the last char, increment count.
      else if (peeked[0] === char) peeked[1]++;
      // Else, push to stack.
      else stack.push([char, 1]);
    }
    else stack.push([char, 1]);
  }

  // Build string.
  let result = '';
  stack.forEach(tuple => {
    for (let i = 0; i < tuple[1]; ++i)
      result += tuple[0];
  });

  return result;
};

console.log(removeDuplicates(s = "deeedbbcccbdaa", k = 3))
console.log(removeDuplicates(s = "pbbcggttciiippooaais", k = 2))
