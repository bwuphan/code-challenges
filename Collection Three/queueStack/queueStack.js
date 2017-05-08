/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */

var Stack = function() {
  var storage = [];
  var length = 0;

  this.push = function(){
    storage[length] = arguments[0];
    length++;
  };

  this.pop = function(){
    if (length > 0) {
      var returnVal = storage[length - 1];
      // console.log('1', storage)
      length--;
      delete storage[length];
      // console.log('2', storage)
      return returnVal;
    }
    return null;
  };

  this.size = function(){
    return length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(){
    inbox.push(arguments[0]);
  };

  this.dequeue = function(){
    if (!outbox.size()) {
      var inboxSize = inbox.size();
      while (inboxSize > 0) {
        outbox.push(inbox.pop())
        inboxSize--;
      }
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size();
  };
};


var queue = new Queue();
      queue.enqueue('1');
      queue.enqueue('2');
      var item = queue.dequeue();
      // item.should.equal('1');
      console.log('1', item);
      queue.enqueue('3');
      item = queue.dequeue();
      // item.should.equal('2');
      console.log('2', item)
// var Stack = function() {
//   /* START SOLUTION */
//   var storage = [];
//   var length = 0;
//   /* END SOLUTION */

//   // add an item to the top of the stack
//   this.push = function() {
//     /* START SOLUTION */
//     storage[length++] = arguments[0];
//     /* END SOLUTION */
//   };

//   // remove an item from the top of the stack
//   this.pop = function() {
//     /* START SOLUTION */
//     if (length) {
//       var value = storage[--length];
//       delete storage[length];
//       return value;
//     }
//     /* END SOLUTION */
//   };

//   // return the number of items in the stack
//   this.size = function() {
//     /* START SOLUTION */
//     return length;
//     /* END SOLUTION */
//   };
// };

// /**
//   * Queue Class
//   */
// var Queue = function() {
//   // Use two `stack` instances to implement your `queue` Class
//   var inbox = new Stack();
//   var outbox = new Stack();

//   // called to add an item to the `queue`
//   this.enqueue = function() {
//     /* START SOLUTION */
//     inbox.push.apply(inbox, arguments);
//     /* END SOLUTION */
//     // TODO: implement `enqueue`
//   };

//   // called to remove an item from the `queue`
//   this.dequeue = function() {
//     /* START SOLUTION */
//     if (outbox.size() === 0) {
//       while (inbox.size() !== 0) {
//         outbox.push(inbox.pop());
//       }
//     }
//     return outbox.pop();
//     /* END SOLUTION */
//     // TODO: implement `dequeue`
//   };

//   // should return the number of items in the queue
//   this.size = function() {
//     /* START SOLUTION */
//     return inbox.size() + outbox.size();
//     /* END SOLUTION */
//     // TODO: implement `size`
//   };
// };
