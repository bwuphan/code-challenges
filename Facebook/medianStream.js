/*

Median Stream
You're given a list of n integers arr[0..(n-1)]. You must compute a list output[0..(n-1)] such that,
for each index i (between 0 and n-1, inclusive), output[i] is equal to the median of the elements
arr[0..i] (rounded down to the nearest integer).

The median of a list of integers is defined as follows. If the integers were to be sorted, then:
If there are an odd number of integers, then the median is equal to the middle integer in the sorted
order.
Otherwise, if there are an even number of integers, then the median is equal to the average of the
two middle-most integers in the sorted order.
Signature
int[] findMedian(int[] arr)
Input
n is in the range [1, 1,000,000].
Each value arr[i] is in the range [1, 1,000,000].
Output
Return a list of n integers output[0..(n-1)], as described above.
Example 1
n = 4
arr = [5, 15, 1, 3]
output = [5, 10, 5, 4]
The median of [5] is 5, the median of [5, 15] is (5 + 15) / 2 = 10, the median of [5, 15, 1] is 5,
and the median of [5, 15, 1, 3] is (3 + 5) / 2 = 4.
Example 2
n = 2
arr = [1, 2]
output = [1, 1]
The median of [1] is 1, the median of [1, 2] is (1 + 2) / 2 = 1.5 (which should be rounded down to
1).
*/

// Add any extra import statements you may need here


// Add any helper functions you may need here


function findMedian(arr) {
  // Write your code here

}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [5, 15, 1, 3];
var expected_1 = [5, 10, 5, 4];
var output_1 = findMedian(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [2, 3, 4, 3, 4, 3];
var output_2 = findMedian(arr_2);
check(expected_2, output_2);

// Add your own test cases here
