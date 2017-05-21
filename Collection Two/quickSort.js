const partition = (array, start, end) => {
	const pNum = array[end - 1];
	let pIndex = 0;
	for (let i = 0; i < end - 1; i++) {
		if (array[i] < pNum) {
			console.log('hello')
			const temp = array[i];
			array[i] = array[pIndex];
			array[pIndex] = temp;
			pIndex++;
		}
	}
	const temp = array[end - 1];
	array[end - 1] = array[pIndex];
	array[pIndex] = temp;
	return array;
};

const quickSort = (array) => {
	const recurse = (start, end) => {
		if (start < end) {
			const partitionIndex = partition(array, start, end);
			recurse(start, partitionIndex - 1);
			recurse(partitionIndex + 1, end);
		}
	};
	return array;
}

let test = [5, 7, 9, 2, 6];
console.log(partition(test, 0, 5))