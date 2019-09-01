var Node = function(val) {
  this.val = val;
  this.edges = {};
}

var Graph = function() {
  this.vertices = {};
}

Graph.prototype.addVertex = function(val, overwrite) {
  const newNode = new Node(val);

  // Check if val is already in vertices.
  if (!(val in this.vertices) || overwrite === true) {
    this.vertices[val] = newNode;
    return newNode;
  }

  return null;
}

Graph.prototype.addEdge = function(val, edgeVal) {
  // Make sure the vertices exist in the graph.
  if (val in this.vertices && edgeVal in this.vertices) {
    this.vertices[val].edges[edgeVal] = true;
  }
  else {
    return null;
  }
}

Graph.prototype.hasEdge = function(val, edgeVal) {
  // Make sure val exists in vertices and the edgeVal exists in the val's edges.
  if (val in this.vertices && edgeVal in this.vertices[val].edges) {
    return true;
  }
  return false;
}

Graph.prototype.log = function() {
  for (let val in this.vertices) {
    const edgeObj = this.vertices[val].edges;
    console.log(`Val: ${val}`);
    let edgeArr = [];
    for (let edgeVal in edgeObj) {
      edgeArr.push(edgeVal);
    }
    console.log(`Edges: ${edgeArr}`);
  }
}

module.exports = {
  Graph
}