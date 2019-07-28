/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let letterLogs = [];
  let digitLogs  = [];
  
  for (let i = 0; i < logs.length; ++i) {
    const logArr = logs[i].split(' ');
    if (isNaN(logArr[1])) letterLogs.push(logs[i]);
    else digitLogs.push(logs[i]);
  }
  
  return letterLogs.sort((a, b) => {
  	let aArr = a.split(' ');
  	let bArr = b.split(' ');
  	let aIdentifier = aArr.shift();
  	let bIdentifier = bArr.shift();
  	let aWords = aArr.join(' ');
  	let bWords = bArr.join(' ');
  	if (aWords === bWords && aIdentifier === bIdentifier) return 0;
  	else if (aWords === bWords) {
  		if (aIdentifier < bIdentifier) return -1;
  		else return 1;
  	}
  	else if (aWords < bWords) return -1
  	else return 1;
  }).concat(digitLogs);
};

console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));