/*
https://leetcode.com/problems/course-schedule-ii/

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to
first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the
ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If
it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you
should have finished course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you
should have finished both courses 1 and 2. Both courses 1 and 2 should be taken
after you finished course 0. So one correct course order is [0,1,2,3]. Another
correct ordering is [0,2,1,3] .
Note:

The input prerequisites is a graph represented by a list of edges, not
adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  if (!prerequisites || !prerequisites.length) {
    const sol = [];
    for (let i = 0; i < numCourses; ++i)
      sol.push(i);
    return sol;
  }

  const graph = new Map();
  prerequisites.forEach(prereq => {
    const course = prereq[0];
    const dest = prereq[1];

    const dests = graph.get(course);
    if (dests)
      dests.push(dest);
    else
      graph.set(course, [dest]);
  });


  const visited = new Set();
  const visiting = new Set();
  let order = [];
  let hasCycle = false;

  const dfs = (course) => {
    if (visiting.has(course))
      hasCycle = true;

    if (hasCycle)
      return;

    visiting.add(course);

    const dests = graph.get(course);
    if (dests) {
      dests.forEach(dest => {
        if (!visited.has(dest))
          dfs(dest);
      });
    }

    visited.add(course);
    order.push(course);
    visiting.delete(course);
  }

  for (let i = 0; i < numCourses; ++i) {
    if (!visited.has(i))
      dfs(i);

    if (hasCycle)
      return [];
  }

  return order;
};

/*
Solution:
Create a graph and then topological sort.

Keep track of visited courses so we don't traverse traveled paths.

Keep track of visiting courses. If we reach a course that we are currently visiting,
we have a cycle and it is not possible so we return false.

*/

console.log(findOrder(2, [1,0]));
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
console.log(findOrder(1, []));
console.log(findOrder(2,[[0,1],[1,0]]))