function onlyUnique (str) {
  // Write your code here, and
  // return your final answer.
  var strArr = str.split('');
  var storage = {};
  strArr.forEach(function(letter) {
    if(!(letter in storage)){
      storage[letter] = 1;
    } else {
      storage[letter]++;
    }
  })
  return strArr.reduce(function(word, letter){
    if(storage[letter] === 1){
      word += letter;
    }
    return word;
  },'');
}

console.log(onlyUnique('abccdefe'));
/*
Given a string, remove any characters that are not unique from the string.

Examples
Input Output
str:
"abccdefe"  "abdf"
str:
"hello there" "o tr"
str:
"xyz" "xyz"
str:
"iiii"  ""
*/