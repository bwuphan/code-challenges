var Graph = require('./graph.js').Graph;

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

var Queue = function() {
  this.storage = [];
  this.enqueue = function() {
    this.storage.push(arguments[0]);
  };
  this.dequeue = function() {
    if (this.storage.length > 0) {
      return this.storage.shift();
    }
  };
  this.size = function() {
    return this.storage.length
  }
}

const graphBFS = (graph) => {
  let queue = new Queue();
  let visited = {};
  let nodes = graph['_nodes'];
  const recurse = (node) => {
    if (!node) {
      return;
    }
    visited[node.value] = true;
    queue.enqueue(node);
    console.log(queue.size())
    while (queue.size() > 0) {
      // console.log('hello')
      var dequeued = queue.dequeue();
      console.log('dequeued', dequeued);
      for (var key in dequeued.edges) {
        if (!visited[key]) {
          // console.log('enqueue', key)
          visited[key] = true;
          queue.enqueue(nodes[key]);
        }
      }
    }
  }
  recurse(graph['_nodes']['0'])
}


const graphLink = (graph, node1, node2) => {
	let queue = new Queue();
	let visited = {};
	let nodes = graph['_nodes'];
	let node = nodes[Object.keys(nodes)[0]];
	// console.log(node)
	visited[node] = true;
	queue.enqueue(node);
	while (queue.size() > 0) {
		const dequeued = queue.dequeue();
		console.log('dequeued', dequeued)
		for (var key in dequeued.edges) {
			// console.log(dequeued.value, key)
			if (node1 == dequeued.value && node2 == key) {
				return true;
			}
			if (!visited[key]) {
				visited[key] = true;
				queue.enqueue(nodes[key]);
			}
		}
	}
	return false;
};

console.log(graphLink(graph,2, 1));