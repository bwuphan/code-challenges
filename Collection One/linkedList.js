var LinkedList = function (initialValue) {
  this.tail = {value: initialValue, next: null};
  this.head = {value: initialValue, next: this.tail};
};

LinkedList.prototype.addToTail = function (tailAdd) {
  this.tail.value = tailAdd;
  if (!this.head.value) {
    this.head.value = tailAdd;
  }
}

LinkedList.prototype.removeHead = function () {
  if (this.head.value === this.tail.value) {
    this.tail = null;
    this.head = null;
    return;
  }
  this.head = this.head.next;
}

LinkedList.prototype.contains = function (target) {
  var traverseList = function(node) {
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return traverseList(node.next);
  }
  return traverseList(this.head);
}

    var list = new LinkedList(4);
    list.addToTail(5);
    console.log(list);
    console.log(list.contains(4));
    console.log(list.contains(5));
    console.log(list.contains(6));

/*
var should = chai.should();

describe("LinkedList", function() {
  it('should exist', function(){
    should.exist(LinkedList);
  });

  it('should be a function', function(){
    LinkedList.should.be.a.Function;
  });

  it("should be implemented using the pseudoclassical pattern", function(){
    LinkedList.prototype.addToTail.should.be.a.Function;
    LinkedList.prototype.removeHead.should.be.a.Function;
    LinkedList.prototype.contains.should.be.a.Function;
  });

  it("should accept an initial value", function(){
    var list = new LinkedList(1);
    list.tail.value.should.equal(1);
    list.head.value.should.equal(1);
    list.addToTail(2);
    list.head.next.value.should.equal(2);
  })

  it("should designate a new tail when new nodes are added", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.tail.value.should.equal(4);
    list.addToTail(5);
    list.tail.value.should.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.head.value.should.equal(4);
    list.removeHead();
    list.head.value.should.equal(5);
  });

  it("should remove the head and tail from the list when removeHead is called and there is only one element present", function(){
    var list = new LinkedList(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    list.removeHead();
    should.not.exist(list.head);
    should.not.exist(list.tail);
  });

  it("should contain a value that was added", function(){
    var list = new LinkedList(4);
    list.addToTail(5);
    list.contains(4).should.be.true;
    list.contains(5).should.be.true;
    list.contains(6).should.be.false;
  });

  it("should not contain a value that was removed", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    list.contains(4).should.be.false;
  });

});



Solution:
var LinkedList = function(){
  this.head = null;
  this.tail = null;
};
LinkedList.prototype
  .addToTail = function(value){
    var newTail = this.makeNode(value);
    if ( !this.head ){
      this.head = newTail;
    }
    if ( this.tail ){
      this.tail.next = newTail;
    }
    this.tail = newTail;
  };
LinkedList.prototype
  .removeHead = function(){
    var oldHead = this.head;
  if (!this.head.next){
this.tail = null;
  return null;
}
    this.head = this.head.next;
    return oldHead.value;
  };

LinkedList.prototype
  .contains = function(target){
    var node = this.head;
    while ( node ){
      if ( node.value === target ){
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };



LinkedList.prototype
  .makeNode = function(value){
    var node = {};
    node.value = value;
    node.next = null;
    return node;
  };

*/