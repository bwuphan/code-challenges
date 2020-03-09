describe('lruCache', () => {
  let LRUCache;
  beforeEach(() => {
    LRUCache = require('../LeetCode/lruCache.js').LRUCache;

  });

  it('passes test case 1', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    expect(cache.get(2)).toBe(-1);       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    expect(cache.get(1)).toBe(-1);       // returns -1 (not found)
    expect(cache.get(3)).toBe(3);       // returns 3
    expect(cache.get(4)).toBe(4);       // returns 4
  });
});