/*
Pair Sums
Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within
it which sum to k.

If an integer appears in the list multiple times, each copy is considered to be different; that is,
two pairs are considered different if one pair includes at least one array index which the other
doesn't, even if they include the same values.
Signature
int numberOfWays(int[] arr, int k)
Input
n is in the range [1, 100,000].
Each value arr[i] is in the range [1, 1,000,000,000].
k is in the range [1, 1,000,000,000].
Output
Return the number of different pairs of elements which sum to k.
Example 1
n = 5
k = 6
arr = [1, 2, 3, 4, 3]
output = 2
The valid pairs are 2+4 and 3+3.
Example 2
n = 5
k = 6
arr = [1, 5, 3, 3, 3]
output = 4
There's one valid pair 1+5, and three different valid pairs 3+3 (the 3rd and 4th elements, 3rd and
5th elements, and 4th and 5th elements).

*/

// Add any extra import statements you may need here


// Add any helper functions you may need here


function combination(n, r) {
  function factorial(n) {
    if (n <= 1)
      return 1;

    return n * factorial(n - 1);
  }
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function numberOfWays(arr, k) {
  // Write your code here
  const occurMap = new Map();
  arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; ++i) {
    const num = arr[i];

    const occurences = occurMap.has(num) ? occurMap.get(num) : [i, i];
    let j = i;
    while (j < arr.length && arr[j] === arr[i]) {
      occurences[1] = j;
      j++;
    }
    i = j - 1;
    occurMap.set(num, occurences);
  }

  let results = 0;
  for (let i = 0; i < arr.length; ++i) {
    const num = arr[i];
    const diff = k - num;

    if (num > k || !occurMap.has(diff)) continue;

    const occurences = occurMap.get(diff);
    if (i >= occurences[0] && i <= occurences[1]) {
      const minOccurence = Math.max(i, occurences[0]);
      const numOccurences = occurences[1] - minOccurence;
      results += numOccurences;
    }
    else if (occurences[0] === occurences[1] && i < occurences[0])
      results++;
  }

  return results;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var k_1 = 6;
var arr_1 = [1, 2, 3, 4, 3];
var expected_1 = 2;
var output_1 = numberOfWays(arr_1, k_1);
check(expected_1, output_1);

var k_2 = 6;
var arr_2 = [1, 5, 3, 3, 3];
var expected_2 = 4;
var output_2 = numberOfWays(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
