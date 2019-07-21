/*
You are on a flight and wanna watch two movies during this flight.
You are given int[] movie_duration which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

e.g.
Input
movie_duration: [90, 85, 75, 60, 120, 150, 125]
d: 250

Output from aonecode.com
[90, 125]
90min + 125min = 215 is the maximum number within 220 (250min - 30min)
*/


function getDurations(movieArr, duration) {
  duration -= 30;
  let closestDiff = null;
  let arrPair = null;

  movieArr = movieArr.sort((a,b) => a - b);
  let numLoops = 0;
  for (let i = 0; i < movieArr.length; ++i) {
    for (let j = i + 1; j < movieArr.length; ++j) {
      if (movieArr[i] + movieArr[j] > duration) break;
      if (j !== i) {
        const currentDiff = duration - (movieArr[i] + movieArr[j]);
        if (closestDiff === null || currentDiff <= closestDiff && currentDiff >= 0) {
          console.log(movieArr[i], movieArr[j])
          if (closestDiff === currentDiff && arrPair[1] > movieArr[1]) continue;
          closestDiff = currentDiff;
          arrPair = [movieArr[i], movieArr[j]];
        }
      }
      numLoops++;
    }
  }
  console.log(numLoops);
  return arrPair;
}

test(getDurations([90, 85, 75, 60, 120, 150, 125], 250), [90, 125]);
test(getDurations([60, 65, 90, 85, 75, 120, 150, 125], 250), [65, 150]);
function test(value1, value2) {
  console.log(`${JSON.stringify(value1)} = ${JSON.stringify(value2)}: `, JSON.stringify(value1) === JSON.stringify(value2))
}