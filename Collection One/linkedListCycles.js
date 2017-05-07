const hasCycle = (linkedList) => {
  //Plan: Have 2 runs, 1 is 1 node at a time, other is 2 nodes at a time
  //If the double time node laps the other before one run, then is a cycle
  let slow = 0, fast = 0;
  // for (let i = 0; i < lin)
};

function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

// var nodeA = Node('A');
// var nodeB = nodeA.next = Node('B');
// var nodeC = nodeB.next = Node('C');

var nodeA = Node('A');
    var nodeB = nodeA.next = Node('B');
    var nodeC = nodeB.next = Node('C');
console.log(nodeA)

/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null
A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D
'Constraint 1: Do this in linear time'

'Constraint 2: Do this in constant space'

'Constraint 3: Do not mutate the original nodes in any way'
*/