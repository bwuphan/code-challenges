'use strict';

 

describe('functionalMath', function() {

  describe('number functions', function() {
    it('should have functions for numbers 0 to 9', function() {
      should.exist(zero);
      zero.should.be.a.Function;
      should.exist(one);
      one.should.be.a.Function;
      should.exist(two);
      two.should.be.a.Function;
      should.exist(three);
      three.should.be.a.Function;
      should.exist(four);
      four.should.be.a.Function;
      should.exist(five);
      five.should.be.a.Function;
      should.exist(six);
      six.should.be.a.Function;
      should.exist(seven);
      seven.should.be.a.Function;
      should.exist(eight);
      eight.should.be.a.Function;
      should.exist(nine);
      nine.should.be.a.Function;
    });

    it('should return numbers when invoked with no callback', function() {
      (zero()).should.equal(0);
      (one()).should.equal(1);
      (two()).should.equal(2);
      (three()).should.equal(3);
      (four()).should.equal(4);
      (five()).should.equal(5);
      (six()).should.equal(6);
      (seven()).should.equal(7);
      (eight()).should.equal(8);
      (nine()).should.equal(9);
    });

    it('should invoke callback when invoked with a callback', function() {
      var identity = function(number) { return number; };
      (zero(identity)).should.equal(0);
      (one(identity)).should.equal(1);
      (two(identity)).should.equal(2);
      (three(identity)).should.equal(3);
      (four(identity)).should.equal(4);
      (five(identity)).should.equal(5);
      (six(identity)).should.equal(6);
      (seven(identity)).should.equal(7);
      (eight(identity)).should.equal(8);
      (nine(identity)).should.equal(9);
    });

  });

  describe('math operators', function() {
    it('should be functions', function() {
      should.exist(plus);
      plus.should.be.a.Function;
      should.exist(minus);
      minus.should.be.a.Function;
      should.exist(dividedBy);
      dividedBy.should.be.a.Function;
      should.exist(multipliedBy);
      multipliedBy.should.be.a.Function;
    });

    it('should be able to add numbers', function() {
      (one(plus(one()))).should.equal(2);
      (one(plus(five()))).should.equal(6);
      (one(plus(nine()))).should.equal(10);
    });

    it('should be able to subract numbers', function() {
      (one(minus(one()))).should.equal(0);
      (one(minus(five()))).should.equal(-4);
      (one(minus(nine()))).should.equal(-8);
    });

    it('should be able to multiply numbers', function() {
      (one(multipliedBy(one()))).should.equal(1);
      (one(multipliedBy(five()))).should.equal(5);
      (one(multipliedBy(nine()))).should.equal(9);
    });

    it('should be able to divide numbers', function() {
      (two(dividedBy(two()))).should.equal(1);
      (nine(dividedBy(three()))).should.equal(3);
      (six(dividedBy(two()))).should.equal(3);
    });

    it('should be able to be chained together', function() {
      five(multipliedBy((one(plus(one()))))).should.equal(10);
      (six(multipliedBy(five(multipliedBy(three()))))).should.equal(90);
    });

  });
  
});

