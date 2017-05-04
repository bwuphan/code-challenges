 

describe('reverseArray', function() {
  it('should exist', function() {
    should.exist(reverseArray);
  });

  it('should be a function', function() {
    reverseArray.should.be.a.Function;
  });

  it('should return something', function() {
    var result = reverseArray(['ace', 'jack', 'queen']);
    should.exist(result);
  });

  it('should return an array', function() {
    var result = reverseArray(['ace', 'jack', 'queen']);
    result.should.be.an.instanceof(Array);
  });

  it('should handle an empty array', function() {
    // note: `eql()` is "deep equality"
    reverseArray([]).should.eql([]);
  });

  it('should reverse the provided 1 element array', function() {
    // note: `eql()` is "deep equality"
    reverseArray(['pow!']).should.eql(['pow!']);
  });
  
  it('should reverse the provided 2 element array', function() {
    // note: `eql()` is "deep equality"
    reverseArray(['weeping', 'willow']).should.eql(['willow', 'weeping']);
  });
  
  it('should reverse the provided 3 element array', function() {
    // note: `eql()` is "deep equality"
    reverseArray([1, 2, 3]).should.eql([3, 2, 1]);
  });

  it('should reverse the provided 4 element array', function() {
    // note: `eql()` is "deep equality"
    reverseArray([1, null, undefined, undefined]).should.eql([undefined, undefined, null, 1]);
  });

  it('should reverse a long array', function() {
    var val = '!!yticilpmis ,yticilpmis ,yticilpmis'.split(''); // note: aray not string
    var expected = 'simplicity, simplicity, simplicity!!'.split(''); // note: array not string
    reverseArray(val).should.eql(expected);
  });

/*  it('should return the original array', function(){
    var original = ['I\'m', 'that', 'really', 'cool', 'array'];
    // the returned array should be a reference to the original array
    reverseArray(original).should.be.equal(original);
  });*/

});
