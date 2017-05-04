var makeNode = function(value) {
  return {
    next: null,
    value: value,
    contains: function(value) {
      return (this.value === value) || (this.next && this.next.contains(value));
    }
  };
};

var makeLinkedList = function() {
  var head = null;
  var tail = null;
  return {
    add: function(value) {
      var newTail = makeNode(value);
      if (tail) {
        tail.next = newTail;
      }
      tail = newTail;
      head = head || tail;
    },
    contains: function(value) {
      return !!head && head.contains(value);
    }
  };
};
