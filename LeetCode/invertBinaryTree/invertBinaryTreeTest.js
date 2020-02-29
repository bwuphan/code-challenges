describe('verticalOrderTraversalOfBinaryTree', () => {
  const arrayToTree = require('../../Util/arrayToTree.js').arrayToTree;
  const invertTree = require('./invertBinaryTree.js').invertTree;

  it('passes test case for [3,9,20,null,null,15,7].', () => {
    const tree = arrayToTree([4,2,7,1,3,6,9]);
    expect(invertTree(tree)).toEqual(arrayToTree([4,7,2,9,6,3,1]));
  });
});