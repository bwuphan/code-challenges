 

describe('getElementsByClassName', function() {
  describe('constructor', function() {
    it('should exist', function() {
      should.exist(getElementsByClassName);
    });
    it('should be a function', function() {
      // `typeof getElementByClassName !== 'function'` but it _should_ be!
      getElementsByClassName.should.be.a.Function;
    });
    it('should have a body tag', function() {
      should.exist($('body')[0]);
    });
  });
});
