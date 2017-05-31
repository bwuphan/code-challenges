// const waterBlocks = (array) => {
// 	const max = Math.max.apply(null, array);
// 	let volume = 0;
// 	for (let i = max; i > 0; i--) {
// 		let betweenBlocks = false;
// 		let tempVolume = 0;
// 		for (let j = 0; j <  array.length; j++) {
// 			if (array[j] >= i) {
// 				betweenBlocks = !betweenBlocks;
// 				if (!betweenBlocks) {
// 					volume += tempVolume;
// 					tempVolume = 0;
// 				}
// 			} else if (betweenBlocks) {
// 				console.log('max', i);
// 				console.log('array', j)
// 				tempVolume++;
// 			}
// 		}
// 	}
// 	return volume
// }


// console.log(waterBlocks([5,1,3,]))
const waterBlocksLinear = (array) => {
	const fromLeft = [];
	const fromRight = [];
	let highestLeft = 0;
	let highestRight = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > highestLeft) {
			highestLeft = array[i];
		};
		fromLeft[i] = highestLeft;
	};
	for (let j = array.length - 1; j >= 0; j--) {
		if (array[j] > highestRight) {
			highestRight = array[j];
		}
		fromRight[j] = highestRight;
	}
	let volume = 0;
	for (let x = 0; x < array.length; x++) {
		volume += Math.min(fromRight[x], fromLeft[x]) - array[x];
	}
	return volume;
}
