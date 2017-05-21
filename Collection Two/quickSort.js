const partition = (array, start, end) => {
	const pNum = array[end];
	console.log(pNum)
	let pIndex = start;
	for (let i = start; i < end; i++) {
		if (array[i] <= pNum) {
			const temp = array[i];
			array[i] = array[pIndex];
			array[pIndex] = temp;
			pIndex++;
		}
	}
	const temp = array[end];
	array[end] = array[pIndex];
	array[pIndex] = temp;
	return pIndex;
};

const quickSort = (array) => {
	const recurse = (start, end) => {
		if (start < end) {
			const partitionIndex = partition(array, start, end);
			recurse(start, partitionIndex - 1);
			recurse(partitionIndex + 1, end);
		}
	};
	recurse(0, array.length - 1);
	return array;
}

let test = [5, 7, 9, 2, 6, 6, 1,2, 5, 10, 11];
console.log(quickSort(test))