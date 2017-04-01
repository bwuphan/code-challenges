function insertionSort (array) {
  //make a for loop that loops thru to n-1
  for(let numPasses = 0; numPasses < array.length - 1; numPasses++){
    for(let i = 0; i < array.length - 1; i++) {
      //if a[i] > a[i+1]
      if(array[i].value === array[i + 1].value){
        if(array[i].order > array[i + 1].order){
          let temp = JSON.parse(JSON.stringify(array[i]));
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
      if(array[i].value > array[i + 1].value){
        //swap the elements
        let temp = JSON.parse(JSON.stringify(array[i]));
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

function insertionSortSolution() {
  for (var ix = 1; ix < array.length; ix++ ) {
    var val = array[ix];
    var hole = ix;
  }
}

var arr = [ { "value": 5 }, { "value": 3 }, { "value": 2 } ];

console.log(insertionSort(arr));
