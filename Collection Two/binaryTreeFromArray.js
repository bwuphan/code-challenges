const createBinaryTree = (array) => {
	console.log(array)
	if (array.length === 0) {
		return;
	}
	const mid = array[Math.floor(array.length / 2)];
	const leftArr = array.slice(0, Math.floor(array.length / 2));
	const rightArr = array.slice(Math.floor(array.length / 2) + 1, array.length);
	const node = {
		value: mid,
		left: leftArr.length > 0 ? createBinaryTree(leftArr) : null,
		right: rightArr.length > 0 ? createBinaryTree(rightArr) : null,
	}
	return node;
}


console.log(createBinaryTree([1,2,3,4,5,6,7,8]));