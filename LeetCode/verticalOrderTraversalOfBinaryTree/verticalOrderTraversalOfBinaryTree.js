/*
https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

Given a binary tree, return the vertical order traversal of its nodes values.

For each node at position (X, Y), its left and right children respectively will be at positions
(X-1, Y-1) and (X+1, Y-1).

Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches
some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

If two nodes have the same position, then the value of the node that is reported first is the value
that is smaller.

Return an list of non-empty reports in order of X coordinate.  Every report will have a list of
values of nodes.



Example 1:



Input: [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation:
Without loss of generality, we can assume the root node is at position (0, 0):
Then, the node with value 9 occurs at position (-1, -1);
The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
The node with value 20 occurs at position (1, -1);
The node with value 7 occurs at position (2, -2).
Example 2:



Input: [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation:
The node with value 5 and the node with value 6 have the same position according to the given scheme.
However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.


Note:

The tree will have between 1 and 1000 nodes.
Each node's value will be between 0 and 1000.
*/

const Queue = require('../../Prototypes/Queue').Queue;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  if (!root)
    return [];

  const queue = new Queue();
  queue.enqueue({ node: root, y: 0, depth: 0 });

  const storageMap = new Map();

  // lowestY and highestY to keep track of low/high vals for iterating through at the end.
  let lowestY = 0;
  let highestY = 0;

  while (!queue.isEmpty()) {
    const item = queue.dequeue();

    if (!item.node)
      continue;

    // New element for the yArray.
    const newElement = { val: item.node.val, depth: item.depth };

    // If we already have an existing list for a y key.
    if (storageMap.has(item.y)) {
      const yArray =  storageMap.get(item.y);
      const lastElement = yArray[yArray.length - 1];

      // If the last item in the array matches the depth of the item we are pushing,
      if (lastElement.depth === item.depth) {
        // If the last element value is smaller, we know this new element should be pushed instead
        // of being spliced into the yArray.
        if (lastElement.val < item.node.val)
          yArray.push(newElement);
        // Else, we have to find a spot to splice in the element.
        else {
          // Init the insertionIdx to the last element.
          let insertionIdx = yArray.length - 1;
          for (let i = insertionIdx; i >= 0; i--) {
            // If we reached a different depth, then we should insert the new element after the
            // current one.
            if (yArray[i].depth !== item.depth) {
              insertionIdx = i + 1;
              break;
            }
            // Else if the elBefore <= new element < current element than we found the right spot.
            else if (!yArray[i - 1] || (item.node.val < yArray[i].val && item.node.val >= yArray[i - 1].val)) {
              insertionIdx = i;
              break;
            }
          }
          // Splice in the element.
          yArray.splice(insertionIdx, 0, newElement);
        }
      }
      else
        yArray.push(newElement); // If the last element does not have a matching depth, just push.
    }
    else
      storageMap.set(item.y, [newElement]);

    // See if we need to set a new lowestY or highestY.
    if (item.y && item.y < lowestY)
      lowestY = item.y;
    if (item.y && item.y > highestY)
      highestY = item.y;

    queue.enqueue({
      node: item.node.left,
      y: item.y - 1 ,
      depth: item.depth + 1,
    });

    queue.enqueue({
      node: item.node.right,
      y: item.y + 1,
      depth: item.depth + 1
    });
  }

  // Map the results to get only the val instead of the object.
  const results = [];
  for (let i = lowestY; i <= highestY; ++i) {
    const result = storageMap.get(i).map(item => item.val);
    results.push(result);
  }

  return results;
};


/*
  Solution:
  Create a map to store each node at its appropriate y value. For example, the root has a y of 0
  and its left node has a y value of -1.
  BFS through placing each node in the appropriate array for its y value. We have to also save the
  depth because order matters if multiple nodes share the same depth and y value. We have to order
  those ascending.
  Keep track of the lowest y value and highest y value so we can loop through in the end and remap
  the arrays to return only the value instead of an object containing the value and the depth.

*/

module.exports = {
  verticalTraversal
}