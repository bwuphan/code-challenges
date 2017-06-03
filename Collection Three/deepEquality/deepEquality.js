/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  /* START SOLUTION */
  if (apple === orange) { return true; }
  if (apple && !orange || !apple && orange) { return false; }
  if (!(apple instanceof Object) || !(orange instanceof Object)) { return false; }
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  console.log(appleKeys)
  if (appleKeys.length !== orangeKeys.length) { return false; }
  if (appleKeys.length === 0) { return true; } // two empty objects are equal
  for (var i = 0; i < appleKeys.length; i++) {
    console.log(apple[appleKeys[i]],orange[appleKeys[i]]);
    if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) { return false; }
  }
  return true;
  /* END SOLUTION */
};

let test = { foo: 1, b: { c: 'potato'} };;
let b = { foo: 1, b: { c: 3 } };
console.log(deepEquals(test,b))

