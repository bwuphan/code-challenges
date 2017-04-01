function primeSieve (start, end) {
  // Write your code here, and
  // return your final answer.
  if(end === undefined){
    end = start;
  }
  let primeArray = [];

  for(let i = 0; i < end + 1; i++) {
    primeArray.push(true);
  }

  for(let i = 2; i < Math.sqrt(end); i++) {
    if(primeArray[i]){
      for(let j = 2; i * j <= end; j++) {
        primeArray[i * j] = false;
      }
    }
  }
  return primeArray.reduce(function(update, current, index){
    if(current && index !== 0 && index !== 1){
      if(index >= start && index < end + 1){
        update.push(index);
      }
    }
    return update
  },[]);
}
console.log(primeSieve(2))
console.log(primeSieve(20,22))
console.log(primeSieve(16,20))