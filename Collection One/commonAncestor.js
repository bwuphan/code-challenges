
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
   var grandma = new Tree();
   var mom = new Tree();
   grandma.addChild(mom);
   var me = new Tree();
   mom.addChild(me);
   grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  const path1 = this.getAncestorPath(child1);
  const path2 = this.getAncestorPath(child2);
  if (!path2 || !path2) {
    return null;
  };
  var commonAncestor = this;
  for (var i = 0; path1[i] && path2[i]; i++) {
    if (path1[i] === path2[i]) {
      closestAncestor = path1[i]
    }
  }
  return commonAncestor;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
// Tree.prototype.getAncestorPath = function(target) {
//   if (this === target) {
//     return [this];
//   };
//   this.children.forEach((child) => {
//     const pathFromChild = child.getAncestorPath(target);
//     if (pathFromChild) {
//       return [this].concat(pathFromChild);
//     }
//   });
//   return null;
// };

Tree.prototype.getAncestorPath = function(target) {
  if ( this === target ) return [this];
  for ( var i = 0; i < this.children.length; i++ ) {
    // console.log('hello', this.children[i])
    var pathFromChild = this.children[i].getAncestorPath(target);
    if ( pathFromChild ) {
      console.log('pathFromChild', pathFromChild);
      console.log('this', this)
      return [this].concat(pathFromChild);
    }
  }
  // If not in subtree::
  return null;
};


/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
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
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

// var grandma = new Tree();
//    var mom = new Tree();
//    grandma.addChild(mom);
//    var me = new Tree();
//    mom.addChild(me);
//    var result = grandma.getAncestorPath(me); // => [grandma, mom, me]
//    console.log(result)

      // var root = new Tree();

      // var left = new Tree();
      // root.addChild(left);

      // var right1 = new Tree();
      // root.addChild(right1);

      // var right2 = new Tree();
      // right1.addChild(right2);

      // var right3 = new Tree();
      // right1.addChild(right3);

      // var closestAncestor = root.getClosestCommonAncestor(right2, right3);

      // var right4 = new Tree();
      // right3.addChild(right4);

      // var closestAncestor = root.getClosestCommonAncestor(right2, right4);

      // var closestAncestor = root.getClosestCommonAncestor(left, right4);
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);
grandma.getAncestorPath(me)
/*
// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
mom.getAncestorPath(me)  // => [mom, me]
me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma

// Invalid Child
grandma.getAncestorPath(H R Giger) // => null


chai.should();

describe('Tree', function(){

  it('should exist', function(){
    expect(Tree).toBeDefined();
  });
  it('should be a function', function(){
    Tree.should.be.a.Function;
  });
  it('should be a constructor', function(){
    var tree = new Tree();
    expect(tree).toBeDefined();
  });


  describe('#addChild()', function(){

    it('should exist', function(){
      var tree = new Tree();
      expect(tree.addChild).toBeDefined();
    });
    it('should be a function', function(){
      var tree = new Tree();
      tree.addChild.should.be.a.Function;
    });
    it('should add a child node', function(){
      var tree = new Tree();
      var child = new Tree();
      tree.addChild(child);
      tree.children.should.include(child);
    });
    it('should work for childrens children', function(){
      var grandma = new Tree();
      var mom = new Tree();
      var me = new Tree();
      grandma.addChild(mom);
      mom.addChild(me);
      grandma.children.should.include(mom);
      mom.children.should.include(me);
    });
  });


  describe('#isDescendant', function(){

    it('should exist', function(){
      var tree = new Tree();
      expect(tree.isDescendant).toBeDefined();
    });
    it('should be a function', function(){
      var tree = new Tree();
      tree.addChild.should.be.a.Function;
    });
    it('should check for child nodes', function(){
      var tree = new Tree();
      var child = new Tree();
      tree.isDescendant(child).should.be.false;
      tree.addChild(child);
      tree.isDescendant(child).should.be.true;
    });
  });


  describe('#removeChild', function(){

    it('should exist', function(){
      var tree = new Tree();
      expect(tree.removeChild).toBeDefined();
    });
    it('should be a function', function(){
      var tree = new Tree();
      tree.removeChild.should.be.a.Function;
    });
    it("should remove children", function(){
      var tree = new Tree();
      var child = new Tree();
      tree.addChild(child);
      tree.removeChild(child);
      tree.children.should.not.include(child);
    })
  });


  describe('#getAncestorPath', function(){

    it('should exist', function(){
      var tree = new Tree();
      expect(tree.getAncestorPath).toBeDefined();
    });
    it('should be a function', function(){
      var tree = new Tree();
      tree.getAncestorPath.should.be.a.Function;
    });
    it('should return the path if child is immediate child', function(){
      // make sure your ancestor path is returning them eldest to youngest
      // ie., [mom, me] _not_ [me, mom]
      var mom = new Tree();
      var me = new Tree();
      mom.addChild(me);
      var path = mom.getAncestorPath(me);

      expect(path[0]).toBeDefined();
      path[0].should.be.equal(mom);

      expect(path[1]).toBeDefined();
      path[1].should.be.equal(me);

      path.length.should.be.equal(2);
    });
    it('should return the path to a child node', function(){
      var grandma = new Tree();
      var mom = new Tree();
      var auntElaine = new Tree();
      var me = new Tree();
      grandma.addChild(mom);
      grandma.addChild(auntElaine);
      mom.addChild(me);
      var path = grandma.getAncestorPath(me);

      expect(path[0]).toBeDefined();
      path[0].should.be.equal(grandma);

      expect(path[1]).toBeDefined();
      path[1].should.be.equal(mom);

      expect(path[2]).toBeDefined();
      path[2].should.be.equal(me);

      path.length.should.be.equal(3);
    });
    it('should fail to return a path if the child is not an ancestor', function(){
      var parent = new Tree();
      var myChild = new Tree();
      var anotherChild = new Tree();
      parent.addChild(myChild);
      var path = parent.getAncestorPath(anotherChild);
      expect(path).toBeNull();
    });
  });


  describe('#getClosestCommonAncestor', function(){

    it('should exist', function(){
      var tree = new Tree();
      expect(tree.getClosestCommonAncestor).toBeDefined();
    });
    it('should be a function', function(){
      var tree = new Tree();
      tree.getClosestCommonAncestor.should.be.a.Function;
    });
    it('should return the root tree when compared to the root tree', function(){
      var trunk = new Tree();
      var commonAncestor = trunk.getClosestCommonAncestor(trunk, trunk);
      expect(commonAncestor).toBeDefined();
      commonAncestor.should.equal(trunk);
    });
    it('should return null for children that are not ancestors', function(){
      var trunk = new Tree();
      var leaf1 = new Tree();
      var leaf2 = new Tree();
      trunk.addChild(leaf1);
      var commonAncestor = trunk.getClosestCommonAncestor(leaf1, leaf2);
      expect(commonAncestor).toBeNull();
    });
    it('should return lowest common ancestors', function(){
      var root = new Tree();

      var left = new Tree();
      root.addChild(left);

      var right1 = new Tree();
      root.addChild(right1);

      var right2 = new Tree();
      right1.addChild(right2);

      var right3 = new Tree();
      right1.addChild(right3);

      var closestAncestor = root.getClosestCommonAncestor(right2, right3);
      expect(closestAncestor).toBeDefined();
      closestAncestor.should.be.equal(right1);

      var right4 = new Tree();
      right3.addChild(right4);

      var closestAncestor = root.getClosestCommonAncestor(right2, right4);
      expect(closestAncestor).toBeDefined();
      closestAncestor.should.be.equal(right1);

      var closestAncestor = root.getClosestCommonAncestor(left, right4);
      expect(closestAncestor).toBeDefined();
      closestAncestor.should.be.equal(root);
    });


    it('should work for large trees', function(){
      var child, tmp, left, right, expectedAncestor, commonAncestor;
      // just a complicated tree to test against.
      var root = new Tree();
      for(var i = 0; i < 4; i++){
        child = new Tree();
        for(var j = 0; j < 3; j++){
          child.addChild(new Tree());
        }
        root.addChild(child);
      }

      child = root;
      for(var i = 0; i < 10; i++){
        tmp = new Tree();
        child.addChild(tmp);
        child = tmp;
      }

      expectedAncestor = child;

      left = new Tree();
      child.addChild(left);
      for(var i = 0; i < 10; i++){
        tmp = new Tree();
        left.addChild(tmp);
        left = tmp;
      }

      right = new Tree();
      child.addChild(right);
      for(var i = 0; i < 10; i++){
        tmp = new Tree();
        right.addChild(tmp);
        right = tmp;
      }

      for(var i = 0; i < 4; i++){
        child = new Tree();
        for(var j = 0; j < 3; j++){
          child.addChild(new Tree());
        }
        root.addChild(child);
      }

      commonAncestor = root.getClosestCommonAncestor(left, right);
      expect(commonAncestor).toBeDefined();
      commonAncestor.should.equal(expectedAncestor);
    });
  });
});



Solution
Tree.prototype.getAncestorPath = function(target) {
  // base case - if current node is the target,
  // return array containing current node
  if (this === target) return [this];
  // Iterate through each child (aka. subtree)
  for (var i = 0; i < this.children.length; i++) {
  // if a recursive search through a subtree does not return null,
  // the target must be in that subtree
    var pathFromChild = this.children[i].getAncestorPath(target);
    if (pathFromChild) {
    // add current node onto whatever path we have found so far
      return [this].concat(pathFromChild);
    }
  }
  // If not in subtree:
  return null;
};

Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
    var path1 = this.getAncestorPath(child1);
    var path2 = this.getAncestorPath(child2);
    // If either of the children can’t be found:
    if (!path1 || !path2) return null;
    // We know this (root) is a common ancestor
    var closestAncestor = this;
    // path1[i] && path2[i] holds when i is less
    // than the lengths of both path1 and path2
    for (var i = 0; path1[i] && path2[i]; i++) {
      if (path1[i] === path2[i]) {
    // Keep updating closestAncestor until
    // the paths diverge
        closestAncestor = path1[i];
      }
    }
    return closestAncestor;
};
*/