
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
/* START SOLUTION */
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  if (romanNumeral === '') {
    return 0;
  }
  //running tally of digits
  var total = 0;
  //split string into array of digits
  var romanNumerals = romanNumeral.split('');
  //iterate through digits
  for (var i = 0; i < romanNumerals.length; i++) {
    //set variables for current and next roman numeral
    var singleRomanNumeral = romanNumerals[i];
    var nextSingleRomanNumeral = romanNumerals[i + 1];
    //get digits from DIGIT_VALUES object
    var numberFromRomanNumeral = DIGIT_VALUES[singleRomanNumeral];
    var nextNumberFromRomanNumeral = DIGIT_VALUES[nextSingleRomanNumeral];
    //if digit is less than next digit or there is no next digit
    if (numberFromRomanNumeral < nextNumberFromRomanNumeral && i !== romanNumerals.length - 1) {
      //subtract digit from total
      total -= numberFromRomanNumeral;
    } else {
      //add digit to total
      total += numberFromRomanNumeral;
    }
  }
  return total;
  /* END SOLUTION */
};
