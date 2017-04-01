// const sailTheIslands = function(row, column, option) {
//     if (checkBounds(row, column)) {
//       console.log('this element is ', row, column)
//       if (arguments.length === 3 && mapArray[row][column] !== '0') {
//         option = false;
//         // console.log('option here')
//         return;
//       } else if (mapArray[row][column] === '0') {
//         if (checkFourDirections(row, column, false)) {
//           console.log('falsed')
//           mapArray[row][column] = false;
//           return;
//         } else {
//           storage[`${row},${column}`] = true;
//           console.log('storage', storage)
//           for (let key in storage) {
//             if (checkFourDirections(row, column, '.', key, storage)) {
//               console.log('island found');
//               numIslands++;
//               for (let key in storage) {
//                 const tupule = key.split(',');
//                 mapArray[parseInt(tupule[0])][parseInt(tupule[1])] = false;
//               }
//               storage = {};
//               if (checkFourDirections(row, column, '.')) {
//                 if (column + 1 <= numColumns && !(`${row},${column + 1}` in walkedPaths)) {
//                   walkedPaths[`${row},${column + 1}`] = true;
//                   sailTheIslands(row, column + 1);
//                 } else if (!(`${row},${column + 1}` in walkedPaths)){
//                   walkedPaths[`${row + 1},0`] = true;
//                   sailTheIslands(row + 1, 0);
//                 } else {
//                   return;
//                 }
//               }
//               return;
//             }
//           }
//           console.log('recursion time', mapArray)
//           if (!(`${row},${column + 1}` in storage))
//             sailTheIslands(row, column + 1, true);
//           if (!(`${row},${column - 1}` in storage))
//             sailTheIslands(row, column - 1, true);
//           if (!(`${row + 1},${column}` in storage))
//             sailTheIslands(row + 1, column, true);
//           if (!(`${row - 1},${column}` in storage))
//             sailTheIslands(row - 1, column, true);
//         }
//       }
//       console.log('proceed')
//       if (column + 1 <= numColumns && !(`${row},${column + 1}` in walkedPaths)) {
//         walkedPaths[`${row},${column + 1}`] = true;
//         sailTheIslands(row, column + 1);
//       } else if (!(`${row},${column + 1}` in walkedPaths)){
//         walkedPaths[`${row + 1},0`] = true;
//         sailTheIslands(row + 1, 0);
//       } else {
//         return;
//       }
//     } else {
//       return;
//     }
//   }


// const checkFourDirections = function(row, column, check, coordinates, storage) {
//     if (checkBounds(row + 1, column)) {
//       if (mapArray[row + 1][column] !== check) {
//         // console.log('sdfsd1')
//         if (coordinates) {
//           if(`${row + 1},${column}` !== coordinates) {
//             return false;
//           }
//         } else {
//           return false;
//         }
//       }
//     }
//     if (checkBounds(row - 1, column)) {
//       if (mapArray[row - 1][column] !== check) {
//         // console.log('2')
//         if (coordinates) {
//           if(`${row - 1},${column}` !== coordinates) {
//             return false;
//           }
//         } else {
//           return false;
//         }
//       }
//     }
//     if (checkBounds(row, column + 1)) {
//       if (mapArray[row][column + 1] !== check) {
//         // console.log('3')
//         if (coordinates) {
//           if(`${row},${column+1}` !== coordinates) {
//             return false;
//           }
//         } else {
//           return false;
//         }
//       }
//     }
//     if (checkBounds(row, column - 1)) {
//       if (mapArray[row][column - 1] !== check) {
//         // console.log('4')
//         if (coordinates) {
//           if(`${row},${column-1}` !== coordinates) {
//             return false;
//           }
//         } else {
//           return false;
//         }
//       }
//     }
//     return true;
//   }


// const checkFourDirections = function(row, column, check, coordinates) {
//   if (checkBounds(row + 1, column)) {
//     if (mapArray[row + 1][column] !== check) {
//       // console.log('sdfsd1')
//       if (coordinates) {
//         if(`${row + 1},${column}` in) {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//   }
//   if (checkBounds(row - 1, column)) {
//     if (mapArray[row - 1][column] !== check) {
//       // console.log('2')
//       if (coordinates) {
//         if(`${row - 1},${column}` !== coordinates) {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//   }
//   if (checkBounds(row, column + 1)) {
//     if (mapArray[row][column + 1] !== check) {
//       // console.log('3')
//       if (coordinates) {
//         if(`${row},${column+1}` !== coordinates) {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//   }
//   if (checkBounds(row, column - 1)) {
//     if (mapArray[row][column - 1] !== check) {
//       // console.log('4')
//       if (coordinates) {
//         if(`${row},${column-1}` !== coordinates) {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function countIslands (mapStr) {
  // Write your code here, and
  // return your final answer.
  const checkBounds = function(row, column) {
    if (row >= 0 && row < numRows && column >= 0 && column < numColumns) {
      return true;
    }
    return false;
  }

  const checkDirection = function(row, column, check, storage)  {
    if (checkBounds(row, column)) {
      if (mapArray[row][column] !== check) {
        if (storage && typeof storage === 'object') {
          if(!(`${row},${column}` in storage)) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }

  const checkFourDirections = function(row, column, check, storage) {
    checkDirection(row + 1, column, check, storage);
    return true;
  }

  let mapArray = mapStr.split('\n');
  for (let i = 0; i < mapArray.length; i++) {
    mapArray[i] = mapArray[i].split('');
  }
  const numRows = mapArray.length;
  const numColumns = mapArray[0].length;
  let numIslands = 0;
  console.log(mapArray)
  let storage = {};
  let walkedPaths = {};
  const sailTheIslands = function(row, column, option) {
    console.log('Current element', row, column, option)
    if (checkBounds(row, column)) {
      if (!option) {
        storage = {};
      }
      if (mapArray[row][column] === '0') {
        storage[`${row},${column}`] = true;
        if (checkFourDirections(row, column, '.')) {
          console.log('All Alone')
        } else if (checkFourDirections(row, column, '.', storage)) {
          return;
        } else {
          if (checkBounds(row, column + 1) && !(`${row},${column + 1}` in storage))
            sailTheIslands(row, column + 1, true);
          if (checkBounds(row, column - 1) && !(`${row},${column - 1}` in storage))
            sailTheIslands(row, column - 1, true);
          if (checkBounds(row + 1, column) && !(`${row + 1},${column}` in storage))
            sailTheIslands(row + 1, column, true);
          if (checkBounds(row-1, column) && !(`${row - 1},${column}` in storage))
            sailTheIslands(row - 1, column, true);
        }
        numIslands++;
        for (let key in storage) {
          const tupule = key.split(',');
          mapArray[parseInt(tupule[0])][parseInt(tupule[1])] = false;
        }
        storage = {};
        if (option) {
          numIslands--;
          return;
        }
      } else if (option && (mapArray[row][column] === '.' || !mapArray[row][column])){
        return;
      }
      if (column + 1 < numColumns) {
        sailTheIslands(row, column + 1);
      } else if (row + 1 < numRows) {
        sailTheIslands(row + 1, 0);
      } else {
        return;
      }
    } else {
      return;
    }
  }
  sailTheIslands(0,0);
  return numIslands;
}


console.log(countIslands(".0...\n.00..\n....0"));




// console.log(countIslands("..000.\n..0...\n..0.0.\n..0...\n..000."));

/*
Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

\n
character. Check your console when submitting to see the input for yourself.


Input Output
mapStr:
.0...
.00..
....0
2
mapStr:
..000.
..000.
..000.
.0....
..000.
3
mapStr:
..000.
..0...
..0.0.
..0...
..000.
2
mapStr:
0...0
..0..
0...0
5


Solution
function countIslands (mapStr) {
  var count = 0;
  // Creating a matrix - allows us to mutate a single
  // "map" in memory
  var map = mapStr.split('\n').map(function(row) {
    return row.split('');
  });

  // iterate over map
  // i -> row index
  for(var i = 0; i < map.length; i++) {
  // j -> col index
    for(var j = 0; j < map[i].length; j++) {
      // if current value is an island
      if(isIsland(map[i][j])) {
        // increase count by 1
        count++;
        // sink island, starting with current position
        sinkIsland(map, i, j);
      }
    }
  }
  return count;
}

function isIsland(section) {
  return section === ‘0’;
};

function sinkIsland(map, i, j) {
  // if we’re out of bounds OR if we hit water
  if (i < 0 || j < 0 || i >= map.length || j >= map[i].length ||
    !isIsland(map[i][j]) ) {
      return;
  }

  // sink it!
  map[i][j] = '.';

  // move one step in all directions & sinkIsland
  sinkIsland(map, i-1, j);
  sinkIsland(map, i+1, j);
  sinkIsland(map, i, j-1);
  sinkIsland(map, i, j+1);
}
*/