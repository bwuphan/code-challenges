function powerSet (string) {
  // Write your code here, and
  // return your final answer.
  var strArr = string.split('');
  var unique = strArr.reduce(function(word, letter) {
    if (word.indexOf(letter) === -1) {
      word.push(letter);
    }
    return word;
  }, []).sort();
  const results = [];

  //create a subroutine, pass in array
  const recurse = function(string, array) {
    console.log('string', string)
    if (array.length === 0 || string.length === unique.length) {
      return;
    }
    results.push(string);
    for (let i = 0; i < array.length; i++) {
      string += array[i];
      const clone = [...array];
      clone.splice(i,1);
      recurse(string, clone);
    }
  }
  recurse('', unique)
  return results;
    //if array length.length === 0

      //return

    //string += letter

    //results.push string

    //for length of array,

      //call subroutine, pass string in, letter, and sliced array
}


console.log(powerSet("obama"))
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