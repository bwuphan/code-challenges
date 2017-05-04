const validParantheses = (string) => {
	const list = [];
	const openings = {
		'{': '}',
		'[': ']',
		'(': ')',
	};
	const closings = {
		'}': '{',
		']': '[',
		')': '(',
	}
	for (let i = 0; i < string.length; i++) {
		if (string[i] in openings) {
			list.push(string[i]);
		} else if (string[i] in closings) {
			if (list[list.length - 1] !== closings[string[i]]) {
				return false;
			} else {
				list.pop();
			}
		}
	}
	return true;
}

console.log(validParantheses('[()()]')) // true
console.log(validParantheses('[()(]')) //false
console.log(validParantheses('[]')) //true
console.log(validParantheses('([)]')) // false