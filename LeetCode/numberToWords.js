/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be
less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight
Hundred Ninety One"
*/

var numbersToWordsObj = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
};
var numbersToPlace = {
  10: 'Ten',
  100: 'Hundred',
  1000: 'Thousand',
  1000000: 'Million',
  1000000000: 'Billion',
  1000000000000: 'Trillion',
  1000000000000000: 'Quadrillion',
  1000000000000000000: 'Quintillion',
};

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  var n = num, output, numInPlace, numLeft, place, restOfString;
  if (numbersToWordsObj[n]) {
    // numbers less than 20 or divisible by 10
    output = numbersToWordsObj[n];
  } else if (n < 100) {
    // tens and a single digit, hyphenated
    numInPlace = Math.floor(n / 10);
    numLeft = n % 10;
    output = numbersToWordsObj[numInPlace * 10] +' '+ numberToWords(numLeft);
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
    numInPlace = Math.floor(n / place);
    // console.log(n, place)
    numLeft = n % place;
    // assemble this 1000s place
    output = numberToWords(numInPlace) +' '+ numbersToPlace[place];
    // assemble the rest of the number
    restOfString = numberToWords(numLeft);
    if (restOfString !== 'Zero') {
      output += ' ' + restOfString;
    }
  }
  return output;
};