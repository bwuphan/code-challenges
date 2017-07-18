// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

const averageString = (str) => {
  const numArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const strArr = str.split(' ');
  let sum = 0;
  for (let i = 0; i < strArr.length; i++) {
    const currentNum = numArr.indexOf(strArr[i]);
    if (currentNum > -1) {
      sum += currentNum;
    } else {
      sum = null;
      break;
    };
  };
  return typeof sum === 'number' ? numArr[Math.floor(sum / strArr.length)] : 'n/a';
};


console.log(averageString("zero nine five two"))