const nextBigger = (number) => {
	numArr = number.toString().split('');
	const tempVal = numArr[numArr.length - 1];
	numArr[numArr.length - 1] = numArr[numArr.length - 2];
	numArr[numArr.length - 2] = tempVal;
	const newNumber = parseInt(numArr.join(''));
	console.log(numArr)
	return newNumber > number ? newNumber : -1
}

// Description:

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

console.log(nextBigger(5678));