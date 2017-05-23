const complexNumber = (num1, num2) => {
	const firstArr = num1.split('+');
	const secondArr = num2.split('+');
	const first = firstArr[0];
	const second = firstArr[1].slice(0, firstArr[1].length - 1);
	const third = secondArr[0];
	const fourth = secondArr[1].slice(0, secondArr[1].length - 1);
	// console.log(first, second, third, fourth);
	// const one = -(second * fourth);
	// console.log(one);
	// const two = second * third + second * fourth;
	// console.log(two);
	return `${first * third + -(second * fourth)}+${first * fourth + second * third}i`
}

console.log(complexNumber("1+-1i", "1+-1i"));