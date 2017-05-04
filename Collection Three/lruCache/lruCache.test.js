/* globals LRUCache */
describe('LRUCache', function () {
  it('should exist', function () {
    expect(LRUCache).to.exist;
  });

  describe('when populated', function () {
    describe('under its limit', function () {
      it('should contain all of the populated items', function () {
        var cache = new LRUCache(5);
        for (var i = 0; i < 4; i++) { cache.set(i, i); }
        for (i = 0; i < 4; i++) { expect(cache.get(i)).to.equal(i); }
      });
    });

    describe('over its limit', function () {
      it('should contain exactly limit items', function () {
        var cache = new LRUCache(10);
        for (var i = 0; i < 15; i++) { cache.set(i, i); }
        expect(cache.size()).to.equal(10);
      });

      it('should only contain the most recently used items', function () {
        var cache = new LRUCache(10);
        for (var i = 0; i < 15; i++) { cache.set(i, i); }
        for (i = 0; i < 5; i++) { expect(cache.get(i)).to.equal(null); }
        for (i = 5; i < 15; i++) { expect(cache.get(i)).to.equal(i); }
      });

      it('should remove items in LRU order', function () {
        var cache = new LRUCache(10);
        for (var i = 0; i < 8; i++) { cache.set(i, i); }
        cache.get(0);
        for (i = 8; i < 14; i++) { cache.set(i, i); }

        expect(cache.get(0)).to.equal(0);
        expect(cache.get(1)).to.equal(null);
      });
    });
  });
});

