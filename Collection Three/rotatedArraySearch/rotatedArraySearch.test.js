/* globals rotatedArraySearch */
var range = function (start, end, step) {
  var result = [];
  for (var i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};

var rotate = function (array, offset) {
  return array.slice(offset).concat(array.slice(0, offset));
};

describe('rotatedArraySearch', function () {
  it('should exist', function () {
    should.exist(rotatedArraySearch);
  });

  describe('when called on a rotated array', function () {
    describe('and a value that is in the array', function () {
      it('should return a number', function () {
        (typeof rotatedArraySearch([3, 4, 5, 2], 4)).should.be.equal('number');
      });

      it('should return the index of that item', function () {
        rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1).should.equal(4);
      });

      it('should return the index of that item quickly', function () {
        var start = 0;
        var end = 1000000;
        var step = 1;
        var offset = 247858;
        var value = 349744;
        var alot = range(start, end, step);
        var real = value - offset; // This logic is not applicable to all cases, just a subset.
        rotatedArraySearch(rotate(alot, offset), value).should.equal(real);
      });
    });

    describe('and a value that is not in the array', function () {
      it('should return null', function () {
        should.not.exist(rotatedArraySearch([1, 2, 3], 5));
      });
    });
  });
});
