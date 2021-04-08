/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const strArr1 = Array(26).fill(0);
  const strArr2 = Array(26).fill(0);
  for (let i = 0; i < s1.length; ++i) {
    strArr1[s1.charCodeAt(i) - 97]++;
    strArr2[s2.charCodeAt(i) - 97]++;
  }

  if (compare(strArr1, strArr2)) return true;
  for (let i = s1.length; i < s2.length; ++i) {
    strArr2[s2.charCodeAt(i - s1.length) - 97]--;
    strArr2[s2.charCodeAt(i) - 97]++;

    const char2 = s2.charCodeAt(i - 1) 
    if (compare(strArr1, strArr2))
      return true;
  }

  return false;
};

function compare(strArr1, strArr2) {
  for (let i = 0; i < 26; ++i) {
    if (strArr1[i] !== strArr2[i])
      return false;
  }

  return true;
}

// console.log(checkInclusion(s1 = "ab", s2 = "eidbaooo"))
// console.log(checkInclusion(s1= "ab", s2 = "eidboaoo"))
console.log(checkInclusion("adc","dcda"))