const test = {
	value: 10,
	children: [{value: 5, children: [{value: 9, children: []}, {value: 18, children: []}]},
		{value: 20, children: [{value: 3, children: []}, {value: 7, children: []}]}
	]
};

const binaryTreeLog = (node) => {
	console.log(node.value);
	if (node.children[0]) {
		binaryTreeLog(node.children[0])
	}
	if (node.children[1]) {
		binaryTreeLog(node.children[1])
	}
	
}

binaryTreeLog(test)