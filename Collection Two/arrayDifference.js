// Your goal in this kata is to implement an difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b.

// difference([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// difference([1,2,2,2,3],[2]) == [1,3]

const difference = (a, b) => {
	const bChars = {};
	const results = [];
	for (let i = 0; i < b.length; i++) {
		bChars[b[i]] = true;
	};
	for (let i = 0; i < a.length; i++) {
		console.log(a[i])
		if (!(a[i] in bChars)) {
			results.push(a[i])
		}
	}
	return results;
};

console.log(difference([1,2,2,2,3],[2]))