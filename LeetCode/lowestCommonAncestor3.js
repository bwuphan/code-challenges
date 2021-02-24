/*
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/

Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q
in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a
descendant of itself)."



Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5 since a node can be a descendant of itself according to
the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
*/

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
  if (!p && !q) return null;
  if (!p) return q;
  if (!q) return p;

  let pDepth = getDepth(p);
  let qDepth = getDepth(q);

  while (pDepth || qDepth) {
    if (pDepth > qDepth) {
      p = p.parent;
      pDepth--;
    }
    else {
      q = q.parent;
      qDepth--;
    }

    if (p === q) return p;
  }
};

function getDepth(node) {
  let depth = 0;

  while (node.parent) {
    depth++;
    node = node.parent;
  }

  return depth;
}

/*
Solution:
Get the depth of p and q.
Go up one level and decrement depth until p and q are at the same level.
If p === q, that is the common ancestor.
*/