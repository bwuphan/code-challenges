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
	let stack = [];
	let visited = {};
	let nodes = this.nodes;
	const recurse = (node) => {
		if (!node) {
			return;
		}
		visited[node] = true;
		stack.push(node);
		for (let key in nodes[node].edges) {
			console.log('hello')
			if (!visited[key]) {
				recurse(key);
			}
		}
	}
	const firstKey = Object.keys(nodes)[0];
	recurse(firstKey);
	for (let i = stack.length - 1; i >= 0; i--) {
		const key = stack[i];
		callback(nodes[key]);
	}
	return stack;
}
const testFunc = (key) => {
	console.log(key)
}
console.log(graph.nodes)
console.log(graph.depthFirstSearch(testFunc))
