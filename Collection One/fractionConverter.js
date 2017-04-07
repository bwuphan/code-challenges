function strip(number) {
    return (parseFloat(number).toPrecision(12));
}

var fractionConverter = function(number){
  var a = 1;

  while ( (number*a % 1 ) !== 0) {
    a++;
  }

  var str = number*a+'/'+a;
  return str;
}

console.log(fractionConverter(0.253213));