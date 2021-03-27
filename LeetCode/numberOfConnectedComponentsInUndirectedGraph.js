/*
https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

You have a graph of n nodes. You are given an integer n and an array edges where
edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.



Example 1:


Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
Example 2:


Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1


Constraints:

1 <= n <= 2000
1 <= edges.length <= 5000
edges[i].length == 2
0 <= ai <= bi < n
ai != bi
There are no repeated edges.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  const graph = new Array(n);

  edges.forEach(edge => {
    if (!graph[edge[0]]) graph[edge[0]] = [edge[1]];
    else graph[edge[0]].push(edge[1]);

    if (!graph[edge[1]]) graph[edge[1]] = [edge[0]];
    else graph[edge[1]].push(edge[0]);
  });

  const visited = new Set();
  function dfs(idx) {
    visited.add(idx);
    if (graph[idx]) {
      graph[idx].forEach(i => {
        if (!visited.has(i))
          dfs(i);
      });
    }
  };

  let numComponents = 0;
  for (let i = 0; i < n; ++i) {
    if (!visited.has(i)) {
      dfs(i);
      numComponents++;
    }
  }

  return numComponents;
};

/*
Solution:

DFS through and get components
*/

console.log(countComponents(5, [[0,1],[1,2],[3,4]]))
console.log(countComponents(n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]))