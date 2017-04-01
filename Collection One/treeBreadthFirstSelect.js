var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  // var queue = new Queue();

  //Your code here
  var results = [[]];
  if (filter(this.value, 0)) {
    results[0].push(this.value);
  }
  function subRoutine(node, depth) {
    depth += 1;
    var temp = [];
    // console.log('node children', node.children)
    for (let i = 0; i < node.children.length; i++) {
      if (filter(node.children[i].value, depth)) {
        temp.push(node.children[i].value);
      }
    }
    if (results[depth]) {
      results[depth] = results[depth].concat(temp);
    } else {
      results[depth] = temp;
    }
    for (let i = 0; i < node.children.length; i++) {
      subRoutine(node.children[i], depth);
    }
  }
  subRoutine(this, 0);
  return [].concat.apply([], results);
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};

// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);

// root1.BFSelect(function (value, depth) {
//   return value % 2;
// })

// root1.BFSelect(function (value, depth) {
//   return depth === 1;
// })

var all = function () { return true; };
var root = new Tree(1);
  var expected = [1];
  // depth: 1
  expected.push(3); root.addChild(3);
  expected.push(2); root.addChild(2);
  // depth: 2
  expected.push(4); root.children[0].addChild(4);
  expected.push(5); root.children[0].addChild(5);
  expected.push(6); root.children[1].addChild(6);
  expected.push(7); root.children[1].addChild(7);
  // depth: 3 (sparse)
  expected.push(8); root.children[0].children[0].addChild(8);
  expected.push(9); root.children[1].children[1].addChild(9);

var result = root.BFSelect(all);
console.log(result)
/*
Implement a breadth-first method on a tree class.

BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order, and returns a flat array of node values of the tree for which the filter returns true.

Example:

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
  return value % 2;
}) //=> [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]



var should = chai.should();

describe('Tree', function () {
  it('should exist', function(){
    should.exist(Tree);
  });
})

describe('BFSelect', function() {
  it('should exist on the Tree prototype', function(){
    should.exist(Tree.prototype.BFSelect);
  });

  it('should be a function', function() {
    Tree.prototype.BFSelect.should.be.a.Function;
  });

  it('should return an array', function() {
    var root = new Tree('root');
    var all = function () { return true; };
    root.BFSelect(all).should.be.an.Array;
  });

  it('should return all nodes in the tree if filter always returns true', function() {
    // this filter function should always return all of the nodes
    var all = function () { return true; };
    var equal
    // keep a list of all nodes to compare
    // depth: 0
    var root = new Tree(1);
    var expected = [1];
    // depth: 1
    expected.push(2); root.addChild(2);
    expected.push(3); root.addChild(3);
    // depth: 2
    expected.push(4); root.children[0].addChild(4);
    expected.push(5); root.children[0].addChild(5);
    expected.push(6); root.children[1].addChild(6);
    expected.push(7); root.children[1].addChild(7);
    // depth: 3 (sparse)
    expected.push(8); root.children[0].children[0].addChild(8);
    expected.push(9); root.children[1].children[1].addChild(9);

    // we should expect back all the nodes we added
    var result = root.BFSelect(all);
    result.should.have.length(expected.length);

    // make sure the result array contains all the expected values
    for(var i = 0; i < expected.length; i++){
      // ie., `expected[i]` should be somewhere in `result`
      result.should.contain(expected[i]);
    }
  });

   it('should filter nodes in breadth-first order', function() {
    // this filter function should always return all of the nodes
    var all = function () { return true; };
    // keep a list of all nodes in breadth-first order to compare
    // depth: 0
    var root = new Tree(1);
    var expected = [1];
    // depth: 1
    expected.push(3); root.addChild(3);
    expected.push(2); root.addChild(2);
    // depth: 2
    expected.push(4); root.children[0].addChild(4);
    expected.push(5); root.children[0].addChild(5);
    expected.push(6); root.children[1].addChild(6);
    expected.push(7); root.children[1].addChild(7);
    // depth: 3 (sparse)
    expected.push(8); root.children[0].children[0].addChild(8);
    expected.push(9); root.children[1].children[1].addChild(9);

    var result = root.BFSelect(all);
    // make sure the result array is in breadth-first order
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
    trueNodes.push(true);   root.addChild(true);
    falseNodes.push(false); root.addChild(false);
    // depth: 2
    trueNodes.push(true);   root.children[0].addChild(true);
    trueNodes.push(true);   root.children[1].addChild(true);
    falseNodes.push(false); root.children[0].addChild(false);
    falseNodes.push(false); root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true);   root.children[0].children[0].addChild(true);
    trueNodes.push(true);   root.children[1].children[0].addChild(true);
    falseNodes.push(false); root.children[0].children[1].addChild(false);
    falseNodes.push(false); root.children[1].children[1].addChild(false);

    result = root.BFSelect(trueFilter);
    // we expect back all the `trueNodes` using the `trueFilter`
    result.length.should.equal(trueNodes.length);
    for(var i = 0; i < trueNodes.length; i++){
      // ie., `trueNodes[i]` should be somewhere in `result`
      result.should.contain(trueNodes[i]);
    }

    result = root.BFSelect(falseFilter);
    // we expect back all the `falseNodes` using the `falseFilter`
    result.length.should.equal(falseNodes.length);
    for(var i = 0; i < falseNodes.length; i++){
      result.should.contain(falseNodes[i]);
    }
  });

  it('should allow filtering by depth', function () {

    // keep a list of nodes by depth to compare
    var nodeDepths = [], deepNodes = [];
    var root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    deepNodes = [];
    deepNodes.push(1); root.addChild(1);
    deepNodes.push(2); root.addChild(2);
    nodeDepths.push(deepNodes);
    // depth: 2
    deepNodes = [];
    deepNodes.push(3); root.children[0].addChild(3);
    deepNodes.push(4); root.children[0].addChild(4);
    deepNodes.push(5); root.children[1].addChild(5);
    deepNodes.push(6); root.children[1].addChild(6);
    nodeDepths.push(deepNodes);
    // depth: 3 (sparse)
    deepNodes = [];
    deepNodes.push(3); root.children[0].children[0].addChild(3);
    deepNodes.push(4); root.children[0].children[0].addChild(4);
    deepNodes.push(5); root.children[1].children[0].addChild(5);
    deepNodes.push(6); root.children[1].children[0].addChild(6);
    nodeDepths.push(deepNodes);

    // helper functions for the tests

    // this filter constructor produces a filter for the specified depth
    var depthFilter = function (filterDepth) {
      return function (node, nodeDepth) {
        return filterDepth === nodeDepth;
      };
    };

    // so that `[1, 5, 2]`  and `[5, 2, 1]` are considered equal
    var shouldBeDeepEqualSorted = function(array1, array2){
      array1.sort(function(a, b){ return a - b});
      array2.sort(function(a, b){ return a - b});
      array1.should.eql(array2); // deep equality
    };

    // the actual tests

    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(0)), nodeDepths[0]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(1)), nodeDepths[1]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(2)), nodeDepths[2]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(3)), nodeDepths[3]);
  });
});
*/