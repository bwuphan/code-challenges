var Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(val) {
  const newNode = new Node(val);
  // If there is no head, make this the new head.
  if (!this.head) {
    this.head = newNode;
  }
  // Else, add to tail.
  else {
    const oldTail = this.tail;
    // If there is no tail, add tail to head.
    if (!this.tail) {
      this.head.next = newNode;
      newNode.prev = this.head;
    }
    // Else, add to previous tail.
    else {
      newNode.prev = oldTail;
      oldTail.next = newNode;
    }

    // Set tail to newest node.
    this.tail = newNode;
  }
}

LinkedList.prototype.removeFromHead = function() {
  // Only remove if a head exists.
  if (this.head) {
    this.head = this.head.next;

    // If the head and tail are the same, this is the only node and we need to null out this.tail.
    if (this.head === this.tail) {
      this.tail = null;
    }
  }
}

LinkedList.prototype.removeFromTail = function() {
  // Only remove if a tail exists.
  if (this.tail) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}

LinkedList.prototype.removeNode = function(node) {
  if (this.head === node) {
    this.removeFromHead();
  }
  else if (this.tail === node) {
    this.removeFromTail();
  }
  else {
    // Connect previous node to next node.
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

LinkedList.prototype.removeDuplicates = function() {
  let valObj = {};

  let curNode = this.head;
  while(curNode !== null) {
    const nextNode = curNode.next;
    // If the current node value is in valObj, remove the node.
    if (curNode.val in valObj) {
      this.removeNode(curNode);
    }
    // Else, set current node value in valObj.
    else {
      valObj[curNode.val] = true;
    }

    curNode = nextNode;
  }
}

LinkedList.prototype.outputVals = function() {
  let curNode = this.head;
  while (curNode !== null) {
    console.log(curNode.val);
    curNode = curNode.next;
  }
}

LinkedList.prototype.returnKthFromTail = function(k) {
  let i = 0;
  let curNode = this.tail;
  while (curNode !== null) {
    if (i === k) {
      return curNode;
    }
    i++;
    curNode = curNode.prev;
  }
  return null;
}

let ll = new LinkedList();
ll.addToTail(3);
ll.addToTail(4)
ll.addToTail(5);
ll.addToTail(5);
ll.addToTail(5);
ll.addToTail(6);
ll.addToTail(6);
ll.removeDuplicates();
ll.outputVals();


