function longestPalindrome (string) {
  var checkPalindrome = function(singleString){
    var reversedString = singleString.split('').reverse().join('');
    return singleString === reversedString;
  }
  var longest = '';
  // Write your code here, and
  // return your final answer.

  //iterate through full string
  for(var i = 0; i < string.length; i++){
    //slice the string at position and length of whole string
    var sliced = string.slice(i, string.length)
    console.log('sliced is ' + sliced)
    //for every sliced string, iterate through the string one letter at a time
    for(var j = 2; j < sliced.length + 1; j++){
      //checkpalindrom of the string. if true check length of palindrome
      var slicedAgain = sliced.slice(0, j);
      console.log('sliced again is ' + slicedAgain)
      if(checkPalindrome(slicedAgain)){
        if(slicedAgain.length > longest.length){
          longest = slicedAgain;
        }
      }
    }

  }
  return longest;
}

console.log(longestPalindrome('My dad is a racecar athlete'))
