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
graph.addEdge(5,3);

console.log(JSON.stringify(graph));

var Stack = function() {
  var storage = [];
  var length = 0;

  this.push = function(){
    storage[length] = arguments[0];
    length++;
  };

  this.pop = function(){
    if (length > 0) {
      var returnVal = storage[length - 1];
      // console.log('1', storage)
      length--;
      delete storage[length];
      // console.log('2', storage)
      return returnVal;
    }
    return null;
  };

  this.size = function(){
    return length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(){
    inbox.push(arguments[0]);
  };

  this.dequeue = function(){
    if (!outbox.size()) {
      var inboxSize = inbox.size();
      while (inboxSize > 0) {
        outbox.push(inbox.pop())
        inboxSize--;
      }
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size();
  };
};

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
  console.log(Object.keys(graph._nodes))
  recurse(graph['_nodes']['0'])
  return stack;
}

// console.log(graphDFS(graph))

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

graphBFS(graph)

exports.Graph = Graph ;