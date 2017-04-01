function translateRomanNumeral (romanNumeral) {
  // Write your code here, and
  // return your final answer.
  //break roman numeral into array
  var rnArr = romanNumeral.split('');
  var sum = 0;
  for (let i = 0; i < rnArr.length; i++) {
    if(!(rnArr[i] in DIGIT_VALUES))
      return 'null';
    DIGIT_VALUES[rnArr[i + 1]] > DIGIT_VALUES[rnArr[i]] ? sum -= DIGIT_VALUES[rnArr[i]] : sum += DIGIT_VALUES[rnArr[i]]
  }
  return sum;
}
  //use reduce and add number

  //oops thought it was the other way around...
  //find the largest number that is divisible
  //use recursion

    //if remainder === 0, return

    //for var in loop

      //find largest number divisible by it and add it to the string

      //subtract taht num from remainder


var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

console.log(translateRomanNumeral('XC'))

/*
Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
VI = 6 (5 + 1 = 6)
LXX = 70 (50 + 10 + 10 = 70)
MCC = 1200 (1000 + 100 + 100 = 1200)

When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
IV = 4 (5 – 1 = 4)
XC = 90 (100 – 10 = 90)
CM = 900 (1000 – 100 = 900)

You should return "null" on invalid input.


Input Output
romanNumeral:
"LX"  60
romanNumeral:
"IV"  4
romanNumeral:
"horse" "null"
romanNumeral:
""  0
*/