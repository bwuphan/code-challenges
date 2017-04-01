var compose = function(){
  //Your code here
  return function(name) {

  }
};

var pipe = function(){
  //Your code here
};



/*
Compose
Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

Example
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var welcome = compose(greet, exclaim);
welcome('phillip'); //=> 'hi: PHILLIP!'
Pipe:
Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

pipe(add2, multiplyBy3)(5) //=> 21
pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63

HINT: You should use the functions reduce() and reduceRight() in your solutions.

use strict';

var should = chai.should();

describe('composePipe', function() {

  describe('Step 1: Compose', function() {

    it('should exist', function() {
      should.exist(compose);
    });
    it('should be a function', function() {
      compose.should.be.a.Function;
    });
    it('should return a function', function() {
      var result = compose(function() {return 'Hi!';});
      should.exist(result);
      result.should.be.a.Function;
    });
    it('should be able to compose 2 functions', function() {
      var greet = function(name){return 'hi: ' + name;};
      var exclaim = function(statement){return statement.toUpperCase() + '!'};
      var welcome = compose(greet, exclaim);
      welcome.should.be.a.Function;
      welcome('phillip').should.equal('hi: PHILLIP!');
      welcome('kia').should.equal('hi: KIA!');
    });
    it('should be able to compose multiple functions', function() {
      var first = function(array){return array[0];};
      var shift = function(array){return array.slice(1);};
      var fifth = compose(first, shift, shift,shift, shift);
      fifth.should.be.a.Function;
      (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
    });

    it('should handle multiple composes', function() {
      var first = function(array){return array[0];};
      var shift = function(array){return array.slice(1);};
      var fifth = compose(first, shift, shift, compose(shift, shift));
      fifth.should.be.a.Function;
      (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
    });
  });


  describe('Step 2: Pipe', function() {

    it('should exist', function() {
      should.exist(pipe);
    });
    it('should be a function', function() {
      pipe.should.be.a.Function;
    });
    it('should return a function', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(add2, multiplyBy3)).should.be.a.Function;
    });
    it('should pass the input through a function', function() {
      function add2(value){return value + 2;}
      (pipe(add2)(21)).should.equal(23);
    });
    it('should pass the input through 2 functions', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(add2, multiplyBy3)(5).should.equal(21));
    });
    it('should pass the input through multiple functions', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(add2, multiplyBy3, add2, multiplyBy3)(7).should.equal(87));
    });
    it('should be able to handle multiple pipes', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(pipe(add2, multiplyBy3), multiplyBy3)(7).should.equal(81));
    });

  });

});
*/