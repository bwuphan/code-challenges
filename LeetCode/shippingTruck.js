
const twoPackages = (packages) => {
	const packObj = packages.reduce((obj, pack, i) => {
		obj[pack] = i;
		return obj;
	}, {});

	for (let i = 0; i < packages.length; ++i) {
		const curPackage = packages[i];
		const compliment = 60 - curPackage;
		if (compliment in packObj) {
			return [i, packObj[compliment]];
		}
	}
	return null;
}


console.log(twoPackages([1,10,25,35,60]))