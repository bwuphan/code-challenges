 

describe('reverseLinkedList', function() {
  it('should exist', function() {
    should.exist(reverseLinkedList);
  });

  it('should be a function', function() {
    reverseLinkedList.should.be.a.Function;
  });

  it('should return a node object', function() {
    var result = reverseLinkedList(Node());
    should.exist(result);
    result.should.be.an.instanceof(Object);
  });

  it('should return the same node if next is null', function() {
    var node = Node('A');
    var result = reverseLinkedList(node);
    result.should.equal(node);
  });

  it('should return the next node if next.next is null', function() {
    var first = Node('A');
    var last = first.next = Node('B');

    var result = reverseLinkedList(first);
    result.should.equal(last);
  });

  it('should reverse a long list', function() {
    var root = Node('A');
    var nodeB = root.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var newRoot = reverseLinkedList(root);
    newRoot.should.equal(nodeE);
    nodeE.next.should.equal(nodeD);
    nodeD.next.should.equal(nodeC);
    nodeC.next.should.equal(nodeB);
    nodeB.next.should.equal(root);
    should.not.exist(root.next);
  });
});
