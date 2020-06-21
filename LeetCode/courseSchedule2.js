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
  if (!numCourses)
    return [];

  if (prerequisites[0] && !Array.isArray(prerequisites[0]))
    prerequisites = [prerequisites];

  // Create a graph.
  const graph = new Map();
  prerequisites.forEach(tuple => {
    const course = tuple[0];
    const prereq = tuple[1];
    if (graph.has(prereq))
      graph.get(prereq).push(course);
    else
      graph.set(prereq, [course]);
  });
  // Create entries in the graph for courses that don't have pre-reqs.
  for (let i = 0; i < numCourses; ++i) {
    if (!graph.has(i))
      graph.set(i, []);
  }

  // doneCourses if the final set of visited courses.
  const doneCourses = new Set();
  // curVisiting keeps track of visited nodes during a dfs. Used to see if there is a cycle.
  const curVisiting = new Set();

  const orderedCourses = [];
  let hasCycle = false;

  const dfs = (course) => {
    // If we have visited this course on the current dfs, we have a cycle.
    if (curVisiting.has(course)) {
      hasCycle = true;
      return;
    }

    // If we have visited this coures before, return.
    if (doneCourses.has(course)) return;

    curVisiting.add(course);

    // Loop through courses this course is a pre-req for.
    graph.get(course).forEach(c =>  dfs(c));

    doneCourses.add(course);

    orderedCourses.push(course);

    curVisiting.delete(course);
  }

  Array.from(graph.keys()).forEach(course => {
    if (!doneCourses.has(course))
      dfs(course);
  });

  // If there is a cycle, return an empty array. Otherwise reverse.
  return hasCycle ? [] : orderedCourses.reverse();
};

/*
Solution:
Create graph to keep track of pre reqs. Each key-value pair represents a course
and the classes it is a pre-req for.

Then use topological sourt
*/

// console.log(findOrder(2, [1,0]));
// console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
// console.log(findOrder(1, []));
console.log(findOrder(2,[[0,1],[1,0]]))