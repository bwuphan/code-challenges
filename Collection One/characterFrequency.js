function characterFrequency (string) {
  // Write your code here, and
  // return your final answer.
  let storage = {};
  let results = [];
  for(let i = 0; i < string.length; i++){
    if(string[i] in storage){
      storage[string[i]] += 1;
    } else {
      storage[string[i]] = 1;
    }
  }
  for(let key in storage){
    results.push([key, storage[key]])
  }
  return results.sort(function(a, b){
    if(a[1] > b[1])
      return -1;
    else if(a[1] < b[1])
      return 1;
    else if(a[0] > b[0])
      return 1;
    else if(a[0] < b[0])
      return -1;
    else if(a[0] === b[0])
      return 1;
  });
}

console.log(characterFrequency("mississippi"));


// "aaabbc"  [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
