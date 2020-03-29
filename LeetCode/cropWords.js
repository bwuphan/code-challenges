/*
Microsoft Online Assessment

https://leetcode.com/discuss/interview-question/507367/
*/

const cropWords = (message, K) => {
  if (message.length < K)
    return message;

  const inMiddleOfWord = (message[K - 1] !== ' ' && message[K] !== ' ') ? true : false;

  let rightPointer = K;
  // If we're in the middle of a word, we need to find the beginning of the previous word to get
  // the index of the right pointer for a slice.
  if (inMiddleOfWord) {
    rightPointer = Math.max(0, K - 2);
    for (let i = K - 2; i >= 0; i--) {
      // If we reach a space or we're at the first element, this is the end of the return string.
      if (message[i] === ' ' || i === 0) {
        rightPointer = i;
        break;
      }
    }
  }

  message = message.slice(0, K);

  return message.trim();
}


console.log(cropWords('Codility We test coders', 14) === 'Codility We');
console.log(cropWords('Codility We test coders', 0) === '');
console.log(cropWords('Codility We test coders', 7) === '');