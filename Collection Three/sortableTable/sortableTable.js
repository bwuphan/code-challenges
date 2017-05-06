/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!
  const table = document.getElementById('myTable');
  const topRow = table.querySelector('tr');
  const words = {
    'Item Name': 0,
    'Expiration Date': 3,
  };
  const numbers = {
    'Number of Pounds': 1,
    'Price Per Pound': 2,
  };
  const getValue = (row, col, array) => {
    console.log('here', row.children)
    return row.children[col].innerHTML;
  };
  const tbody = table.querySelector('tbody');
  const savedArr = tbody.querySelectorAll('tr');
  let arr = [];
  for (let i = 0; i < savedArr.length; i++) {
    arr.push(savedArr[i]);
  }
  topRow.querySelectorAll('th').forEach((element) => {
    element.addEventListener('click', () => {
      const columnName = element.innerHTML;
      let columnIdx;
      if (columnName in words) {
        columnIdx = words[columnName]
      } else {
        columnIdx = numbers[columnName]
      }
      while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
      };
      const originalArray = [...arr];
      arr = originalArray.sort((row1, row2) => {
        const value1 = getValue(row1, columnIdx, originalArray);
        const value2 = getValue(row2, columnIdx, originalArray);
        if (columnName in words) {
          console.log('in here', value1, value2)
          return value1 > value2;
        } else {
          return value1 - value2;
        }
      });
      for (let i = 0; i < arr.length; i++) {
        tbody.appendChild(arr[i])
      }
    });
  });
});


// $(function () {
//   // TODO: your code here!

//   /* START SOLUTION */
//   // select elements to change
//   var $tbody = $('tbody');
//   var $rows = $tbody.children();

//   // helper to get table cell value from row + column index
//   var getCellValue = function (row, colIdx) {
//     console.log('row', row)
//     var td = row.children[colIdx];
//     return $(td).text();
//   };

//   // helper to determine whether cell value is a string or number
//   var getType = function (columnIdx) {
//     var val = getCellValue($('tr')[1], columnIdx);
//     return isNaN(val) ? 'string' : 'number';
//   };

//   // Sort column when table header clicked
//   $('th').on('click', function () {
//     // get the index of the column to sort
//     var columnIdx = $(this).index();
//     var type = getType(columnIdx);

//     // detach the rows, and and sort them by cell value
//     $rows.detach().sort(function (row1, row2) {
//       var value1 = getCellValue(row1, columnIdx);
//       var value2 = getCellValue(row2, columnIdx);
//       if (type === 'string') { return value1 > value2; }
//       if (type === 'number') { return value1 - value2; }
//     });

//     // append the sorted rows back onto the tbody
//     $tbody.append($rows);
//   });
//   /* END SOLUTION */
// });
