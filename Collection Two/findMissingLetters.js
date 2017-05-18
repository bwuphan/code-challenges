const findMissingLetters = (array) => {
	for (let i = 0; i < array.length - 1; i++) {
		const currentCharCode = array[i].charCodeAt(0);
		const nextChar = String.fromCharCode(currentCharCode + 1);
		if (array[i + 1] !== nextChar) {
			return nextChar;
		}
	}
	return null;
};

console.log(findMissingLetters(['a','b','c','d','f']))