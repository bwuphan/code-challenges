function longestRun (string) {
  // Write your code here, and
  // return your final answer.
  let runArray = [0, 0];
  let longest = 0;
  let currentRun = 0;
  let previousLetter;
  let startIndex;
  for (let i = 0; i < string.length; i++) {
    console.log('currentRun', currentRun)
    console.log('currentIndex', i, string[i])
    if (string[i] === string[i + 1]) {
      console.log('startIndex', i)
      if (string[i] !== string[i - 1]) {
        startIndex = i;
      }
      console.log(string[i] + ' ' + string[i+1])
      currentRun += 1;
    } else {
      if (currentRun > longest) {
        console.log('run', currentRun)
        runArray = [startIndex, startIndex + currentRun];
        longest = currentRun;
      }
      currentRun = 0;
    }
  }
  return runArray;
}

console.log(longestRun('mississippi'))

var arr = [1,2,3];

/*
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

Examples
Input Output
string:
"abbbcc"  [ 1, 3 ]
string:
"aabbc" [ 0, 1 ]
string:
""  [ 0, 0 ]
string:
"mississippi" [ 2, 3 ]
string:
"abcdefgh"  [ 0, 0 ]
string:
"abccccccc" [ 2, 8 ]
*/

