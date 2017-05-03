const waterBlocks = (array) => {
	const max = Math.max.apply(null, array);
	let volume = 0;
	for (let i = max; i > 0; i--) {
		let betweenBlocks = false;
		let tempVolume = 0;
		for (let j = 0; j <  array.length; j++) {
			if (array[j] >= i) {
				betweenBlocks = !betweenBlocks;
				if (!betweenBlocks) {
					volume += tempVolume;
					tempVolume = 0;
				}
			} else if (betweenBlocks) {
				console.log('max', i);
				console.log('array', j)
				tempVolume++;
			}
		}
	}
	return volume
}

console.log(waterBlocks([5,1,3,]))
