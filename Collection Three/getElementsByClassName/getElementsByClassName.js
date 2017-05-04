// The browser comes with a utility function getElementById that returns an 
// element whose id matches the input. Write a function that returns an array 
// of all nodes that match a particular class name. To get started, you may use 
// jQuery, but try to re-factor it out once you have it working.

console.log('hello from `getElementByClassName/problem.soltuion.js`');

var getElementsByClassName = function(className) {
  /* START SOLUTION */
  // iterative solution
  var elements = $('*').filter(function(which, node) {
    return $(node).hasClass(className);
  });
  return Array.prototype.slice.call(elements);
  /* END SOLUTION */
};

/* START SOLUTION */
// recursive solution, for reference
var getElementsByClassName = function(className, context) {
  var matchingDescendants = [];
  var addMatchingDescendants = function(index, node) {
    $(node).hasClass(className) && matchingDescendants.push(node);
    $(node).children().map(addMatchingDescendants);
  };
  addMatchingDescendants(0, document);
  return matchingDescendants;
};
/* END SOLUTION */