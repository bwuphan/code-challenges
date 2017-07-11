// Write a function that will rotate a character array.
// Function will take an array, and a number.
// eg. var char = ['a’, ‘b’, ‘c’, ‘d’, ‘e’];
// function rotate (char, 1) = [ e a b c d ]
// function rotate (char 2) = [ d e a b c ]
// function rotate (char, 3) = [ c d e a b]
// function rotate (char, -1) = [ b e d e a ]
// function rotate (char, -2) = [ c d e a b ]

const rotate = (array, num) => {
  const originalArr = [...array];
  let idx = array.length - num;
  for (let i = 0; i < array.length; i++) {
    array[i] = originalArr[idx];
    if (idx + 1 >= array.length) {
      idx = 0;
    } else {
      idx++;
    }
  }
  return array;
}

var char = ['a', 'b', 'c', 'd', 'e'];
console.log(rotate(char, 3));