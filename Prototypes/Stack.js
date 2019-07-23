var Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(val) {
  return this._storage.push(val);
}

Stack.prototype.pop = function() {
  return this._storage.pop();
}


module.exports = {
  Stack: Stack
}