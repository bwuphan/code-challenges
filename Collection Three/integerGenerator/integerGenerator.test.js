 

describe('random1to5', function () {
  it('should return all numbers between 1 and 5, inclusive', function() {
    var seen = [0, 0, 0, 0, 0];
    for (var i = 0; i < 100000; i++) {
      seen[random1to5() - 1] = 1;
    }
    for (var i = 0; i < 5; i++) {
      seen[i].should.not.equal(0, 'function never generates ' + (i + 1));
    }
  });

  it('should return only numbers between 1 and 5, inclusive', function() {
    var rando;
    for (var i = 0; i < 100000; i++) {
      rando = random1to5();
      rando.should.be.a.Number;
      rando.should.be.below(6);
      rando.should.be.above(0);
    }
  });

  it('should have a sensible average', function () {
    var mean = 0;
    var total = 100000;
    
    for (var i = 0; i < total; i++) {
      mean += random1to5() / total;
    }

    // the mean should be ruffly 3
    mean.should.be.below(3 + 0.01);
    mean.should.be.above(3 - 0.01);
  });

  it('should return an even distribution', function() {
    var counts = [0, 0, 0, 0, 0];
    var rando;
    var total = 100000;
    var i;

    for (i = 0; i < total; i++) {
      rando = random1to5() - 1;
      counts[rando] += 1;
    }
    for (i = 0; i < counts.length; i++) {
      // each number (1 to 5) should be  ruffly 1/5 of the total sample
      (counts[i] / total).should.be.below( 1 / 5 + 0.05);
      (counts[i] / total).should.be.above( 1 / 5 - 0.05);
    }
  });
});

describe('random1to7', function () {
  it('returns all numbers between 1 and 7, inclusive', function() {
    var seen = [0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 100000; i++) {
      seen[random1to7() - 1] = 1;
    }
    for (var i = 0; i < 7; i++) {
      seen[i].should.not.equal(0, 'function never generates ' + (i + 1));
    }
  });

  it('should return only numbers between 1 and 7, inclusive', function() {
    var rando;
    for (var i = 0; i < 100000; i++) {
      rando = random1to7();
      rando.should.be.a.Number;
      rando.should.be.below(8);
      rando.should.be.above(0);
    }
  });

  it('should not call `Math.random()` directly', function() {
    // you're `random1to7()` function should not use `Math.random()` directly
    // but should instead delegate to `random1to5()` which _can_ use
    // `Math.random()`

    // stringify the function
    var func = random1to7.toString();
    
    // removes comments
    func = func.replace(/\/\*(.*)\*\//g, '');
    func = func.replace(/\/\/(.*)\n/g, '');

    // checks for `Math.random()`
    should.not.exist(func.match('Math.random'));
  });

  it('should have a sensible average', function () {
    var mean = 0;
    var total = 100000;
    
    for (var i = 0; i < total; i++) {
      mean += random1to7() / total;
    }

    // the mean should be ruffly 3.5
    mean.should.be.below(4 + 0.05);
    mean.should.be.above(4 - 0.05);
  });

  it('should return an even distribution', function() {
    var counts = [0, 0, 0, 0, 0, 0, 0];
    var rando;
    var total = 100000;
    var i;

    for (i = 0; i < total; i++) {
      rando = random1to7() - 1;
      counts[rando] += 1;
    }
    for (i = 0; i < counts.length; i++) {
      // each number (1 to 7) should be  ruffly 1 / 7 of the total sample
      (counts[i] / total).should.be.below( 1 / 7 + 0.05);
      (counts[i] / total).should.be.above( 1 / 7 - 0.05);
    }
  });

  it('should _really_ be random', function() {
    var res;
    var mean;
    var count;
    var i;
    var total = 100000;
    // check every `jump` random number for randomness
    // this test would fail if you simply successively returned 
    // 1,2,3,4,5,6,7,1,2,3, etc...
    // for example, it would fail for this implementation of `random1to7()`
    // var i = 0;
    // function random1to7(){
    //   return (++i) % 7 + 1;
    // }
    for (var jump = 1; jump < 10; jump++) {
      i = mean = count = 0;
      while (count < total) {
        res = random1to7();
        if (i % jump === 0) {
          mean += res / total;
          count++;
        }
        i = (++i) % jump;
      }
      mean.should.be.below(4.0 + 0.05);
      mean.should.be.above(4.0 - 0.05);
    }
  });
});


describe('random1to5', function() {
  it('should _really_ be random', function() {
    var res;
    var mean;
    var count;
    var i;
    var total = 100000;
    // check every `jump` random number for randomness
    // this test would fail if you simply successively returned 
    // 1,2,3,4,5,1,2,3, etc...
    // for example, it would fail for this implementation of `random1to5()`
    // var i = 0;
    // function random1to5(){
    //   return (++i) % 5 + 1;
    // }
    for (var jump = 1; jump < 10; jump++) {
      i = mean = count = 0;
      while (count < total) {
        res = random1to5();
        if (i % jump === 0) {
          mean += res / total;
          count++;
        }
        i = (++i) % jump;
      }
      mean.should.be.below(3.0 + 0.05);
      mean.should.be.above(3.0 - 0.05);
    }
  });
});
