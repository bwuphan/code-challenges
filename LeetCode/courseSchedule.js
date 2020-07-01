/*
https://leetcode.com/problems/course-schedule/

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if (!prerequisites.length)
    return false;

  const graph = new Map();
  let numNodes = 0;

  prerequisites.forEach(prereq => {
    const node = prereq[0];
    const dest = prereq[1];

    if (graph.has(node))
      graph.get(node).push(dest);
    else
      graph.set(node, [dest]);
  });

  const visited = new Set();
  const visiting = new Set();
  const order = [];

  let hasCycle = false;
  const sort = (node) => {
    if (visiting.has(node)) {
      hasCycle = true;
      return;
    }
    if (hasCycle || visited.has(node))
      return;



    graph.get(node).forEach(dest => {
      visiting.add(dest);
      sort(dest);
      visiting.delete(dest);
    });

    order.push(node);
    visited.add(node);
  }

  for (let node in graph) {
    dfs(node);

    if (hasCycle)
      return false;
  }

  return true;
};


// console.log(canFinish(2, [[1,0]]));
// console.log(canFinish(2, [[1,0],[0,1]]));
// console.log(canFinish(3, [[1,0],[1,2],[0,1]]));
console.log(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]]));