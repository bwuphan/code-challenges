describe('DoublyLinkedList', () => {
  const DoublyLinkedList = require('./DoublyLinkedList.js').DoublyLinkedList;
  const Node = require('./DoublyLinkedList.js').Node;

  let dll;

  beforeEach(() => {
    dll = new DoublyLinkedList();
  });

  describe('constructor()', () => {
    it('inits with no head or tail.', () => {
      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();
    });
  });

  describe('append()', () => {
    it('makes the new node the head and tail if there was previously no head.', () => {
      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();

      dll.append(2);
      expect(dll.head).toBeTruthy();
      expect(dll.head.val).toBe(2);
      expect(dll.tail).toBeTruthy();
      expect(dll.tail.val).toBe(2);
    });

    it('appends and makes a new tail.', () => {
      dll.append(1);

      dll.append(2);

      expect(dll.head.val).toBe(1);
      expect(dll.tail.val).toBe(2);
      expect(dll.head.next.val).toBe(2);
      expect(dll.tail.prev.val).toBe(1);
      expect(dll.tail.next).toBeNull();
    });
  });

  describe('prepend()', () => {
    it('makes the new node the head and tail if there was previously no head.', () => {
      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();

      dll.prepend(2);
      expect(dll.head).toBeTruthy();
      expect(dll.head.val).toBe(2);
      expect(dll.tail).toBeTruthy();
      expect(dll.tail.val).toBe(2);
      expect(dll.length).toBe(1);
    });

    it('prepends and makes a new head.', () => {
      dll.prepend(2);
      dll.prepend(1);

      expect(dll.head.val).toBe(1);
      expect(dll.tail.val).toBe(2);
      expect(dll.head.next.val).toBe(2);
      expect(dll.tail.prev.val).toBe(1);
      expect(dll.tail.next).toBeNull();
      expect(dll.length).toBe(2);
    });
  });

  describe('removeHead()', () => {
    it('returns null if there is no head to remove.', () => {
      expect(dll.head).toBeNull();
      expect(dll.removeHead()).toBeNull();
      expect(dll.head).toBeNull();
      expect(dll.length).toBe(0);
    });

    it('removes the head and tail if there is only one node.', () => {
      dll.append(1);
      expect(dll.removeHead().val).toBe(1);
      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();
      expect(dll.length).toBe(0);
    });

    it('removes the head if there are 2 nodes.', () => {
      dll.append(1);
      dll.append(2);
      expect(dll.removeHead().val).toBe(1);
      expect(dll.head.val).toBe(2);
      expect(dll.head.next).toBeNull();
      expect(dll.head.prev).toBeNull();
      expect(dll.tail.val).toBe(2);
      expect(dll.tail.next).toBeNull();
      expect(dll.tail.prev).toBeNull();
      expect(dll.length).toBe(1);
    });

    it('removes the head if there are 3 or more nodes.', () => {
      dll.append(1);
      dll.append(2);
      dll.append(3);
      expect(dll.removeHead().val).toBe(1);
      expect(dll.head.val).toBe(2);
      expect(dll.head.next.val).toBe(3);
      expect(dll.head.prev).toBeNull();
      expect(dll.length).toBe(2);
    });
  });

  describe('removeTail()', () => {
    it('returns null if there is no tail to remove.', () => {
      expect(dll.tail).toBeNull();
      expect(dll.removeTail()).toBeNull();
      expect(dll.tail).toBeNull();
      expect(dll.length).toBe(0);
    });

    it('removes the head and tail if there is only one node.', () => {
      dll.append(1);
      expect(dll.removeTail().val).toBe(1);
      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();
      expect(dll.length).toBe(0);
    });

    it('removes the tail if there are 2 nodes.', () => {
      dll.append(1);
      dll.append(2);
      expect(dll.removeTail().val).toBe(2);
      expect(dll.head.val).toBe(1);
      expect(dll.head.next).toBeNull();
      expect(dll.head.prev).toBeNull();
      expect(dll.tail.val).toBe(1);
      expect(dll.tail.next).toBeNull();
      expect(dll.tail.prev).toBeNull();
      expect(dll.length).toBe(1);
    });

    it('removes the tail if there are 3 or more nodes.', () => {
      dll.append(1);
      dll.append(2);
      dll.append(3);
      expect(dll.removeTail().val).toBe(3);
      expect(dll.tail.val).toBe(2);
      expect(dll.tail.prev.val).toBe(1);
      expect(dll.tail.next).toBeNull();
      expect(dll.length).toBe(2);
    });
  });

  describe('removeNode()', () => {
    it('returns null if node is not in list.', () => {
      dll.append(1);
      dll.append(2);
      expect(dll.removeNode(new Node(3))).toBeNull();
    });

    it('returns null if the list is empty.', () => {
      expect(dll.removeNode(new Node(1))).toBeNull();
    });

    it('removes the head node if the node is the head.', () => {
      const node = dll.append(1);
      dll.append(2);
      expect(dll.removeNode(node)).toBe(node);
      expect(dll.length).toBe(1);
    });

    it('removes the tail node if the node is the tail.', () => {
      dll.append(1);
      const node = dll.append(2);
      expect(dll.removeNode(node)).toBe(node);
      expect(dll.length).toBe(1);
    });

    it('removes a node in the middle.', () => {
      dll.append(1);
      const node = dll.append(2);
      dll.append(3);
      expect(dll.removeNode(node)).toBe(node);
      expect(dll.length).toBe(2);
    });
  });
});
