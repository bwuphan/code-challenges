/*

Slow Sums
Suppose we have a list of N numbers, and repeat the following operation until we're left with only
a single number: Choose any two numbers and replace them with their sum. Moreover, we associate a
penalty with each operation equal to the value of the new number, and call the penalty for the
entire list as the sum of the penalties of each operation.

For example, given the list [1, 2, 3, 4, 5], we could choose 2 and 3 for the first operation, which
would transform the list into [1, 5, 4, 5] and incur a penalty of 5. The goal in this problem is to
find the worst possible penalty for a given input.

Signature:
int getTotalTime(int[] arr)
Input:
An array arr containing N integers, denoting the numbers in the list.
Output format:
An int representing the worst possible total penalty.
Constraints:
1 ≤ N ≤ 10^6
1 ≤ Ai ≤ 10^7, where *Ai denotes the ith initial element of an array.
The sum of values of N over all test cases will not exceed 5 * 10^6.
Example
arr = [4, 2, 1, 3]
output = 26
First, add 4 + 3 for a penalty of 7. Now the array is [7, 2, 1]
Add 7 + 2 for a penalty of 9. Now the array is [9, 1]
Add 9 + 1 for a penalty of 10. The penalties sum to 26.
*/




// Add any extra import statements you may need here


// Add any helper functions you may need here


function getTotalTime(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  let penalty = 0;
  for (let i = arr.length - 1; i >= 0; --i) {
    const num1 = arr[i];
    const num2 = arr[i - 1];
    if (num2 !== undefined) {
      const sum = num1 + num2;
      arr[i - 1] = sum;
      penalty += sum;
      arr.pop();
    }
  }
  return penalty;
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

var arr_1 = [4, 2, 1, 3];
var expected_1 = 26;
var output_1 = getTotalTime(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 3, 9, 8, 4];
var expected_2 = 88;
var output_2 = getTotalTime(arr_2);
check(expected_2, output_2);

// Add your own test cases here
