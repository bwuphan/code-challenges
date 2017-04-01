var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
  //YOUR CODE HERE
  const results = [];
  const traverseTree = function(node) {

    node.children.forEach(function(n) {
      traverseTree(n);
    });
    results.push(node.children.filter(filter));
  }
  traverseTree(this)
  console.log(results)
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

console.log(root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
})) //=> [2, 3]
/*
Implement a depth-first method on a tree class.

DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

Example:

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
}) //=> [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]


var should = chai.should();

describe('Tree', function () {
  it('should exist', function(){
    // Oh no! the `Tree` class doesn't exist but it was provided for you. Maybe
    // you deleted the code that defines the class by mistake?
    should.exist(Tree);
  });
});

describe('DFSelect', function() {
  it('should exist on the Tree prototype', function(){
    should.exist(Tree.prototype.DFSelect);
  });

  it('should be a function', function() {
    Tree.prototype.DFSelect.should.be.a.Function;
  });

  it('should return an array', function() {
    var root = new Tree('root');
    var all = function () { return true; };
    Array.isArray(root.DFSelect(all)).should.equal(true);
  });

  it('should return all nodes in the tree if filter always returns true', function() {
    // this filter function should always return all of the nodes
    var all = function () { return true; };
    // keep a list of all nodes to compare
    // depth: 0
    var root = new Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    // depth: 2
    root.children[0].addChild(4);
    root.children[0].addChild(5);
    root.children[1].addChild(6);
    root.children[1].addChild(7);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(8);
    root.children[1].children[1].addChild(9);
    var expected = [1, 2, 4, 8, 5, 3, 6, 7, 9];

    // we should expect back all the nodes we added
    var result = root.DFSelect(all);
    result.should.have.length(expected.length);
    result.should.deep.equal(expected);
  });

  it('should return all nodes passing the filter', function () {
    // this filter function should return all true nodes
    var trueFilter = function (value, depth) {
      return value === true;
    };
    // this filter function should return all false nodes
    var falseFilter = function (value, depth) {
      return value === false;
    };
    // keep a list of true and false nodes to compare
    var trueNodes = [], falseNodes = [], result = null;
    // depth: 0
    var root = new Tree(false);
    falseNodes.push(false);
    // depth: 1
    trueNodes.push(true), root.addChild(true);
    falseNodes.push(false), root.addChild(false);
    // depth: 2
    trueNodes.push(true), root.children[0].addChild(true);
    trueNodes.push(true), root.children[1].addChild(true);
    falseNodes.push(false), root.children[0].addChild(false);
    falseNodes.push(false), root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true), root.children[0].children[0].addChild(true);
    trueNodes.push(true), root.children[1].children[0].addChild(true);
    falseNodes.push(false), root.children[0].children[1].addChild(false);
    falseNodes.push(false), root.children[1].children[1].addChild(false);

    result = root.DFSelect(trueFilter);
    // we expect back all the `trueNodes` using the `trueFilter`
    result.should.deep.equal(trueNodes);

    result = root.DFSelect(falseFilter);
    // we expect back all the `falseNodes` using the `falseFilter`
    result.should.deep.equal(falseNodes);
  });

  it('should allow filtering by depth', function () {
    // this filter constructor produces a filter for the specified depth
    var depthFilter = function (filterDepth) {
      return function (node, nodeDepth) {
        return filterDepth == nodeDepth;
      };
    };
    // keep a list of nodes by depth to compare
    var nodeDepths = [], deepNodes = [];
    var root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    root.addChild(1);
    root.addChild(2);
    nodeDepths.push([1,2]);
    // depth: 2
    root.children[0].addChild(3);
    root.children[0].addChild(4);
    root.children[1].addChild(5);
    root.children[1].addChild(6);
    nodeDepths.push([3,4,5,6]);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(7);
    root.children[0].children[0].addChild(8);
    root.children[1].children[0].addChild(9);
    root.children[1].children[0].addChild(10);
    nodeDepths.push([7,8,9,10]);

    root.DFSelect(depthFilter(0)).should.deep.equal(nodeDepths[0]);
    root.DFSelect(depthFilter(1)).should.deep.equal(nodeDepths[1]);
    root.DFSelect(depthFilter(2)).should.deep.equal(nodeDepths[2]);
    root.DFSelect(depthFilter(3)).should.deep.equal(nodeDepths[3]);
  });
});



Solution:
// With a subroutine
Tree.prototype.DFSelect = function (filter) {
  var results = [];

  (function subroutine(node,depth) {
  // Collect the results that pass our test
    if (filter(node.value, depth)) {
      results.push(node.value);
    }
  // Depth first iteration
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
    // need to do depth + 1 NOT depth++
    // we don't want to alter the depth variable in this scope
      subroutine(child, depth + 1);
    }
  })(this, 0);

  return results;

};
// Without a subroutine
Tree.prototype.DFSelect = function (filter, depth) {
  depth = depth || 0;
  var rootSelection = filter(this.value, depth) ? [this.value] : [];
  // How could we rewrite this with reduce?
  var childSelections = this.children.map(function(child) {
    return child.DFSelect(filter, depth + 1);
  });
  return [].concat.apply(rootSelection, childSelections);
};
*/