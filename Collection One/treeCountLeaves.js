var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  // TODO: implement me!
  let numLeaves = 0;

  let traverseTree = function(node) {
    if(node.children.length === 0){
      numLeaves++;
    }
    node.children.forEach(function(child){
      traverseTree(child);
    });
  }
  traverseTree(this)
  return numLeaves;
}

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
    throw new Error("That child is already a child of this tree");
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
    throw new Error("That node is not an immediate child of this tree");
  }
};



var root = new Tree();
    // branches
    var branch1 = new Tree();
    var branch2 = new Tree();
    root.addChild(branch1);
    root.addChild(branch2);
    // branches
    var branch3 = new Tree();
    var branch4 = new Tree();
    branch1.addChild(branch2);
    branch1.addChild(branch3);
    // branches
    var branch5 = new Tree();
    var branch6 = new Tree();
    branch3.addChild(branch5);
    branch3.addChild(branch6);

    // leaves
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());
    branch4.addChild(new Tree());
    branch4.addChild(new Tree());
    branch5.addChild(new Tree());
    branch5.addChild(new Tree());
    branch6.addChild(new Tree());
    branch6.addChild(new Tree());

    // if you're counting, that's four leaves
    console.log(root.countLeaves())
