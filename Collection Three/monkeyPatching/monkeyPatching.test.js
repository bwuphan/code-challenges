describe('extend', function() {
  describe('#size', function() {
    it('should exist', function() {
      var obj = {}; // this is a shortcut for `new Object()`
      should.exist(obj.size);
      // hint: `Object.prototype.size = function(){ ... }`
    });
    it('should be a function', function() {
      // `object's `size()` method should be a function
      var obj = {};
      obj.size.should.be.a.Function;
    });
    it('should return the number of keys for any object instance', function() {
      var obj = { a: 'foo', b: 'bar'};
      var result = obj.size();
      // if this fails, it means you're not returning anything
      should.exist(result);
      // if this fails, it means you're not returning the correct result
      // `obj` has 2 keys so `size()` should return 2
      result.should.be.equal(2);
    });
    it('should return the number of keys on the object and and not its prototype', function() {
      var SomeClassObject = {};
      SomeClassObject.prototype = {};
      SomeClassObject.prototype.aPrototypeProperty = 'foo';
      SomeClassObject.prototype.anotherPrototypeProperty = 'bar';
      var obj = Object.create(SomeClassObject);
      obj['key1'] = 'someValue1';
      obj['key2'] = 'someValue2';
      obj.size().should.be.equal(2);
    });
    it('should return zero for empty objects', function() {
      var obj = {};
      var result = obj.size();
      should.exist(result);
      // `obj` has 0 keys so `size()` should return 0
      result.should.be.equal(0);
    });
    it('should return different sizes for different objects', function() {
      var obj1 = { a: 'Bonjou' };
      var result1 = obj1.size();
      should.exist(result1);
      result1.should.be.equal(1);

      var obj2 = { a: 'konnichiwa', b: 'Hallo' };
      var result2 = obj2.size();
      should.exist(result2);
      result2.should.be.equal(2);

      // the size for obj1 should be uneffected by the size of obj2.
      result1 = obj1.size();
      result2.should.not.be.equal(result1);
    });
  });
  describe('#runTwice', function() {
    it('should exist', function() {
      var func = function() {};
      should.exist(func.runTwice);
      // hint: `Function.prototype.runTwice = function(){ ... }`
    });
    it('should be a function', function() {
      var func = function() { };
      func.runTwice.should.be.a.Function;
    });
    it('should be called twice', function() {
      var called = 0;
      var func = function() { called = called + 1; };
      func.runTwice();
      // the function `func` should have been called twice
      called.should.be.equal(2);
    });
    it('should have no side effects on other runTwice calls', function() {
      var called1 = 0;
      var func1 = function() { called1 = called1 + 1; };
      func1.runTwice();
      called1.should.be.equal(2);

      var called2 = 0;
      var func2 = function() { called2 = called2 + 1; };
      func2.runTwice();
      called2.should.be.equal(2);

      // `func1` should not be called when `runTwice` is called on a different
      // function
      called1.should.be.equal(2);
    });
    it('should call the function twice, both times in the correct context', function() {
      var context = {}; // the original context
      var calledContexts = [];
      var func = function() { return calledContexts.push(this); };
      func.runTwice(context);
      calledContexts.length.should.equal(2);
      calledContexts[0].should.equal(context);
      calledContexts[1].should.equal(context);
    });
    it('should call the function twice, both times with arguments', function() {
      var args = [3, 1, 4, 1, 5, 9, 2, 6, 5, 4];
      var resultArgs = []; // array of both arguments
      var resultArgs1;
      var resultArgs2;
      var func = function() { return resultArgs.push(arguments); };
      // call the function `func.runTwice` as if we did
      // `func.runTwice(null, 3, 1, 4, 1, 5, 9, 2, 6, 5, 4)`
      func.runTwice.apply(func, [null].concat(args));

      // convert the arguments objects to arrays
      resultArgs1 = Array.prototype.slice.call(resultArgs[0]);
      resultArgs2 = Array.prototype.slice.call(resultArgs[1]);

      resultArgs1.length.should.be.equal(args.length);
      resultArgs2.length.should.be.equal(args.length);

      for (var i = 0; i < args.length; i++) {
        resultArgs1[i].should.equal(args[i]);
        resultArgs2[i].should.equal(args[i]);
      }
    });
  });
  describe('#shuffle', function() {
    it('should exist', function() {
      var array = []; // this is a shortcut for `new Array()`
      should.exist(array.shuffle);
      // hint: `Array.prototype.shuffle = function() { ... }`
    });
    it('should be a function', function() {
      var array = [];
      array.shuffle.should.be.a.Function;
    });
    it('should return a new array', function() {
      var array = [1, 2, 3];
      var result = array.shuffle();
      should.exist(result);
      result.should.be.an.instanceOf(Array);
    });
    it('should return a new array that is not the original array', function() {
      var array = [1, 2, 3];
      var result = array.shuffle();
      should.exist(result);
      result.should.not.be.equal(array);
    });
    it('should return a shuffled array with the same length as the original', function() {
      var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = array.shuffle();
      result.length.should.be.equal(array.length);
    });
    it('should return a shuffled array with all of the elements from the original array', function() {
      var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = array.shuffle();
      for (var i = 0; i < array.length; i++) {
        should.exist(result[i]);
        // result[i] should be somewhere in `array`
        array.indexOf(result[i]).should.not.equal(-1);
      }
    });
    it('should not modify the original array', function() {
      var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // NOTE: we use `slice` here too copy all the elements for the first array
      // to the second
      var copy = array.slice(0);
      // notice how we're not testing the result of shuffle(). We're just
      // checking that it has no effect on the original array.
      var result = array.shuffle();
      for (var i = 0; i < array.length; i++) {
        array[i].should.equal(copy[i]);
      }
    });
    it('should shuffle the array', function() {
      // all this complicated crazyness just checks to see if your shuffled
      // array actually has been shuffled and unbiasedly (statistically random)
      // this could be caused by only randomising a sub set of the array
      // elements instead of all of them.
      // here's an example of a shuffle method that would not pass this test
      /*
        Array.prototype.shuffle = function(){
          var arr = this.slice(); // copy
          var tmp;
          tmp = arr[0];
          // just swap the first two elements
          arr[0] = arr[1];
          arr[1] = tmp;
          return arr;
        }
      */
      // for more info on how this test works, see:
      // http://en.wikipedia.org/wiki/Variance#Fair_die
      var array = [1, 2, 3, 4, 5, 6]; // 6 sided dice
      var results = [[], [], [], [], [], []];
      var n = 50000;

      var sum = function(array) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
          total += array[i];
        }
        return total;
      };
      var mean = function(array, n) {
        if (!n) { n = array.length; }
        return sum(array) / n;
      };
      var variance = function(array) {
        var total = sum(array);
        var m = mean(array);
        var _variance = 0;
        for (var i = 0; i < array.length; i++) {
          _variance += Math.pow(array[i] - m, 2) / array.length;
        }
        return _variance;
      };
      for (var i = 0; i < n; i++) {
        array = array.shuffle();
        for (var j = 0; j < array.length; j++) {
          should.exist(array[j]);
          results[j].push(array[j]);
        }
      }
      var checkResults = function(result, expectedMean, expectedVariance) {
        var resultMean = mean(result);
        // should be ruffly equal
        Math.round(resultMean * 10).should.equal(Math.round(expectedMean * 10), '(The mean multiplied by 10 and rounded)');
        var resultVariance = variance(result);
        Math.round(resultVariance * 10).should.equal(Math.round(expectedVariance * 10), '(The variance multiplied by 100 and rounded)');
      };
      var expectedMean = mean(array);
      var expectedVariance = variance(array);
      for (var i = 0; i < results.length; i++) {
        checkResults(results[i], expectedMean, expectedVariance);
      }
    });
  });
});
