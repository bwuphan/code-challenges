var Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(val) {
  return this._storage.push(val);
}

Stack.prototype.pop = function() {
  return this._storage.pop();
}

Stack.prototype.isEmpty = function() {
  return this._storage.length === 0;
}


module.exports = {
  Stack: Stack
}