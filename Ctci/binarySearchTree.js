const Queue = require('../Prototypes/Queue').Queue;

var isValidBST = function(root) {
  let isValid = true;
  var traverseTree = function(node, lowerLimit, upperLimit) {
    if (node === null) return true;

    const val = node.val;

    if (lowerLimit !== null && val <= lowerLimit) return false;
    if (upperLimit !== null && val >= upperLimit) return false;

    if (!traverseTree(node.right, val, upperLimit)) return false;
    if (!traverseTree(node.left, lowerLimit, val)) return false;

    return true;
  }
  return traverseTree(root, null, null);
};

var Tree = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Tree.prototype.createBST = function(arr) {
  if (arr.length === 0) {
    return null;
  }
  const leftLength = Math.floor(arr.length / 2);
  const thisVal = arr[leftLength];
  const leftArr = arr.slice(0, leftLength);
  const rightArr = arr.slice(leftLength + 1, arr.length);

  const newNode = new Tree(thisVal);
  newNode.left = this.createBST(leftArr);
  newNode.right = this.createBST(rightArr);
  return newNode;
}

Tree.prototype.breadthFirstSearch = function() {
  let queue = new Queue();
  let results = [];
  let item;

  queue.enqueue({ tree: this, depth: 0 });

  while (item = queue.dequeue()) {
    let tree = item.tree;
    let depth = item.depth;

    results.push(item);

    if (tree.left) queue.enqueue({ tree: tree.left, depth: depth + 1 });
    if (tree.right) queue.enqueue({ tree: tree.right, depth: depth + 1 });
  }
  return results;
}

Tree.prototype.inOrderTraversal = function(callback) {
  var traverse = function(tree) {
    if (tree === null) return;

    traverse(tree.left);

    if (callback) callback(tree.val);
    else console.log(tree.val);

    traverse(tree.right);
  }

  traverse(this);
}

var test1 = [1,2,3,4,5,6];

// const bst1 = createBST(test1);
// const bst2 = createBST([1,2,3]);

// console.log(isValidBST(bst1));
// console.log(isValidBST(bst2));

let tree = new Tree();
let bst = tree.createBST(test1);
console.log(bst.breadthFirstSearch());
bst.inOrderTraversal(console.log);