class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    const newNode = new Node(val);

    if (!this.head)
      this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  prepend(val) {
    const newNode = new Node(val);

    if (!this.head)
      this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return newNode;
  }

  removeHead() {
    const oldHead = this.head;
    if (!this.head)
      return null;
    else if (this.length === 1)
      this.head = this.tail = null;
    else {
      const newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;

      if (this.length === 2) this.head.next = null;
    }

    if (this.length) this.length--;
    return oldHead;
  }

  removeTail() {
    const oldTail = this.tail;
    if (!this.tail)
      return null;
    else if (this.length === 1)
      this.head = this.tail = null;
    else {
      const newTail = this.tail.prev
      newTail.next = null;
      this.tail = newTail;

      if (this.length === 2) this.tail.prev = null;
    }

    if (this.length) this.length--;
    return oldTail;
  }

  removeNode(node) {
    if (this.head === node)
      return this.removeHead();
    else if (this.tail === node)
      return this.removeTail();
    else if (node.prev && node.next) {
      this.length--;
      node.prev.next = node.next;
      node.next.prev = node.prev;
      return node;
    }

    return null;
  }
}

module.exports = {
  DoublyLinkedList,
  Node
}