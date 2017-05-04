describe('powerOfTwo', function() {
  it('should exist', function() {
    should.exist(isPowerOfTwo);
  });
  
  it('should be a function', function() {
    isPowerOfTwo.should.be.a.Function;
  });
  
  it('should return `false` if n is not a power of 2', function() {
    var result = isPowerOfTwo(209);
    should.exist(result);
    result.should.equal(false);
  });
  
  it('should return `false` for non integers', function() {
    var result = isPowerOfTwo(38.7);
    should.exist(result);
    result.should.equal(false);
  });
  
  it('should return `false` for negative numbers', function() {
    // positive integer exponents only
    var result = isPowerOfTwo(-27);
    should.exist(result);
    result.should.equal(false);
  });

  it('should return `false` for numbers less than 1', function() {
    // positive integer exponents only
    var result = isPowerOfTwo(0.5);
    should.exist(result);
    result.should.equal(false);
  });

  it('should return `true` if n is a power of 2', function() {
    var result = isPowerOfTwo(32);
    should.exist(result);
    result.should.be.true;
  });

  it('should return `false` if n is not a power of 2', function() {
    var result = isPowerOfTwo(33);
    should.exist(result);
    result.should.be.false;
  });
  it('should return `true` for all powers of two up to 2^53', function() {
    var pow = 1;
    while (pow <= 53) { isPowerOfTwo(Math.pow(2, pow++)).should.be.true; }
  });
});
