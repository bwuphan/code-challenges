var bind = function(func, context){
  //Your code here
  return function(){
    //Your code here
    var arg = arguments.splice(1)
    func.apply(context, arg)
  }
};

// Function.prototype.bind = function(context) {
//   //Your code here
//   return function(){
//     //Your code here
//   }
// };

var alice = {
  name: 'alice',
  shout: function () {
    console.log('here comes' + ' ' + this.name);
  }
};

console.log(alice.shout)
boundShout = bind(alice.shout, { name: 'bob' })
console.log(boundShout())

/*
Function Bind
Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.

For example, if we have the following object:

var alice = {
  name: 'alice',
  shout: function () {
    alert('here comes' + ' ' + this.name);
  }
};

alice.shout() //=> 'here comes alice'
If you use your bind function with the context { name: 'bob' }, as is shown here:


boundShout = bind(alice.shout, { name: 'bob' })
Then calling boundShout() will alert 'here comes bob'

The following example should also work in the following way once your function is implemented:

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'diet');

boundFunc('coke'); //=> 'dietcoke'
Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object. This will be similar to your first solution, but should be able to be used in the following way:

var alice = {
  name: 'alice',
  shout: function () {
    alert(this.name);
  }
};

var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'

boundShout = alice.shout.bind({ name: 'bob' });
boundShout(); // alerts 'bob'
DO NOT use the native bind() function in your solutions. You may use the functions call() and apply().

*/