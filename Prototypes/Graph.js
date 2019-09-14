var Node = function(val) {
  this.val = val;
  this.edges = {};
}

var Graph = function() {
  this.nodes = {};
}

Graph.prototype.addNode = function(val, overwrite) {
  const newNode = new Node(val);

  // Check if val is already in nodes.
  if (!(val in this.nodes) || overwrite === true) {
    this.nodes[val] = newNode;
    return newNode;
  }

  return null;
}

Graph.prototype.addEdge = function(val, edgeVal) {
  // Make sure the nodes exist in the graph.
  if (val in this.nodes && edgeVal in this.nodes) {
    this.nodes[val].edges[edgeVal] = true;
  }
  else {
    return null;
  }
}

Graph.prototype.hasEdge = function(val, edgeVal) {
  // Make sure val exists in nodes and the edgeVal exists in the val's edges.
  if (val in this.nodes && edgeVal in this.nodes[val].edges) {
    return true;
  }
  return false;
}

Graph.prototype.log = function() {
  for (let val in this.nodes) {
    const edgeObj = this.nodes[val].edges;
    console.log(`Val: ${val}`);
    let edgeArr = [];
    for (let edgeVal in edgeObj) {
      edgeArr.push(edgeVal);
    }
    console.log(`Edges: ${edgeArr}`);
  }
}

Graph.prototype.topologicalSort = function() {

  const Stack = require('./Stack.js').Stack;
  let visited = {};
  let sorted = new Stack();

  const traverseEdges = function(node) {
    if (node.val in visited) {
      return;
    }
    visited[node.val] = true;
    for (let key in this.edges) {
      traverseEdges(this.edges[key]);
    }
    console.log(node);
    sorted.push(node);
    return;
  }

  for (let key in this.nodes) {
    traverseEdges(this.nodes[key]);
  }
  console.log(sorted);
}

module.exports = {
  Graph
}