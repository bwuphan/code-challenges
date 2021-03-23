/*
https://leetcode.com/problems/asteroid-collision/

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction
(positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one
will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.



Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
Example 4:

Input: asteroids = [-2,-1,1,2]
Output: [-2,-1,1,2]
Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the
same direction never meet, so no asteroids will meet each other.


Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
*/


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  function peek() {
    return stack[stack.length - 1];
  }

  for (let i = asteroids.length - 1; i >= 0; --i) {
    let asteroid = asteroids[i];

    let dontPush = false; // Let's you know whether to push asteroid to stack
    while (stack.length && peek() < 0 && asteroid > 0) {
      // If asteroid is larger than last in the stack, pop last on stack
      if (asteroid > Math.abs(peek())) {
        stack.pop();
        continue;
      }
      else {
        // If they are even, pop the last on the stack
        if (Math.abs(peek()) === asteroid) stack.pop();

        // Dont push if asteroid is smaller than last on stack
        dontPush = true;
        break;
      }
    }
    if (!dontPush) stack.push(asteroid);
  }

  return stack.reverse();
};

console.log(asteroidCollision([5,10,-5]))
console.log(asteroidCollision([8,-8]))
console.log(asteroidCollision([10,2,-5]))
console.log(asteroidCollision([-2,-1,1,2]))
