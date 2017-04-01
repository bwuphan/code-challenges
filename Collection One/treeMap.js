/*
 * Basic tree that stores a value.
*/
var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  let newTree = new Tree(callback(this.value));
  newTree.children = this.children.map(function(child) {
    return child.map(callback)
  })
  return newTree;
};

/**
 * You shouldn't need to change anything below here,
 * but feel free to read it.
 */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (! child ||  ! (child instanceof Tree)){
    child = new Tree(child);
  }

  if (! this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
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
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};


/*
// Functional style solution
Tree.prototype.map = function(callback) {

  // Make a maped copy of the current node
  var newTree = new Tree(callback(this.value));

  // using Array.prototype.map to go through children array
  newTree.children = this.children.map(function(child) {
  // returning a maped subTree to the Array.prototype.map function
    return child.map(callback);
  });

  // return the mapped tree
  return newTree;
};

// Solution for mapping in place
Tree.prototype.mapInPlace = function(callback) {
  this.value = callback(this.value);

  this.children.forEach(function(child) {
    child.mapInPlace(callback);
  });
};

*/
