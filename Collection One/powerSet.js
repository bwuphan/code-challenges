function powerSet (string) {
  // Write your code here, and
  // return your final answer.
  var strArr = string.split('');
  var unique = strArr.reduce(function(obj, letter) {
    if (!(letter in obj)) {
      obj[letter] = true;;
    }
    return obj;
  }, {});
  unique = Object.keys(unique).join('');

  //create a subroutine, pass in array

  return (function recurse(index, string) {
    if (index >= unique.length) {
      return [string];
    } else {
      var include = recurse(index + 1, string);
      var exclude = recurse(index + 1, unique[index] + string);
      return include.concat(exclude);
    }
  })(0, '').sort();
    //if array length.length === 0

      //return

    //string += letter

    //results.push string

    //for length of array,

      //call subroutine, pass string in, letter, and sliced array
}


console.log(powerSet('').length)
console.log([ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ].length);
// var array = [1,2,3];
// const clone = [...array];
// clone.splice(0,1);
// console.log(clone)
// console.log(array)
/*
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.


Input Output
string:
"a" [ "", "a" ]
string:
"ab"  [ "", "a", "ab", "b" ]
string:
"horse" [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
string:
"obama" [ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]

*/