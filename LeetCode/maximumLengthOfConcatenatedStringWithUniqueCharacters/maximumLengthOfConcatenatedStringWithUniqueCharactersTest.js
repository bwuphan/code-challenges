describe('maximumLengthOfConcatenatedStringWithUniqueCharacters', () => {
  const maxLength = require('./maximumLengthOfConcatenatedStringWithUniqueCharacters').maxLength;

  it('Example 1', () => {
    const arr = ["un","iq","ue"];
    expect(maxLength(arr)).toBe(4);
  });

  it('Example 2', () => {
    const arr = ["cha","r","act","ers"];
    expect(maxLength(arr)).toBe(6);
  });

  it('Example 3', () => {
    const arr = ["abcdefghijklmnopqrstuvwxyz"]
    expect(maxLength(arr)).toBe(26);
  })
});