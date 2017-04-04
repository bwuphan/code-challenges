var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

function numberToEnglish (number) {
  // Write your code here, and
  // return your final answer.
  const numberString = number.toLocaleString('en-US');
  const array = numberString.split(',');
  console.log(array)
  let place;
  if (array[0] === '000') {
    place = 1000;
    const tempNumber = parseInt('1' + array.join(''));
    console.log('temp',tempNumber)
    while (place * 1000 <= number) {
      place *= 1000;
    }
  } else if (number < 100) {
    return twoDigit(number.toString());
  } else if (number < 1000) {
    return threeDigit(number.toString());
  } else {
    const newNumber = array.slice(1).join('');
    console.log(newNumber)
    place = 1000;
    while (place * 1000 <= number) {
      place *= 1000;
    }
    return `${threeDigit(array[0])} ${numbersToPlace[place]} ` + numberToEnglish(parseInt(newNumber))
  }
}

function twoDigit (number) {
  console.log(number[1])
  if (number === '00') {
    return null;
  } else if (number[0] === '0' && number[1] !== '0') {
    return numbersToWords[number[1]]
  } else if (parseInt(number) <= 20 || number[1] === '0') {
    return numbersToWords[number];
  } else if (number[1] === '0') {
    return numbersToWords[number]
  }
  return `${numbersToWords[number[0]+'0']}-${numbersToWords[number[1]]}`
}

function threeDigit (numberString) {
  if (numberString.length === 3) {
    const hundreds = numbersToWords[numberString[0]];
    const tens = twoDigit(numberString.slice(1));
    if (numberString.length === 3 && numberString[0] === '0') {
      return twoDigit(numberString.slice(1).toString())
    } else if (numberString.length <= 2) {
      return twoDigit(numberString.toString())
    } else if (numberString.length === 3 && tens === null) {
      return `${hundreds} hundred`;
    } else if (numberString.length === 3 && tens !== '00') {
      return `${hundreds} hundred ${tens}`
    }
  } else {
    return twoDigit(numberString);
  }
}

// console.log(twoDigit(15));

// place = 1000;
// while (place * 1000 <= n) {
//   place *= 1000;
// }
// console.log(place)
console.log(numberToEnglish(10000000000))
/*
// RECURSIVE SOLUTION
Number.prototype.toEnglish = function() {
  // Get current number and initialize variables
  var n = this.valueOf(), output, numInPlace, numLeft, place, restOfString;
  if (numToWords[n]) {
    // numbers less than 20 or divisible by 10
    output = numToWords[n];
  } else if (n < 100) {
    // tens and a single digit, hyphenated
    numInPlace = Math.floor(n / 10);
    numLeft = n % 10;
    output = numToWords[numInPlace * 10] +'-'+ (numLeft).toEnglish();
  } else {
    // combo of number and a place name
    if (n < 1000) {
      // the hundreds place is special
      place = 100;
    } else {
      // or multiple of 1000
      place = 1000;
      while (place * 1000 <= n) {
        place *= 1000;
      }
    }
    // divide into prefix and remaining numbers
    numInPlace = Math.floor(n / place);
    numLeft = n % place;
    // assemble this 1000s or 100s place
    output = numInPlace.toEnglish() +' '+ numToPlace[place];
    // assemble the rest of the number
    restOfString = (numLeft).toEnglish();
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }
  return output
};

// ITERATIVE SOLUTION
function numberToEnglish (number) {
  // If the number is in the object, we just look it up and return it
  if (numbersToWords[number]) {
    return numbersToWords[number]
  }
  // split the number into an array of its digits as integers
  let numbers = number.toString().split('').map(num => parseInt(num));
  let english = '', engNum, place, remain, twoDigit;
  numbers.forEach((number, i) => {
    // Digits remaining in the array
    remain = numbers.length - i;
    engNum = place = undefined;

    // Thousands
    if ((remain - 1) % 3 === 0 && remain !== 1) {
      // If this is the first number, get the starting digit
      if (!i) engNum = numbersToWords[number];
      // If first number, or this place is not 3 zeros, get the place
      if (!i || number || numbers[i - 1] || numbers[i - 2]) {
        place = numbersToPlace[Math.pow(10, remain - 1)];
      }

    // Hundreds - need prefix and place, if prefix is not 0
    } else if (remain % 3 === 0 && number) {
      engNum = numbersToWords[number]
      place = numbersToPlace[100];

    // Tens - deal with teens and hyphens here
    } else if ((remain + 1) % 3 === 0) {
      // Handling numbers from 99-0
      twoDigit = number * 10 + numbers[i + 1];
      // 1's, teens, multiples of 10
      if (twoDigit && numbersToWords[twoDigit]) {
        engNum = numbersToWords[twoDigit]
      // hyphenated two digit numbers
      } else if (number) {
        engNum = `${numbersToWords[number*10]}-${numbersToWords[numbers[i + 1]]}`
      }
    }

    // Concat what we gathered onto the string
    english += engNum ? engNum + ' ' : '';
    english += place ? place + ' ' : '';
  })
  // Cut trailing whitespace
  return english.trim();
}
*/