/*

A bracket is considered to be any one of the following characters: (, ), {, },
[, or ].
We consider two brackets to be matching if the first element is an open-bracket, e.g., (, {, or [,
and the second bracket is a close-bracket of the same type, e.g., ( and ), [ and ], and { and } are
the only pairs of matching brackets.

Furthermore, a sequence of brackets is said to be balanced if the following conditions are met:
The sequence is empty, or
The sequence is composed of two, non-empty, sequences both of which are balanced, or
The first and last brackets of the sequence are matching, and the portion of the sequence without
the first and last elements is balanced.
You are given a string of brackets. Your task is to determine whether each sequence of brackets is
balanced. If a string is balanced, return true, otherwise, return false
Signature
bool isBalanced(String s)
Input
String s with length between 1 and 1000
Output
A boolean representing if the string is balanced or not
Example 1
s = {[()]}
output: true
Example 2
s = {}()
output: true
Example 3
s = {(})
output: false
Example 4
s = )
output: false
*/


// Add any extra import statements you may need here


// Add any helper functions you may need here


function isBalanced(s) {
  // Write your code here

}










// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printString(str) {
  var out = '["' + str + '"]';
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
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var s_1 = "{[(])}";
var expected_1 = false;
var output_1 = isBalanced(s_1);
check(expected_1, output_1);

var s_2 = "{{[[(())]]}}";
var expected_2 = true;
var output_2 = isBalanced(s_2);
check(expected_2, output_2);

// Add your own test cases here
