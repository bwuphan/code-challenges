// Task:

// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']
// or 

 
// should return: "Total land perimeter: 24", 
// while


// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']


// should return: "Total land perimeter: 18"

const landPerimeter = (array) => {
	let perimeter = 0;
	const newArr = array.map((string) => {
		return [...string];
	});
	for (let i = 0; i < newArr.length; i++) {
		const row = newArr[i];
		for (let j = 0; j < row.length; j++) {
			if (row[j] === 'X') {
				if (!newArr[i - 1] || newArr[i - 1][j] === 'O') {
					perimeter += 1;
				}
				if (!newArr[i][j + 1] || newArr[i][j + 1] === 'O') {
					perimeter += 1;
				}
				if (!newArr[i + 1] || newArr[i + 1][j] === 'O') {
					perimeter += 1;
				}
				if (!newArr[i][j - 1] || newArr[i][j - 1] === 'O') {
					perimeter += 1;
				}
			}
		}
	}
	return `Total land perimeter: ${perimeter}`
};

var test = ['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
console.log(landPerimeter(test))