/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    /* START SOLUTION */
    var storage = [];
    var minValueStorage = [];
    /* END SOLUTION */

  // add an item to the top of the stack
    this.push = function(value) {
    /* START SOLUTION */
      if (!minValueStorage.length ||
          value <= minValueStorage[minValueStorage.length - 1]) {
        minValueStorage.push(value);
      }
      storage.push(value);
    /* END SOLUTION */
    };

  // remove an item from the top of the stack
    this.pop = function() {
    /* START SOLUTION */

      var value = storage.pop();
      if (value === minValueStorage[minValueStorage.length - 1]) {
        minValueStorage.pop();
      }
      return value;
    /* END SOLUTION */
    };

  // return the number of items in the stack
    this.size = function() {
    /* START SOLUTION */
      return storage.length;
    /* END SOLUTION */
    };
  
  // return the minimum value in the stack
    this.min = function() {
    /* START SOLUTION */
      return minValueStorage[minValueStorage.length - 1];
    /* END SOLUTION */

    };

  };

