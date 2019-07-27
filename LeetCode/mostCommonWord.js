/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const bannedObj = banned.reduce((obj, word) => {
    obj[word.toLowerCase()] = true;
    return obj;
  }, {});
  const pArr = paragraph.split(/[\s",.!?';]+/);

  let occurObj = {};
  pArr.forEach(word => {
    const wordL = word.toLowerCase();
    if (!(wordL in bannedObj) && word.length > 0) {
      if (wordL in occurObj) occurObj[wordL]++;
      else occurObj[wordL] = 1;      
    }
  });
  let commonWord = '';
  let maxOccurences = 0;
  
  for (let word in occurObj) {
    if (occurObj[word] >= maxOccurences) {
      commonWord = word;
      maxOccurences = occurObj[word];
    }
  }
  return commonWord;
};