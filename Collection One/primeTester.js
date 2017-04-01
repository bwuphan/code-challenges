function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  if(n < 2){
    return false;
  }

  for(var i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

console.log(primeTester(10))
console.log(primeTester(8))
console.log(primeTester(133))
console.log(primeTester(139))
console.log(primeTester(140))
console.log(primeTester(2003))

/*
// Prime Tester
var primeTester = function(n) {
  // catch edge cases
  if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){
    return false;
  }

  // check if n is divisible...
  // by any number from 2 --> sqrt(n)
  for (var i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  // if no divisors found, n is prime
  return true;
};

*/