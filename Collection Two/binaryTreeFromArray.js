const createBinaryTree = (array) => {
	console.log(array)
	if (array.length === 0) {
		return null;
	}
	const mid = array[Math.floor(array.length / 2)];
	const leftArr = array.slice(0, Math.floor(array.length / 2));
	const rightArr = array.slice(Math.floor(array.length / 2) + 1, array.length);
	const node = {
		value: mid,
		left: createBinaryTree(leftArr),
		right: createBinaryTree(rightArr)
	}
	return node;
}


console.log(createBinaryTree([2,4,6,8,9]));