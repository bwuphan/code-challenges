describe('reverseWordsInString()', () => {
  const reverseWords = require('./reverseWordsInString.js').reverseWords;

  it('example 1', () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });

  it('example 2', () => {
    expect(reverseWords("  hello world!  ")).toBe("world! hello");
  });

  it('example 3', () => {
    expect(reverseWords("a good   example")).toBe("example good a");
  });
});