var Queue = function() {
  this.storage = [];
}

Queue.prototype.enqueue = function(item) {
  this.storage.push(item);
  return item;
}

Queue.prototype.dequeue = function() {
  return this.storage.shift();
}

Queue.prototype.isEmpty = function() {
  return this.storage.length === 0;
}

module.exports = {
  Queue: Queue
}