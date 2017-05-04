
// Add polyfill for Function-bind
Function.prototype.bind = function (ctx) {
  var self = this;
  return function () {
    return self.apply(ctx, arguments);
  };
};

describe('double-list', function () {
  it('should exist', function () {
    should.exist(List);
  });

  it('should construct new Lists', function () {
    (new List()).should.be.an.instanceof(List);
  });

  describe('insertion', function () {
    describe('unshift', function () {
      it('should insert at the head of a list', function () {
        var list = List.fromArray([2, 3, 4, 5]);
        list.unshift(1);
        list.toArray().should.eql([1, 2, 3, 4, 5]);
      });
    });

    describe('push', function () {
      it('should insert at the end of a list', function () {
        var list = List.fromArray([1, 2, 3, 4]);
        list.push(5);
        list.toArray().should.eql([1, 2, 3, 4, 5]);
      });
    });
  });

  describe('deletion', function () {
    describe('shift', function () {
      it('should remove from the head of a list', function () {
        var list = List.fromArray([1, 2, 3, 4, 5]);
        list.shift();
        list.toArray().should.eql([2, 3, 4, 5]);
      });
    });

    describe('pop', function () {
      it('should remove from the end of a list', function () {
        var list = List.fromArray([1, 2, 3, 4, 5]);
        list.pop();
        list.toArray().should.eql([1, 2, 3, 4]);
      });
    });
  });

  describe('interaction with arrays', function () {
    describe('toArray', function () {
      it('should convert to an array', function () {
        var list = new List();
        list.push(1); list.push(2); list.push(3);
        list.toArray().should.eql([1, 2, 3]);
      });
    });

    describe('fromArray', function () {
      it('should convert from an array', function () {
        var list = List.fromArray([1, 2, 3]);
        list.toArray().should.eql([1, 2, 3]);
      });
    });
  });

  describe('movement', function () {
    describe('moveToFront', function () {
      it('should move a node to the front', function () {
        var list = List.fromArray([1, 2, 3]);
        list.moveToFront(list.head.next);
        list.toArray().should.eql([2, 1, 3]);
      });
    });

    describe('moveToEnd', function () {
      it('should move a node to the end', function () {
        var list = List.fromArray([1, 2, 3]);
        list.moveToEnd(list.head.next);
        list.toArray().should.eql([1, 3, 2]);
      });
    });
  });
});
