function getPonyAllergies (ponies, ownerEmail) {
  // Write your code here, and
  // return your final answer.
  var results = [];
  return ponies.filter(function(entry) {
    if(entry.email === ownerEmail) {
      return entry;
    }
  }).map(function(pony) {
    return pony.allergies;
  }).concatAll().reduce(function(newArray, current) {
    if(newArray.indexOf(current) === -1){
      newArray.push(current);
    }
    return newArray;
  },[]).sort();
}

function getProp(name) {
  return function (object) { return object[name] }
}

Array.prototype.concatAll = function() {
  return this.reduce(function (result, subArray) {
    return result.concat(subArray)
  })
}


var array = [ { "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ], "email": "cindy@ponymail.com" }, { "id": 23, "name": "Black Lightning", "allergies": [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, { "id": 458, "name": "Picadilly", "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" }, { "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken", "chicken" ], "email": "sandy@hotmail.com" }, { "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ], "email": "jimmy@ponymail.com" } ]

console.log(getPonyAllergies(array, "sandy@hotmail.com"))
/*
A certain pony farm (cage-free) raises and keeps track of cowboys’ and cowgirls’ ponies. Each pony has a name, id, dietary allergies, and email address (the owner’s email address).

Given an array of pony objects and an owner’s email address, return an alphabetically ordered array of all foods (without duplicates) that the owner should avoid feeding his/her ponies.

NOTE: You are required to use at least one map and one filter. Pros can use reduce to make their code even more functional-style.

ponies:
[ { "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ], "email": "cindy@ponymail.com" }, { "id": 23, "name": "Black Lightning", "allergies": [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, { "id": 458, "name": "Picadilly", "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" }, { "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken" ], "email": "sandy@hotmail.com" }, { "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ], "email": "jimmy@ponymail.com" } ]
ownerEmail:
"sandy@hotmail.com"


[ "chicken", "gluten", "peanut", "soy" ]
*/