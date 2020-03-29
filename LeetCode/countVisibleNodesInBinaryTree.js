/*
Microsoft Online Assessment

https://leetcode.com/discuss/interview-question/546703/

In a binary tree, if in the path from root to the node A, there is no node with greater value than
A’s, this node A is visible. We need to count the number of visible nodes in a binary tree.

Example 1:

Input:
        5
     /     \
   3        10
  /  \     /
20   21   1

Output: 4
Explanation: There are 4 visible nodes: 5, 20, 21, and 10.
Example 2:

Input:
  -10
  \
  -15
     \
     -1

Output: 2
Explanation: Visible nodes are -10 and -1.
*/


const countVisibleNodes = (root) => {
  if (!root) return [];

  const results = [root.val];

  const dfs = (node, curMax) => {
    if (!node) return;

    if (node.val > curMax) {
      curMax = node.val;
      results.push(node.val);
    }

    dfs(node.left, curMax);
    dfs(node.right, curMax);
  };

  dfs(root, root.val);

  return results;
}

/*
Solution: DFS and keep track of the current in the route. If the node has a higher current max,
add to results.

*/

const arrayToTree = require('../Util/arrayToTree').arrayToTree;

const ex1 = arrayToTree([5,3,10,20,21,1,null]);
console.log(countVisibleNodes(ex1));

const ex2 = arrayToTree([-10,null,-15,null,null-1]);
console.log(countVisibleNodes(ex2));