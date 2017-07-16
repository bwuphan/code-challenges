function sortByString(s, t) {
  var occur = {};
  for (var i = 0; i < s.length; i++) {
    if (!(s[i] in occur)) {
      occur[s[i]] = 1;
    } else {
      occur[s[i]]++;
    }
  }
  var result = '';
  for (var j = 0; j < t.length; j++) {
    var tLetter = t[j];
    console.log(tLetter)
    if (tLetter in occur) {
      var numOccurences = occur[tLetter];
      for (var x = 0; x < numOccurences; x++) {
        result += tLetter;
      }
    }
  }
  return result;
}

console.log(sortByString('weather', 'therapyw'));