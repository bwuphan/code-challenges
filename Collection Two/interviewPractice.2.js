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

Graph.prototype.depthFirstSearch = function(callback) {
  const nodes = this.nodes;
  const stack = [];
  const visited = {};
  const recurse = (node) => {
    if (!node) {
      return;
    }
    const edges = nodes[node].edges;
    callback(node);
    stack.push(node);
    visited[node] = true;
    for (let key in edges) {
      if (!visited[key]) {
        recurse(key);
      }
    }
  };
  const firstKey = Object.keys(nodes)[0];
  recurse(firstKey);
}

graph.depthFirstSearch(function(node) {
  console.log(node);
});


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



Graph.prototype.breadthFirstSearch = function(fromNode, toNode) {
  const nodes = this.nodes;
  const queue = new Queue;
  const visited = {};
  const firstKey = Object.keys(nodes)[0];
  queue.enqueue(firstKey);
  visited[firstKey] = true;
  while(queue.size() > 0) {
    const dequeued = queue.dequeue();
    console.log(dequeued)
    const edges = nodes[dequeued].edges;
    if (dequeued == fromNode) {
      if (toNode in edges) {
        return true;
      }
    }
    if (dequeued == toNode) {
      if (fromNode in edges) {
        return true;
      }
    }
    for (let key in edges) {
      if (!visited[key]) {
        queue.enqueue(key);
        visited[key] = true;
      }
    }
  }
  return false;
}

console.log(graph.breadthFirstSearch(2,9));

const quickSort = (array) => {
  const partition = (start, end) => {
    const pNum = array[end];
    let pIndex = start;
    for (let i = start; i < end; i++) {
      if (array[i] < pNum) {
        const temp = array[i];
        array[i] = array[pIndex];
        array[pIndex] = temp;
        pIndex++;
      }
    }
    const temp = array[end];
    array[end] = array[pIndex];
    array[pIndex] = temp;
    return pIndex;
  }
  const recurse = (start, end) => {
    if (start < end) {
      const partitionIndex = partition(start, end);
      recurse(start, partitionIndex - 1);
      recurse(partitionIndex + 1, end);
    }
  };
  recurse(0, array.length - 1);
  return array;
}

console.log(quickSort([3,4,1,6,1,2,3,8,0,10]))