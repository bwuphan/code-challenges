describe('stringCompression', () => {
  var compress = require('./stringCompression.js').compress;

  it('passes test case 1.', () => {
    expect(["a","a","b","b","c","c","c"]).toEqual(["a","2","b","2","c","3"]);
  });

  it('passes test case 2.', () => {
    expect(["a"]).toEqual(["a"]);
  });

  it('passes test case 3.', () => {
    expect(["a","b","b","b","b","b","b","b","b","b","b","b","b"]).toEqual(["a","b","1","2"]);
  });
});
