describe('sameTree', () => {
  const arrayToTree = require('../Util/arrayToTree.js').arrayToTree;
  const isSameTree = require('./sameTree.js').isSameTree;

  it('returns true [1,2,3] [1,2,3].', () => {
    const tree1 = arrayToTree([1,2,3]);
    const tree2 = arrayToTree([1,2,3]);

    expect(isSameTree(tree1, tree2)).toBe(true);
  });

  it('returns false [1,2], [1, null, 2].', () => {
    const tree1 = arrayToTree([1,2]);
    const tree2 = arrayToTree([1,null, 2]);

    expect(isSameTree(tree1, tree2)).toBe(false);
  });

  it('returns false [1,2,1] [1,1,2].', () => {
    const tree1 = arrayToTree([1,2,1]);
    const tree2 = arrayToTree([1,1,2]);

    expect(isSameTree(tree1, tree2)).toBe(false);
  });
});