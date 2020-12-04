/*
Nodes in a Subtree
You are given a tree that contains N nodes, each containing an integer u which corresponds to a
lowercase character c in the string s using 1-based indexing.
You are required to answer Q queries of type [u, c], where u is an integer and c is a lowercase
letter. The query result is the number of nodes in the subtree of node u containing c.
Signature
int[] countOfNodes(Node root, ArrayList<Query> queries, String s)
Input
A pointer to the root node, an array list containing Q queries of type [u, c], and a string s
Constraints
N and Q are the integers between 1 and 1,000,000
u is a unique integer between 1 and N
s is of the length of N, containing only lowercase letters
c is a lowercase letter contained in string s
Node 1 is the root of the tree
Output
An integer array containing the response to each query
Example
        1(a)
        /   \
      2(b)  3(a)
s = "aba"
RootNode = 1
query = [[1, 'a']]
Note: Node 1 corresponds to first letter 'a', Node 2 corresponds to second letter of the string 'b',
Node 3 corresponds to third letter of the string 'a'.

output = [2]
Both Node 1 and Node 3 contain 'a', so the number of nodes within the subtree of Node 1 containing
'a' is 2.

*/


// Add any extra import statements you may need here


// Definition for a Node
function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
};

// Add any helper functions you may need here


const Queue = require('../Prototypes/Queue.js').Queue;

function countOfNodes(root, queries, string) {
  // Write your code here
  const results = [];
  queries.forEach((query, i) => {
    const queue = new Queue();
    queue.enqueue({ node: root, isSubtree: query[0] === 1 ? true : false });

    results[i] = 0;
    while (!queue.isEmpty()) {
      const item = queue.dequeue();
      const node = item.node;

      if (node.val === query[0]) {
        item.isSubtree = true;
      }

      if (item.isSubtree && query[1] === string[node.val - 1]) {
        results[i]++;
      }

      node.children.forEach(child => queue.enqueue({ node: child, isSubtree: item.isSubtree }));
    }
  });

  return results;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

// Testcase 1
var n_1 = 3, q_1 = 1;
var s_1 = "aba";
var node_1 = new Array(n_1 + 1);
for (var i = 1; i <= n_1; i++) {
  node_1[i] = new Node(i);
}
var root1 = node_1[1];
node_1[1].children = [node_1[2], node_1[3]];
var queries_1 = [[1, 'a']];
var output_1 = countOfNodes(root1, queries_1, s_1);
var expected_1 = [2];
check(expected_1, output_1);

// Testcase 2
var n_2 = 7, q_2 = 3;
var s_2 = "abaacab";
var node_2 = new Array(n_2 + 1);
for (var i = 1; i <= n_2; i++) {
  node_2[i] = new Node(i);
}
var root2 = node_2[1];
node_2[1].children = [node_2[2], node_2[3], node_2[7]];
node_2[2].children = [node_2[4], node_2[5]];
node_2[3].children = [node_2[6]];
var queries_2 = [[1, 'a'], [2, 'b'], [3, 'a']];
var output_2 = countOfNodes(root2, queries_2, s_2);
var expected_2 = [4, 1, 2];
check(expected_2, output_2);

// Add your own test cases here
