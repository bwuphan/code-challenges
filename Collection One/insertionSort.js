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



// console.log(insertionSort(arr));


var insertionSort = function(array, comparator) {
  if (!comparator) // neglect error checking for brevity
    comparator = function(a, b) {
      // We only need to know if a is _less than_ b
      return a < b ? -1 : 0;
    };
  
  for (var i = 1; i < array.length; i++) {
    var val = array[i];
    var hole = i;

    while ((hole > 0 && comparator(val, array[hole - 1])) === -1) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }

    array[hole] = val;
  }

  return array;
};

console.log(insertionSort([2,4,1,3]))
