var Graph = function() {
  /* START SOLUTION */
  this._nodes = {};
  /* END SOLUTION */
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  /* START SOLUTION */
  this._nodes[node] = this._nodes[node] || { value: node, edges: {} };
  /* END SOLUTION */
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  /* START SOLUTION */
  return !!this._nodes[node];
  /* END SOLUTION */
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  /* START SOLUTION */
  if (this.contains(node)) {
    // Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
  /* END SOLUTION */
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  /* START SOLUTION */
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this._nodes[fromNode].edges[toNode];
  /* END SOLUTION */
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  /* START SOLUTION */
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Add an edge to each node pointing to the other
  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
  /* END SOLUTION */
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /* START SOLUTION */
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Remove edges from each node's edge list
  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];
  /* END SOLUTION */
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  /* START SOLUTION */
  for (var node in this._nodes) {
    cb(node);
  }
  /* END SOLUTION */
};

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
graph.addEdge(5,4);

console.log(JSON.stringify(graph));

function Stack(){
  this.storage = [];
  var size = 0;
  this.push = (val) => {
    storage.push(val);
    size++;
  };
  this.pop = () => {
    return storage.pop();
    size--;
  }
  this.size = () => {
    return size;
  }
}

const graphDFS = (graph) => {
  let stack = [];
  let visited = {};
  const recurse = (node) => {
    if (!node) {
      return;
    }
    visited[node.value] = true;
    stack.push(node.value)
    for (var key in node.edges) {
      if (!visited[key]) {
        recurse(graph._nodes[key])
      }
    }
  }
  recurse(graph['_nodes']['0'])
  return stack;
}

console.log(graphDFS(graph))