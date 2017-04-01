function nestedWordCount (wordList) {
  // Write your code here, and
  // return your final answer.

  //create a string for longest
  var longestWord = '';
  var longestSum = 0;
  //iterate through wordlist
  wordList.forEach(function(word, index) {
    //keep a sum
    //iterate through wordlist again checking if word.indexOf each word > -1 \
    var sum = 0;
    for(let i = 0; i < wordList.length; i++) {
      //if sum > previous sum, change sum and change longest
      console.log(word + '   ' + wordList[i]);
      if(word.indexOf(wordList[i]) > -1) {
        console.log('sum increment')
        sum++;
      }
    }
    if(sum > longestSum) {
      console.log('sum: ' + sum + '   longestSum: ' + longestSum)
      longestSum = sum;
      longestWord = word;
    }
  })
  //return longest
  return longestWord;
}



function nestedWordCount2 (wordList) {
  // Write your code here, and
  // return your final answer.

  //create a string for longest
  var wordObj = wordList.reduce(function(object, word) {
    object[word] = 0;
    return object;
  },{});


  console.log(wordObj)
}

var list = [ "gray", "grays", "ray", "rays", "strays" ];
console.log(nestedWordCount2(list))
/*
Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

Examples
Input Output
wordList:
[ "gray", "grays", "ray", "rays", "strays" ]  "grays"

*/