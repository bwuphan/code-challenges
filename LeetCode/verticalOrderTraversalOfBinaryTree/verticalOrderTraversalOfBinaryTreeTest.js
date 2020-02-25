describe('verticalOrderTraversalOfBinaryTree', () => {
  const arrayToTree = require('../../Util/arrayToTree.js').arrayToTree;
  const verticalTraversal = require('./verticalOrderTraversalOfBinaryTree.js').verticalTraversal;

  it('passes test case for [3,9,20,null,null,15,7].', () => {
    const tree = arrayToTree([3,9,20,null,null,15,7]);
    expect(verticalTraversal(tree)).toEqual([[9],[3,15],[20],[7]]);
  });

  it('passes test case for [0,2,1,3,null,null,null,4,5,null,7,6,null,10,8,11,9]', () => {
    const tree = arrayToTree([0,2,1,3,null,null,null,4,5,null,7,6,null,10,8,11,9]);
    expect(verticalTraversal(tree)).toEqual([[4,10,11],[3,6,7],[2,5,8,9],[0],[1]]);
  });

  fit('passes test case for [0,2,1,3,null,5,22,9,4,12,25,null,null,13,14,8,6,null,null,null,null,null,27,24,26,null,17,7,null,28,null,null,null,null,null,19,null,11,10,null,null,null,23,16,15,20,18,null,null,null,null,null,21,null,null,29]', () => {
    const tree = arrayToTree([0,2,1,3,null,5,22,9,4,12,25,null,null,13,14,8,6,null,null,null,null,null,27,24,26,null,17,7,null,28,null,null,null,null,null,19,null,11,10,null,null,null,23,16,15,20,18,null,null,null,null,null,21,null,null,29]);
    expect(verticalTraversal(tree)).toEqual([[13,28],[9,24,27,16],[3,8,14,11,19],[2,4,12,7,17,26,15,20,23],[0,5,6,10,21,29],[1,25,18],[22]]);
  });
});