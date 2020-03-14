describe('coinChange', () => {
  var coinChange = require('./coinChange.js').coinChange;

  it('passes test case 1.', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  it('passes test case 2.', () => {
    expect(coinChange([2])).toBe(1);
  });
});