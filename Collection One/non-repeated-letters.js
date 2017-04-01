// string:
// "ABCDBIRDUP"  "A"
// string:
// "XXXXXXX" "sorry"
// string:
// "ALAMABA" "L"
// string:
// "BABA"  "sorry"

function firstNonRepeatedCharacter (string) {
  // Write your code here, and
  // return your final answer.
  // for(var i = 0; i < string.length; i++){
  //   if(string.indexOf(string[i]) === string.lastIndexOf(string[i])){
  //     return string[i];
  //   }
  // }
  // return 'sorry'
  var letterStorage = string.split('').reduce(function(update, letter){
    if(!(letter in update)){
      update[letter] = 1;
    } else {
      update[letter]++;
    }
    return update;
  },{});
  //iterate thru the string and put the letters with the value being the number of appearances
  for(var i = 0; i < string.length; i++){
    if(letterStorage[string[i]] === 1){
      return string[i]
    }
  }
  return 'sorry';
}

console.log(firstNonRepeatedCharacter("ABCDBIRDUP"))
console.log(firstNonRepeatedCharacter("ALAMABA"))
console.log(firstNonRepeatedCharacter("XXXXXXX"))
console.log(firstNonRepeatedCharacter("BABA"))

//Ivey's solution
// Use objects for lookup

