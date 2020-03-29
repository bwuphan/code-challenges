/*
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

}

const arrayToTree = require('../../Util/arrayToTree').arrayToTree;

const ex1 = arrayToTree([5,3,10,20,21,1,null]);
console.log(countVisibleNodes(ex1));

const ex2 = arrayToTree([-10,-15,-1]);
console.log(countVisibleNodes(ex2));