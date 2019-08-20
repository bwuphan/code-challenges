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

var Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var createBST = function(arr) {
  if (arr.length === 0) {
    return null;
  }
  const leftLength = Math.floor(arr.length / 2);
  const thisVal = arr[leftLength];
  const leftArr = arr.slice(0, leftLength);
  const rightArr = arr.slice(leftLength + 1, arr.length);

  const newNode = new Node(thisVal);
  newNode.left = createBST(leftArr);
  newNode.right = createBST(rightArr);
  return newNode;
}

var test1 = [1,2,3,4,5,6,7,8,9,10];

const bst1 = createBST(test1);
const bst2 = createBST([1,2,3]);

console.log(isValidBST(bst1));
console.log(isValidBST(bst2));