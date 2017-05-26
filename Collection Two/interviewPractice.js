//Create a Graph
var Graph = function() {
	this.nodes = {};
}

Graph.prototype.addNode = function(val) {
	const node = {
		edges: {},
	};
	this.nodes[val] = node;
};

Graph.prototype.contains = function(val) {
	if (this.nodes[val]) {
		return true;
	};
	return false;
};

Graph.prototype.removeNode = function(val) {
	if (this.contains(val)) {
		for (let key in this.nodes) {
			if (this.nodes[key].edges[val]) {
				delete this.nodes[key].edges[val];
			};
		};
		delete this.nodes[val];
	};
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
	if (this.nodes[fromNode]) {
		if (this.nodes[fromNode].edges[toNode]) {
			return true;
		}
	}
	return false;
}

Graph.prototype.addEdge = function(fromNode, toNode) {
	if (this.nodes[fromNode] && this.nodes[toNode]) {
		this.nodes[fromNode].edges[toNode] = toNode;
		this.nodes[toNode].edges[fromNode] = fromNode;
	}
}

Graph.prototype.removeEdge = function(fromNode, toNode) {
	if (this.nodes[fromNode] && this.nodes[toNode]) {
		delete this.nodes[fromNode].edges[toNode];
		delete this.nodes[toNode].edges[fromNode];
	}
}

var graph = new Graph();
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.addNode(0);
graph.addEdge(3, 2);
graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(3,0);
graph.addNode(4);
graph.addNode(5);
graph.addEdge(4,2);
graph.addEdge(5,3);


//Implement DFS
Graph.prototype.depthFirstSearch = function(callback) {
	// let stack = [];
	let visited = {};
	let nodes = this.nodes;
	let test = 0;
	const recurse = (node) => {
		if (!node) {
			return;
		}
		visited[node] = true;
		callback(node)
		// stack.push(node);
		for (let key in nodes[node].edges) {
			if (!visited[key]) {
				recurse(key);
			}
		}
	}
	const firstKey = Object.keys(nodes)[0];
	recurse(firstKey);
	// for (let i = stack.length - 1; i >= 0; i--) {
	// 	const key = stack[i];
	// 	callback(nodes[key]);
	// }
	// return stack;
}
const testFunc = (key) => {
	console.log(key)
}
console.log(graph.nodes)
graph.depthFirstSearch(testFunc);


//implement BFS
function Queue() {
  this.storage = {};
  let start = 0;
  let end = 0;
  this.enqueue = function(val) {
    this.storage[end++] = val;
  };
  this.dequeue = function() {
    if (this.size()) {
      const dequeued = this.storage[start];
      delete this.storage[start];
      start++;
      return dequeued;
    }
  };
  this.size = function() {
    return end - start;
  }
}


Graph.prototype.breadthFirstSearch = function(node1, node2) {
	let queue = new Queue();
	let visited = {};
	const nodes = this.nodes
	const node = Object.keys(nodes)[0];
	queue.enqueue(node);
	visited[node] = true;
	while(queue.size() > 0) {
		const dequeuedKey = queue.dequeue();
		const dequeued = nodes[dequeuedKey];
		for (let key in dequeued.edges) {
			if (dequeuedKey == node1) {
				if (node2 in dequeued.edges) {
					return true;
				}
			}
			if (dequeuedKey == node2) {
				if (node1 in dequeued.edges) {
					return true;
				}
			}
			if (!visited[key]) {
				queue.enqueue(key);
				visited[key] = true;
			}
		}
	}
	return false;
}

console.log(graph.breadthFirstSearch(2, 5));


//Quick sort

const quickSort = (array) => {
	const partition = (start, end) => {
		const pNum = array[end];
		let pIndex = 0;
		for (let i = 0; i < array.length - 1; i++) {
			if (pNum > array[i]) {
				const temp = array[pIndex];
				array[pIndex] = array[i];
				array[i] = temp;
				pIndex++;
			}
		}
		const temp = array[pIndex];
		array[pIndex] = array[end];
		array[end] = temp;
		return pIndex;
	};
	const recurse = (start, end) => {
		if (start < end) {
			const partitionIndex = partition(start, end);
			recurse(start, partitionIndex - 1);
			recurse(partitionIndex + 1, end);
		}
	};
	recurse(0, array.length - 1)
	return array;
}
// console.log(quickSort([4,4,2,7,8,1,2,3]))


//Merge Sort
const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  const leftover = i === left.length ? right.slice(j, right.length) : left.slice(i, left.length);
  return result.concat(leftover)
}

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
	const splitPoint = Math.floor(array.length / 2);
  const left = array.slice(0, splitPoint);
  const right = array.slice(splitPoint, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([4,1,6,2,7,1,1]))