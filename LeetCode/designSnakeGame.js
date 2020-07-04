/*
https://leetcode.com/problems/design-snake-game/


Design a Snake game that is played on a device with screen size = width x height. Play the game
online if you are not familiar with the game.

The snake is initially positioned at the top left corner (0,0) with length = 1 unit.

You are given a list of food's positions in row-column order. When a snake eats the food, its
length and the game's score both increase by 1.

Each food appears one by one on the screen. For example, the second food will not appear until the
first food was eaten by the snake.

When a food does appear on the screen, it is guaranteed that it will not appear on a block occupied
by the snake.

Example:

Given width = 3, height = 2, and food = [[1,2],[0,1]].

Snake snake = new Snake(width, height, food);

Initially the snake appears at position (0,0) and the food at (1,2).

|S| | |
| | |F|

snake.move("R"); -> Returns 0

| |S| |
| | |F|

snake.move("D"); -> Returns 0

| | | |
| |S|F|

snake.move("R"); -> Returns 1 (Snake eats the first food and right after that, the second food
appears at (0,1) )

| |F| |
| |S|S|

snake.move("U"); -> Returns 1

| |F|S|
| | |S|

snake.move("L"); -> Returns 2 (Snake eats the second food)

| |S|S|
| | |S|

snake.move("U"); -> Returns -1 (Game over because snake collides with border)
*/

var Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}


var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(val) {
  const newNode = new Node(val);
  // If there is no head, make this the new head.
  if (!this.head) {
    this.head = newNode;
  }
  // Else, add to tail.
  else {
    const oldTail = this.tail;
    // If there is no tail, add tail to head.
    if (!this.tail) {
      this.head.next = newNode;
      newNode.prev = this.head;
    }
    // Else, add to previous tail.
    else {
      newNode.prev = oldTail;
      oldTail.next = newNode;
    }

    // Set tail to newest node.
    this.tail = newNode;
  }

  return newNode;
}

LinkedList.prototype.addToHead = function(val) {
  const newNode = new Node(val);

  if (!this.head)
    this.head = newNode;
  else if (this.head && !this.tail) {
    newNode.next = this.head;
    this.tail = this.head;
    this.tail.prev = newNode;
    this.head = newNode;
  }
  else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

  }

  return newNode;
}

LinkedList.prototype.removeFromHead = function() {
  // Only remove if a head exists.
  if (this.head) {
    const curHead = this.head;
    this.head = this.head.next;

    // If the head and tail are the same, this is the only node and we need to null out this.tail.
    if (this.head === this.tail) {
      this.tail = null;
    }

    return curHead;
  }
  return null;
}

LinkedList.prototype.removeFromTail = function() {
  // Only remove if a tail exists.
  if (this.tail) {
    const oldTail = this.tail;
    this.tail = this.tail.prev;
      this.tail.next = null;
    return oldTail;
  }
}

LinkedList.prototype.removeNode = function(node) {
  if (this.head === node) {
    this.removeFromHead();
  }
  else if (this.tail === node) {
    this.removeFromTail();
  }
  else {
    // Connect previous node to next node.
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

LinkedList.prototype.moveToTail = function(node) {
  this.removeNode(node);
  return this.addToTail(node.val);
}

LinkedList.prototype.removeDuplicates = function() {
  let valObj = {};

  let curNode = this.head;
  while(curNode !== null) {
    const nextNode = curNode.next;
    // If the current node value is in valObj, remove the node.
    if (curNode.val in valObj) {
      this.removeNode(curNode);
    }
    // Else, set current node value in valObj.
    else {
      valObj[curNode.val] = true;
    }

    curNode = nextNode;
  }
}

LinkedList.prototype.outputVals = function() {
  let curNode = this.head;
  while (curNode !== null) {
    console.log(curNode.val);
    curNode = curNode.next;
  }
}

LinkedList.prototype.returnKthFromTail = function(k) {
  let i = 0;
  let curNode = this.tail;
  while (curNode !== null) {
    if (i === k) {
      return curNode;
    }
    i++;
    curNode = curNode.prev;
  }
  return null;
}

/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
  this.width = width;
  this.height = height;
  this.snake = new LinkedList();
  this.snake.addToTail('0,0');
  this.snakeOccupiedSet = new Set(['0,0']);
  if (food && food.length) {
    this.curFood = food.shift().join(',');
    this.nextFoods = food;

  }
  this.score = 0;
};

/**
 * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down
        @return The game's score after the move. Return -1 if game over.
        Game over when snake crosses the screen boundary or bites its body.
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
  const coordinates = this.snake.head.val.split(',').map(num => +num);
  switch(direction) {
    case 'R':
      coordinates[1]++;
      break;
    case 'D':
      coordinates[0]++;
      break;
    case 'L':
      coordinates[1]--;
      break;
    case 'U':
      coordinates[0]--;
      break;
  }

  // console.log(coordinates, this.curFood, this.snakeOccupiedSet);
  const newCoordinatesStr = coordinates.join(',');
  console.log(newCoordinatesStr, this.snakeOccupiedSet, direction, this.curFood);
  if (coordinates[0] < 0 || coordinates[0] >= this.height || coordinates[1] < 0 || coordinates[1] >= this.width)
    return -1;

  if (this.curFood === newCoordinatesStr) {
    this.score++;

    if (this.nextFoods.length >= 1)
      this.curFood = this.nextFoods.shift().join(',');
    else
      this.curFood = null;
  }
  else {
    let removed = null;
    // console.log('TAIL');
    // this.snake.outputVals();
    if (this.snake.tail)
      removed = this.snake.removeFromTail();
    else
      removed = this.snake.removeFromHead();
    // console.log('REMOVED', removed.val);
    this.snakeOccupiedSet.delete(removed.val);
    // console.log(removed);
  }

  if (this.snakeOccupiedSet.has(newCoordinatesStr))
    return -1;

  this.snake.addToHead(newCoordinatesStr);
  this.snakeOccupiedSet.add(newCoordinatesStr);
  return this.score;
};

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */



// const snake = new SnakeGame(width = 3, height = 2, food = [[1,2],[0,1]]);
// console.log(snake.move('R'));
// console.log(snake.move('D'));
// console.log(snake.move('R'));
// console.log(snake.move('U'));
// console.log(snake.move('L'));
// console.log(snake.move('U'));

// const snake2 = new SnakeGame(2,2,[[1,1],[0,0]]);
// console.log(snake2.move('R'));
// console.log(snake2.move('D'));
// console.log(snake2.move('L'));
// console.log(snake2.move('U'));
// console.log(snake2.move('R'));

// const snake3 = new SnakeGame(2,2,[[1,1],[0,0],[0,1]]);
// console.log(snake3.move('R'));
// console.log(snake3.move('D'));
// console.log(snake3.move('L'));
// console.log(snake3.move('U'));
// console.log(snake3.move('R'));

// const snake4 = new SnakeGame(3,3,[[2,0],[0,0],[0,2],[2,2]])
// console.log(snake4.move('D'));
// console.log(snake4.move('D'));
// console.log(snake4.move('R'));
// console.log(snake4.move('U'));
// console.log(snake4.move('U'));
// console.log(snake4.move('L'));
// console.log(snake4.move('D'));
// console.log(snake4.move('R'));
// console.log(snake4.move('R'));
// console.log(snake4.move('U'));
// console.log(snake4.move('L'));
// console.log(snake4.move('D'));

const snake5 = new SnakeGame(3,3,[[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[1,0]])

console.log(snake5.move("R"));
console.log(snake5.move("R"));
console.log(snake5.move("D"));
console.log(snake5.move("D"));
console.log(snake5.move("L"));
console.log(snake5.move("L"));
console.log(snake5.move("U"));
console.log(snake5.move("U"));
console.log(snake5.move("R"));
console.log(snake5.move("R"));
console.log(snake5.move("D"));
console.log(snake5.move("D"));
console.log(snake5.move("L"));
console.log(snake5.move("L"));
console.log(snake5.move("U"));
console.log(snake5.move("R"));
console.log(snake5.move("U"));
console.log(snake5.move("L"));
console.log(snake5.move("D"));
