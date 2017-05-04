/*
 * Create a doubly linked list with shift, unshift, push, pop, moveToEnd and
 * moveToFront methods.
 *
 * shift, unshift, push, and pop are the regular insertion and removal from the
 * ends methods, and moveToFront and moveToEnd take a node from the list and
 * move it to either the front of the list or the end of the list. All these
 * operations should be O(1).
 *
 * A doubly linked list is made up of nodes which have pointers to *both* the
 * node before and after them. For instance:
 *
 *        node             node             node             node
 *       ______           ______           ______           ______
 *      | head |.next => |      |.next => |      |.next => | tail |
 *      |  1   |         |  2   |         |  3   |         |  4   |
 *      |______| <= prev.|______| <= prev.|______| <= prev.|______|
 *
 *  front --> --> --> --> --> --> --> --> --> --> --> --> --> --> end
 */


var List = function () {
  /* START SOLUTION */
  this.head = null;
  this.tail = null;
  /* END SOLUTION */
};

var ListNode = function (prev, val, next) {
  /* START SOLUTION */
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
  /* END SOLUTION */
};

// Insert at the head of the list.
List.prototype.unshift = function (val) {
  /* START SOLUTION */
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }
  /* END SOLUTION */
};

// Delete at the head of the list.
List.prototype.shift = function () {
  /* START SOLUTION */
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
  /* END SOLUTION */
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  /* START SOLUTION */
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }
  /* END SOLUTION */
};

// Delete at the end of the list.
List.prototype.pop = function () {
  /* START SOLUTION */
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.val;
  }
  /* END SOLUTION */
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  /* START SOLUTION */
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }

  node.prev = node.next = null;

  // Don't delegate to shift, since we want to keep the same
  // object.

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  /* END SOLUTION */
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  /* START SOLUTION */
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }

  // Don't delegate to push, since we want to keep the same
  // object.

  node.prev = node.next = null;

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  /* END SOLUTION */
};

// Convert to an array
List.prototype.toArray = function () {
  /* START SOLUTION */
  var node = this.head || this.tail;
  var result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
  /* END SOLUTION */
};

// Convert from an array
List.fromArray = function (array) {
  /* START SOLUTION */
  var list = new List();
  array.forEach(list.push.bind(list));
  return list;
  /* END SOLUTION */
};

/* START SOLUTION */
// Insert a value right after the node.
ListNode.prototype.insertAfter = function (val) {
  var next = this.next;
  this.next = new ListNode(this, val, next);
  if (next) { next.prev = this.next; }
};

// Insert a value right before the node.
ListNode.prototype.insertBefore = function (val) {
  var prev = this.prev;
  this.prev = new ListNode(prev, val, this);
  if (prev) { prev.next = this.prev; }
};

ListNode.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};

/* END SOLUTION */
