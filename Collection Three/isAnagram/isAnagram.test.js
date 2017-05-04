 

describe('isAnagram', function() {
  it('should exist on the String prototype', function() {
    should.exist(String.prototype.isAnagram);
  });

  it('should be a function', function() {
    String.prototype.isAnagram.should.be.a.Function;
  });

  it('should return a boolean', function() {
    var result = ('hello').isAnagram('hello');
    should.exist(result);
    result.should.be.a.Boolean;
  });

  it('should return true for an anagram word', function() {
    var result = ('debitcard').isAnagram('badcredit');
    result.should.be.true;
  });

  it('should return false for a non-anagram word', function() {
    var result = ('malevolent').isAnagram('flatulence');
    result.should.be.false;
  });

  it('should return true for an anagram phrase with spaces and punctuation', function() {
    var result = ('Tom Marvolo Riddle').isAnagram('I am Lord Voldemort.');
    result.should.be.true;
  });

  it('should return false for a string with the same letters, but the wrong number of letters', function() {
    var result = ('abcabc').isAnagram('abc');
    result.should.be.false;
  });

  it('should return false for a string with the same letters, but the wrong number of letters', function() {
    var result = ('abc').isAnagram('abcabc');
    result.should.be.false;
  });

  it('should return false for a non-anagram phrase with spaces and punctuation', function() {
    var result = ('Principal Skinner').isAnagram('I am Krusty the Clown.');
    result.should.be.false;
  });

  it('should return false for the same string', function() {
    // A word is not its own anagram by definition.
    var result = ('anagram').isAnagram('anagram');
    result.should.be.false;
  });

  it('should return false for a phrase with the same letters in the same order', function() {
    // This one is more debatable, but it does not involve transposition of 
    // letters so it is not an anagram.
    var result = ('Ana Gram!').isAnagram('A nagram.');
    result.should.be.false;
  });

  context('EXTRA CREDIT', function () {
    it('should not be an enumerable property of the String prototype', function() {
      var string = 'a string';
      for (var i in string) {
        var letter = string[i];
        // If we are enumerating the letters in a string, we don't want to get 
        // a function!
        letter.should.not.equal(string.isAnagram);
      }
    });
  });

});
