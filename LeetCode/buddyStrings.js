/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) {
    return false;
  }

  const occurA = createOccurArray(A);
  const occurB = createOccurArray(B);

  if (JSON.stringify(occurA) !== JSON.stringify(occurB)) {
    return false;
  }

  if (A === B) {
    for (let i = 0; i < occurA.length; ++i) {
      if (occurA[i] > 1)
        return true;
    }
  }

  let diff = 0;
  for (let i = 0; i < A.length; ++i) {
    if (A[i] !== B[i]) {
      diff++;
    }

    if (diff > 2) {
      return false;
    }
  }

  return diff === 2;
};

function createOccurArray(string) {
  const array = [];
  for (let i = 0; i < 26; ++i) {
    array[i] = 0;
  }

  for (let i = 0; i < string.length; ++i) {
    array[string.charCodeAt(i) - 97]++;
  }



  return array;
}

let A = "aaaaaaabc", B = "aaaaaaacb";
console.log(buddyStrings(A, B));

let a = "dd", b = "dd";
console.log(buddyStrings(a, b));