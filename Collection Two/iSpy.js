// In testing, a spy function is one that keeps track of various metadata regarding its invocations. Some examples of properties that a spy might track include:

// Whether it was invoked
// How many times it was invoked
// What arguments it was called with
// What contexts it was called in
// What values it returned
// Whether it threw an error
// For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

// .callCount() — returns the number of times spy has been called
// .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
// .returned(val) — returns true if spy ever returned val, else returns false
// Below is a specific example of how spyOn might work in the wild.

// function adder(n1, n2) { return n1 + n2; }
// var adderSpy = spyOn( adder );

// adderSpy(2, 4); // returns 6
// adderSpy(3, 5); // returns 8
// adderSpy.callCount(); // returns 2
// adderSpy.wasCalledWith(4); // true
// adderSpy.wasCalledWith(0); // false
// adderSpy.returned(8); // true
// adderSpy.returned(0); // false

var spyOn = function(func) {
  // I spy with my little eye… your code here
  let timesCalled = 0;
  let context = this;
  let called = [];
  let returns = [];
  const spy = function() {
  	for (let i = 0; i < arguments.length; i++) {
  		let inCalled = false;
  		for (let j = 0; j < called.length; j++) {
  			if (called[j] === arguments[i]) {
  				inCalled = true;
  			}
  		}
      if (!inCalled) {
  		called.push(arguments[i])
      }
  	};
  	timesCalled++;
  	const returnValue = func.apply(context, arguments);
    let hasReturned = false;
    for (let x = 0; x < returns.length; x++) {
      if (returns[x] === returnValue) {
        hasReturned = true;
      }
    }
    if (!hasReturned) {
      console.log(returnValue, returns)
      returns.push(returnValue)
    }
  	return returnValue;
  }
  spy.callCount = function() {
  	return timesCalled;
  }
  spy.wasCalledWith = function(val) {
  	for (let i = 0; i < called.length; i++) {
      if (val === called[i]) {
        return true;
      }
    }
    return false;
  }
  spy.returned = function(val) {
  	for (let i = 0; i < returns.length; i++) {
      if (val === returns[i]) {
        return true;
      }
    }
    return false;
  };
  return spy;
}

function adder(n1, n2) { return n1 + n2; }
var adderSpy = new spyOn( adder );

console.log(adderSpy(2, 4)); // returns 6
console.log(adderSpy(3, 5)); // returns 8
console.log(adderSpy.callCount());
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false