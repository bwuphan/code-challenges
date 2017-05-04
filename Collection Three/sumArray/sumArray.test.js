describe('sumArray()', function() {
  it('should exist', function() {
    should.exist(sumArray);
  });

  it('should be a function', function() {
    sumArray.should.be.a.Function;
  });

  it('should return a number', function() {
    var sum = sumArray([1, 2, 3]);
    should.exist(sum);
  });

  var generateTest = function(arr, seq, sum) {
    // a clever way to generate multiple tests while still ensuring that
    // the students will see the contents of the test if they fail the test
    var test = new Function([
      '  // the _contiguous_ sub-subsequence with the largest sum of ' + JSON.stringify(arr),
      '  // is ' + JSON.stringify(seq) + ' and its sum is ' + JSON.stringify(sum),
      '  sumArray(' + JSON.stringify(arr) + ').should.equal(' + JSON.stringify(sum) + ');'
    ].join('\n'));
    it('should return the largest sum of _contiguous_ elements for `' + JSON.stringify(arr) + '`', test);
  };
  generateTest([1, 2, 3], [1, 2, 3], 6);
  generateTest([4, -1, 5], [4, -1, 5], 8);
  generateTest([10, -11, 11], [11], 11);
  generateTest([-7, -6, -9], [-6], -6);
  generateTest([1, 2, 3, -6, 4, 5, 6], [4, 5, 6], 15);
  generateTest([1, 2, 3, -5, 4, 5, 6], [1, 2, 3, -5, 4, 5, 6], 16);
  generateTest([1, 2, 3, -4, 5], [1, 2, 3, -4, 5], 7);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4], [1, 2, 3, -4, 5, -4, 5], 8);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4, -4], [1, 2, 3, -4, 5, -4, 5], 8);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4, -4, -1], [1, 2, 3, -4, 5, -4, 5], 8);
  generateTest([1, 2, 3, -4, 5, -4, 5, -4, -4, 10], [1, 2, 3, -4, 5, -4, 5, -4, -4, 10], 10);
  generateTest([-5, 2, 3], [2, 3], 5);
  generateTest([-5, -5, -5, 2, 3], [2, 3], 5);
  generateTest([-3, -2, -1, -2, -3], [-1], -1);
  generateTest([99], [99], 99);
});
