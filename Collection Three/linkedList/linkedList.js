/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

var LinkedList = function(val) {
  //fill me in!
  this.head = null;
  this.tail = null;
  if (val) {
    this.addToTail(val);
  }
};

//write methods here!

LinkedList.prototype.addToTail = function(val) {
  const newNode = this.makeNode(val);
  if (this.tail) {
    this.tail.next = newNode;
    this.tail = newNode
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head) {
    const returnVal = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return returnVal;
  }
  return null;
};

LinkedList.prototype.contains = function(val) {
  let thisNode = this.head;
  while(thisNode) {
    if (thisNode.value === val) {
      return true;
    };
    thisNode = thisNode.next;
  };
  return false;
};

LinkedList.prototype.makeNode = function(val) {
  const node = {};
  node.value = val;
  node.next = null;
  return node;
};

var list = new LinkedList();
list.tail;         //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.head.value;   //yields '4';
console.log(list)
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
list.removeHead(); //yields '4';
console.log(list)
console.log(list.tail.value);   //yields '5';
list.removeHead(); //yields '5';
list.removeHead(); //yields 'null';

// var LinkedList = function() {
//   //fill me in!
//   /* START SOLUTION */
//   this.head = null;
//   this.tail = null;
//   /* END SOLUTION */
// };

// //write methods here!

// LinkedList.prototype.addToTail = function(/*START SOLUTION*/value/*END SOLUTION*/) {
//   /* START SOLUTION */
//   var newTail = this.makeNode(value);
//   if ( !this.head ) { this.head = newTail; }
//   if ( this.tail ) { this.tail.next = newTail; }
//   this.tail = newTail;
//   /* END SOLUTION */
// };

// LinkedList.prototype.removeHead = function() {
//   /* START SOLUTION */
//   var currentHead = this.head;
//   if (!this.head) {
//     return null;
//   }
//   if (this.head === this.tail) {
//     this.head = this.tail = null;
//   } else {
//     this.head = this.head.next;
//   }
//   return currentHead ? currentHead.value : null;
//   /* END SOLUTION */
// };

// LinkedList.prototype.contains = function(/*START SOLUTION*/target/*END SOLUTION*/) {
//   /* START SOLUTION */
//   var node = this.head;
//   while ( node ) {
//     if ( node.value === target ) { return true; }
//     node = node.next;
//   }
//   return false;
//   /* END SOLUTION */
// };

// LinkedList.prototype.makeNode = function(/*START SOLUTION*/value/*END SOLUTION*/) {
//   /* START SOLUTION */
//   var node = {};
//   node.value = value;
//   node.next = null;
//   return node;
//   /* END SOLUTION */
// };
