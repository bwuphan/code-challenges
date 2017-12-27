// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

// only works for one line
const stripComments = (string, markers) => {
  const markersObj = {};
  markers.forEach(marker => {
    markersObj[marker] = true;
  });
  const strArr = string.split('');
  let strippedStr = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] in markersObj) return strippedStr;
    strippedStr += strArr[i];
  }
  return strippedStr;
}

console.log(stripComments('apples, pears # and bananas', ['#']))