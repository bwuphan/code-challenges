/*
https://leetcode.com/discuss/interview-question/436073/

You are given an undirected connected graph. An articulation point (or cut vertex)
is defined as a vertex which, when removed along with associated edges, makes the
graph disconnected (or more precisely, increases the number of connected components
in the graph). The task is to find all articulation points in the given graph.

Input:
The input to the function/method consists of three arguments:

numNodes, an integer representing the number of nodes in the graph.
numEdges, an integer representing the number of edges in the graph.
edges, the list of pair of integers - A, B representing an edge between the nodes A and B.
Output:
Return a list of integers representing the critical nodes.

Example:

Input: numNodes = 7, numEdges = 7, edges = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]
*/

const getCriticalNodes = (edges, numEdges, numNodes) => {
  const dfs = (cur) => {
    let children = 0;
    ids[cur] = low[cur] = ++time;

    map.get(cur)
      .forEach(node => {
        if (ids[node] == -1) {
          children++;
          parent[node] = cur;
          dfs(node);
          low[cur] = Math.min(low[cur], low[node]);
          if ((parent[cur] == -1 && children > 1) || (parent[cur] !== -1 && low[node] >= ids[cur]))
            set.add(cur);
        }
        else if (node !== parent[cur])
          low[cur] = Math.min(low[cur], ids[node]);
      });
  }
  let time = 0;
  const map = new Map();

  for (let i = 0; i < numNodes; ++i) {
    map.set(i, new Set());
  }

  edges.forEach(link => {
    map.get(link[0]).add(link[1]);
    map.get(link[1]).add(link[0]);
  });

  const set = new Set();
  const low = new Array(numNodes);
  const ids = [];
  const parent = [];

  for (let i = 0; i < numNodes; ++i) {
    ids[i] = -1;
    parent[i] = -1;
  }

  for (let i = 0; i < numNodes; ++i) {
    if (ids[i] === -1)
      dfs(i);
  }

  return Array.from(set);
}

console.log(getCriticalNodes([[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]], 7, 7))