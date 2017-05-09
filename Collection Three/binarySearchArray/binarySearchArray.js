//Connie Chow

// function sayHello() {
//   console.log('Hello, World');
// }

// sayHello();
// click 'run'

var salesTeam = [{name: {first: 'aleen', last: 'atkins'}, age: 26, sales: '$2314'},
    {name: {first: 'alvaro', last: 'angelos'}, age: 55, sales: '$1668'},
    {name: {first: 'denese', last: 'dossett'}, age: 29, sales: '$9248'},
    {name: {first: 'douglas', last: 'denney'}, age: 53, sales: '$5058'},
    {name: {first: 'earline', last: 'erickson'}, age: 19, sales: '$18876'},
    {name: {first: 'herman', last: 'hazell'}, age: 25, sales: '$2746'},
    {name: {first: 'homer', last: 'hirth'}, age: 26, sales: '$474'},
    {name: {first: 'hwa', last: 'heidt'}, age: 53, sales: '$9607'},
    {name: {first: 'hyon', last: 'hampshire'}, age: 46, sales: '$13598'},
    {name: {first: 'issac', last: 'ingerson'}, age: 45, sales: '$5225'},
    {name: {first: 'jeraldine', last: 'joplin'}, age: 39, sales: '$2891'},
    {name: {first: 'jin', last: 'jeffrey'}, age: 17, sales: '$14402'},
    {name: {first: 'joleen', last: 'jolin'}, age: 45, sales: '$15736'},
    {name: {first: 'jude', last: 'jarrett'}, age: 53, sales: '$7557'},
    {name: {first: 'magda', last: 'mireles'}, age: 18, sales: '$1498'},
    {name: {first: 'mistie', last: 'montealegre'}, age: 31, sales: '$6920'},
    {name: {first: 'nancy', last: 'napoli'}, age: 49, sales: '$5255'},
    {name: {first: 'regine', last: 'rohrbaugh'}, age: 33, sales: '$7881'},
    {name: {first: 'rolando', last: 'riebel'}, age: 35, sales: '$8573'},
    {name: {first: 'scarlett', last: 'stagg'}, age: 36, sales: '$7126'},
    {name: {first: 'sherron', last: 'strawn'}, age: 36, sales: '$8848'},
    {name: {first: 'susan', last: 'shilling'}, age: 29, sales: '$8542'},
    {name: {first: 'tama', last: 'tworek'}, age: 16, sales: '$9200'},
    {name: {first: 'tonisha', last: 'taunton'}, age: 41, sales: '$5219'},
    {name: {first: 'vergie', last: 'villescas'}, age: 25, sales: '$8712'}];
    
//Create a function that capitalizes the first letter of the first and last names of the team members.

// Access names: first and last
// map
function capitalizeNames(salesTeam){ 
  return salesTeam.map(function(employee) {
    employee.name.first = capitalizeString(employee.name.first);
    employee.name.last = capitalizeString(employee.name.last);
    return employee;
  });
}

// helper function to captialize first letter of string
function capitalizeString(name) {
  var array = name.split('');
  console.log(array);
  array[0] = array[0].toUpperCase();
  return array.join('');
}

 
function assert(expectedBehavior, descriptionOfCorrectBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfCorrectBehavior);
  } else {
    console.log('test passed');
  }
}

var testName = 'vergie';
var expectName = 'Vergie';
assert(capitalizeString(testName) === expectName, 'capitalizes string');
console.log(capitalizeString(testName))
// salesTeam.map(function(element) {
//   return ;
// });

// [1, 1, 1, 1, 1, 1]

var testTeam = [{name: {first: 'aleen', last: 'atkins'}, age: 26, sales: '$2314'}];
var expectTeam = [{name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'}]
assert(JSON.stringify(capitalizeNames(testTeam)) === JSON.stringify(expectTeam), 'capitalizes single name');
console.log(JSON.stringify(capitalizeNames(testTeam)))
console.log(JSON.stringify(expectTeam))

// var binarySearch = function (array, target) {
//   /* START SOLUTION */
//   var sub = function (low, high) {
//     // If we are done, we haven't found the target.
//     if (high === low) { return null; }

//     // Find the middle point.
//     var mid = Math.floor((high - low) / 2) + low;

//     // See if we found the target.
//     if (array[mid] === target) {
//       return mid;

//     // Second check to see if we haven't found the target.
//     } else if (low === high - 1) {
//       return null;

//     // If not, decide which half to recurse on.
//     } else if (array[mid] > target) {
//       return sub(low, mid);
//     } else {
//       return sub(mid, high);
//     }
//   };

//   // Do the recursion.
//   return sub(0, array.length);
//   /* END SOLUTION */
// };


