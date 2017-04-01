function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.

  //create a results array
  var results = [];

  //split string into array
  var stringArray = string.split('');
  //create a subroutine passing in current string string array and previous letter
  var recurseThruString = function(comboString, stringArr, position) {
    //if current string.length === string.length, return
    if(comboString.length === string.length){
      if(results.indexOf(comboString) === -1){
        results.push(comboString);
      }
      return;
    }
    //find index of previous letter and splice it from array
    if(position !== null) {
      var newArray = stringArr.slice();
      newArray.splice(position, 1);
    }
    //iterate thru string array
    var thisArray = newArray || stringArr;
    for(let i = 0; i < thisArray.length; i++) {
      //recurse and pass in current string string array and letter added
      recurseThruString(comboString + thisArray[i], thisArray, i);
    }
  }
  //return results
  recurseThruString('', stringArray, null)
  return results;
}

// console.log(allAnagrams('apps'));
// var exp = "1+1";
// console.log(eval(exp))

// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// arr.splice(15, arr.length)
// console.log(arr)
/*
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples
Input Output
string:
"abc" [ "abc", "acb", "bac", "bca", "cab", "cba" ]
*/