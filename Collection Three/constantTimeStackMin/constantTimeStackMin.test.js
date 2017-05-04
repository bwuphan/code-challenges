 

describe('Stack', function() {
  describe('constructor', function() {
    it('should exist', function() {
      should.exist(Stack);
    });
    it('should be a function', function() {
      // `typeof Stack !== 'function'` but it _should_ be a function!
      Stack.should.be.a.Function;
    });
    it('should be useable as a constructor', function() {
      var stack = new Stack();
      // the constructor should return an object
      should.exist(stack);
    });
    it('should return an instance of a stack', function() {
      var stack = new Stack();
      // aka, `stack instanceof Stack` is returning false, but it should be true!
      stack.should.be.an.instanceOf(Stack);
    });
    it('should return difference instances each time its called using the `new` keyword', function() {
      var stack1 = new Stack();
      var stack2 = new Stack();
      // aka, `stack === stack` but they should be two different `Stack` instances!
      stack1.should.not.be.equal(stack2);
    });
  });

  describe('#push', function() {
    it('should exist', function() {
      var stack = new Stack();
      // stack instances should have a `push` method
      should.exist(stack.push);
    });
    it('should add an item to the stack', function() {
      var stack = new Stack();
      // aka, calling `push` should not throw an error
      (function() {
        stack.push(1);
      }).should.not.throw();
    });
  });
  describe('#pop', function() {
    it('should exist', function() {
      var stack = new Stack();
      // aka, stack instances should have a `pop` method
      should.exist(stack.pop);
    });
    it('should not throw an error', function() {
      var stack = new Stack();
      stack.push(2);
      // aka, calling `pop` should not throw an error
      (function() {
        stack.pop();
      }).should.not.throw();
    });
  });

  describe('#size', function() {
    it('should exist', function() {
      var stack = new Stack();
      should.exist(stack.size);
    });

    it('should return the number of elements in the stack', function() {
      var stack = new Stack();
      stack.push(1);
      // we just added an element so the stack's size should be 1
      stack.size().should.be.equal(1);
      stack.push(2);
      // we just added _another_ element so the stack's size should now be 2
      stack.size().should.be.equal(2);
      stack.pop();
      // we just remove an element so the stack's size should be 1
      stack.size().should.be.equal(1);
      stack.pop();
      // we just remove _another_ element so the stack's size should now be 0
      stack.size().should.be.equal(0);
    });
  });

  describe('#min', function() {
    it('should exist', function() {
      var stack = new Stack();
      should.exist(stack.size);
    });

    it('should return the min of all the elements in the stack', function() {
      var stack = new Stack();
      stack.push(100);
      // we just added an element so the stack's size should be 1
      stack.min().should.be.equal(100);
      stack.push(200);
      // we just added _another_ element so the stack's size should now be 2
      stack.min().should.be.equal(100);
      stack.push(100);
      // we just remove an element so the stack's size should be 1
      stack.min().should.be.equal(100);
      stack.push(50);
      // we just remove _another_ element so the stack's size should now be 0
      stack.min().should.be.equal(50);
      stack.push(50);
      stack.min().should.be.equal(50);
    });
  });
});

