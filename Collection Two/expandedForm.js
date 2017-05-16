// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

const expandedForm = (num) => {
	const numArray =  num.toString().split('');
	let place = numArray.length - 1;
	let returnString = '';
	for (let i = 0; i < numArray.length; i++) {
		if (numArray[i] !== '0') {
			if (i !== 0) {
				returnString += ' + ';
			}
			returnString += numArray[i] * Math.pow(10, place);
		}
		place--;
	}
	return returnString;
};

console.log(expandedForm(70304))