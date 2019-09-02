// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  console.log(`original: ${array.join('    ')}`);
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
    console.log(array.join('    '));
  }
  console.log(`sorted: ${array.join('    ')}`);
  return array;
}

console.log(selectionSort([24, 13, 26, 1, 2, 27, 38, 15, 10])); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]