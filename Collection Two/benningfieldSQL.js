//Helper object to translate commands to SQL conditionals
const helperObject = {
  $eq: '=',
  $neq: '!=',
  $lt: '<',
  $lte: '<=',
  $gt: '>',
  $gte: '>=',
  $and: 'AND',
  $or: 'OR',
}


//Helper function to wrap a string in custom characters
String.prototype.wrap = function(char1, char2) {
 return char1+this.replace(/(^|[^\\])"/g,'$1\\"')+char2;
}


//Helper function to get the correct SQL expression for an input string
const getExpression = (string) => {
  if (string.includes('.')) {
    let stringArr = string.split('.');
    stringArr[0] = stringArr[0].wrap("'", "'");
    stringArr[1] = stringArr[1].wrap("'", "'");
    string = stringArr.join('.')
  } else if (string[0] !== ':') {
    string = string.wrap("'", "'");
  }
  return string;
};


//Create a condition transpiler object
let ConditionTranspiler = {};


//Set the transpile prototype method
ConditionTranspiler.transpile = function(cond) {
  const key = Object.keys(cond)[0];
  const value = cond[key];
  let first = Object.keys(cond[key])[0];
  let second = value[first];

  //If value is either $and or $or
  if (Array.isArray(value)) {
    let string = '';
    for (let i = 0; i < value.length; i++) {
      string += ConditionTranspiler.transpile(value[i]);
      if (i !== value.length - 1) {
        string += ` ${helperObject[key]} `;
      };
    };
    return string.wrap("(", ")");
  };

  //Use helper function to get expressions for the first and second half of the expression
  first = getExpression(first);
  second = getExpression(second);

  return `${first} ${helperObject[key]} ${second}`;
}








//Tests.
console.log(ConditionTranspiler.transpile({$eq: {name: ':name'}}));
console.log(ConditionTranspiler.transpile({$lt: {age: ':myAge'}}));
console.log(ConditionTranspiler.transpile({$eq: {'u.userID':'pn.userID'}}));

cond = {
$and: [
{$eq: {gender: ':male'}}, {
      $or: [
        {$eq:  {occupation: ':sales'}},
        {$lte: {salary: ':salary'}}
] }
] };

console.log(ConditionTranspiler.transpile(cond))