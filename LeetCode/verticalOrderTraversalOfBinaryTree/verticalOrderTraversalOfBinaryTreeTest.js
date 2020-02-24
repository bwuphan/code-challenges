describe('verticalOrderTraversalOfBinaryTree', () => {
  const arrayToTree = require('../../Util/arrayToTree.js').arrayToTree;
  const verticalTraversal = require('./verticalOrderTraversalOfBinaryTree.js').verticalTraversal;

  it('passes test case for [3,9,20,null,null,15,7].', () => {
    const tree = arrayToTree([3,9,20,null,null,15,7]);
    expect(verticalTraversal(tree)).toEqual([[9],[3,15],[20],[7]]);
  });
});