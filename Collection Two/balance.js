// Description:

// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples

// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

const sum = (string) => {
	let total = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i]  === '!') {
			total += 2;
		} else if (string[i] === '?') {
			total += 3;
		}
	}
	return total;
};
const balance = (left, right) => {
	const leftSum = sum(left);
	const rightSum = sum(right);
	if (leftSum === rightSum) {
		return 'Balance';
	};
	return leftSum > rightSum ? 'Left' : 'Right';
}
