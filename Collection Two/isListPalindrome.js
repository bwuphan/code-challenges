// Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

// Given a singly linked list of integers, determine whether or not it's a palindrome.

// Example

// For l = [0, 1, 0], the output should be
// isListPalindrome(l) = true;
// For l = [1, 2, 2, 3], the output should be
// isListPalindrome(l) = false.
// Input/Output

// [time limit] 4000ms (js)
// [input] linkedlist.integer l

// A singly linked list of integers.

// Guaranteed constraints:
// 0 ≤ list size ≤ 5 · 105,
// -109 ≤ element value ≤ 109.

// [output] boolean

// Return true if l is a palindrome, otherwise return false.
function isListPalindrome(l) {
  let node = l;
  let array = [];
  while (node) {
    array.push(node);
    node = node.next;
  }
  const half = Math.floor(array.length / 2);
  for (var i = 0; i < half; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


console.log(isListPalindrome([1, 2, 2, 3]))
console.log(isListPalindrome([1, 2, 2, 1]))
console.log(isListPalindrome([1, 2, 3, 2, 1]))
console.log(isListPalindrome([]))