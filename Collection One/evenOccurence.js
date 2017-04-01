function evenOccurrence (arr) {
  let storage = arr.reduce(function(update, current) {
    current in update ? update[current]++ : update[current] = 1;
    return update;
  },{});
  for (let i = 0; i < arr.length; i++) {
    if (storage[arr[i]] % 2 === 0)
      return arr[i];
  }
  return null;
}

const test = [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ];
console.log(evenOccurrence(test));

function validateEmail(email) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}

console.log(validateEmail('bobby@sdf'))



/*
3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)


Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.


Examples
Input Output
arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] 2
arr:
[ "cat", "dog", "dig", "cat" ]  "cat"



Solution:
// Linear Time and Space Complexity
var evenOccurrence = function(arr) {
  // Building a counter object creates the
  // Linear space complexity, but also allows
  // us to have linear T.C., rather tha O(n^2)
  var counter = {}, i;

  // build out our counter object
  for(i = 0; i < arr.length; i++) {
  // Initialize each key to true,
  // then toggle each subsequent time
  // we see that key
    counter[arr[i]] = !counter[arr[i]];
  }

  // return the first even occurrence
  for(i = 0; i < arr.length; i++) {
  // if the counter object is false
  // at that key, then it was in the array
  // an even number of times
    if(!counter[arr[i]]) {
      return arr[i];
    }
  }

  return null;
};
*/