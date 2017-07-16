'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function(tasks, callback) {
  /* START SOLUTION */
  var resultsArray = [];
  var resultsCount = 0;

  for (var i = 0; i < tasks.length; i++) {
    (function (i) {
      tasks[i](function (val) {
        resultsArray[i] = val;
        resultsCount++;
        if (resultsCount === tasks.length) {
          callback(resultsArray);
        }
      });
    })(i);
  }
  /* END SOLUTION */
};


var asyncMap = function(tasks, callback){
  var resultsArray = [];
  var resultsCount = 0;

  for(var i = 0; i < tasks.length; i++){
    tasks[i](function (result) {
      resultsArray[i] = result;
      resultsCount++;
      if(resultsCount === tasks.length){
        callback(resultsArray);
      }
    });
  }
  // From this point on, i === tasks.length
};

var wait3For1 = function (callback) {
      setTimeout(function() {
        console.log('1');
        callback(1);
      }, 300);
    };

    var wait2For2 = function (callback) {
      setTimeout(function() {
        console.log('2');
        callback(2);
      }, 200);
    };

    var wait5For4 = function (callback) {
      setTimeout(function() {
        callback(4);
      }, 500);
    };

    var wait1For3 = function (callback) {
      setTimeout(function() {
        callback(3);
      }, 100);
    };


    var wait1For5 = function (callback) {
      setTimeout(function() {
        callback(5);
      }, 100);
    };

 asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function(results) {
      console.log(results);
    });