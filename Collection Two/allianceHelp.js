// You've just started constructing a military academy. It will take t seconds to erect the building, but given that you're in a hurry you decide this is too long to wait.

// Fortunately, your Alliance offers you help to speed up construction - this is called a boost. Each member of the Alliance can decrease the time needed to finish the building either by 10% of the initial construction time or by 1 minute (whichever is greater). However, you can't get more than 10 boosts for a given construction project. Assuming that your Alliance members act optimally, find the shortest possible time it will take to build the academy.

// Note:

// If 10% of the total construction time doesn't equal an integer number of seconds, then the time bonus you get is rounded down (for each of the Alliance members independently).
// If time decreased using boosts becomes negative you should return 0.
// Example

// For t = 1000 and allianceSize = 10, the output should be
// allianceHelp(t, allianceSize) = 0.
// If each member of the Alliance boosts the building by 10% (i.e. by 100 seconds), your new academy will be finished instantly.

// For t = 999 and allianceSize = 11, the output should be
// allianceHelp(t, allianceSize) = 9.
// Any 10 of your 11 allies can speed the construction up by 10% (which equals 99 seconds since 99.9 is rounded down).

// For t = 100 and allianceSize = 1, the output should be
// allianceHelp(t, allianceSize) = 40.
// Your only Alliance member will boost the construction by 1 minute (i.e. 60 seconds).

// Input/Output

// [time limit] 4000ms (js)
// [input] integer t

// A positive integer equal to the total construction time (in seconds).

// Guaranteed constraints:
// 1 ≤ t ≤ 1000.

// [input] integer allianceSize

// A non-negative integer equal to the number of your Alliance members.

// Guaranteed constraints:
// 0 ≤ allianceSize ≤ 1000.

// [output] integer

// The shortest possible time it will take to build the academy.

function allianceHelp(t, allianceSize) {
  var secondsSubtracted = Math.max(60, Math.floor(t * 0.10));
  var allianceNum = Math.min(allianceSize, 10);
  return Math.max(0, t - (secondsSubtracted * allianceNum));
};

console.log(allianceHelp(1000,10));
console.log(allianceHelp(999,11));
console.log(allianceHelp(100,1));
console.log(allianceHelp(909,500));
console.log(allianceHelp(100,10));