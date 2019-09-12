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
  if (prerequisites.length === 0) return true;

  // Create graph of prerequisites.
  let graph = {};
  prerequisites.forEach(prereq => {
    const val = prereq.shift();
    if (val in graph) {
      graph[val] = graph[val].concat(prereq);
    }
    else {
      graph[val] = prereq;
    }
  });

  // The unvisited nodes.
  let unvisited = { ...graph };

  /* The nodes that are currently being visited. If we meet a node in here while we are traversing
     this node, there is a cycle */
  let visiting = {};

  // These are the nodes that are done being visited.
  let done = {};

  let hasCycle = false;
  const dfs = function(courseNum) {
    if (courseNum in visiting) {
      hasCycle = true;
      return;
    }

    if (!hasCycle) {
      visiting[courseNum] = true;

      delete unvisited[courseNum];

      if (graph[courseNum] !== undefined) {
        graph[courseNum].forEach(num => {
          dfs(num);
        });
      }
      delete visiting[courseNum];

      done[courseNum] = true;
    }
  }

  for (let key in graph) {
    dfs(key);

    if (hasCycle) {
      return false;
    }
  }
  return true;
};


// console.log(canFinish(2, [[1,0]]));
// console.log(canFinish(2, [[1,0],[0,1]]));
// console.log(canFinish(3, [[1,0],[1,2],[0,1]]));
console.log(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]]));