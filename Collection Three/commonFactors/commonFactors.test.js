 

describe('commonFactors', function() {
  it('should exist', function() {
    should.exist(commonFactors);
  });

  it('should be a function', function() {
    commonFactors.should.be.a.Function;
  });

  it('should return a array', function() {
    var result = commonFactors(10, 100);
    should.exist(result);
    result.should.be.an.instanceOf(Array);
  });

  it('should return the right number of factors', function() {
    var result = commonFactors(8, 4);
    // the common factors for 8 and 4 are: 1, 2, and 4
    result.length.should.be.equal(3);
  });

  it('should find all factors from largest to smallest', function() {
    // sorry to be sticklery but the instructions say the result should be
    // in order of largest to smallest.
    var result = commonFactors(10, 100);
    for (var i = 1; i < result.length; i++) {
      result[i - 1].should.be.above(result[i]);
    }
  });

  it('should find all factors for 12 and 18', function() {
    commonFactors(12, 18).should.eql([6, 3, 2, 1]);
  });

  it('should find all factors for 100 and 10', function() {
    commonFactors(100, 10).should.eql([10, 5, 2, 1]);
  });

  it('should find all factors for 64 and 1024', function() {
    commonFactors(64, 1024).should.eql([64, 32, 16, 8, 4, 2, 1]);
  });

  it('should find all the factors of 8 * 9 * 10 and 7 * 8 * 9 * 10', function() {
    var expected = [720, 360, 240, 180, 144, 120, 90, 80, 72, 60, 48, 45, 40, 36, 30, 24, 20, 18, 16, 15, 12, 10, 9, 8, 6, 5, 4, 3, 2, 1];
    commonFactors( 8 * 9 * 10, 7 * 8 * 9 * 10).should.eql(expected);
  });

  it('should find all the common factors of 2 and 2', function() {
    commonFactors(2, 2).should.be.eql([2, 1]);
  });

  it('should find all the common factors of 1 and 1', function() {
    // what a cruel edgecase! but alas, the common factors of any number with 
    // itself is the set just the original common factors and since 1's only 
    // factor is 1, this common factors with itself is also just 1
    commonFactors(1, 1).should.be.eql([1]);
  });
});
