// import { Stack } from '../Prototypes/Stack.js'

const Stack = require('../Prototypes/Stack').Stack;

var test = new Stack();

var isValid = function(s) {
  const left  = { '(' : ')', '[' : ']', '{' : '}' };
  const right = { ')' : '(', ']' : '[', '}' : '{' };

  let pStack = new Stack();
  for (let i = 0; i < s.length; ++i) {
    const cur = s[i];
    if (cur in left) pStack.push(cur);
    else if (cur in right) {
      const popped = pStack.pop();
      if (popped !== right[cur]) {
        return false;
      }
    }
  }
  return pStack._storage.length === 0;
};