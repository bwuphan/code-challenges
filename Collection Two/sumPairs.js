
// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.


function sumPairs(arr, sum) {
  let results = null;
  let storage = {};
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in memo)) {
      memo[arr[i]] = true;
      for (let j = 1; j < arr.length; j++) {
        if (j !== i) {
          if (arr[i] + arr[j] === sum) {
            results = [arr[i], arr[j]];
            if (!(Math.max(j, i) in storage)){
              storage[Math.max(j, i)] = results;
            }
          }
        }
      }
    }
  }
  let lowest = false;
  for (let key in storage) {
    if (!lowest) {
      lowest = key;
    } else {
      if (key < lowest) {
        lowest = key;
      }
    }
  }
  if (lowest) {
    return storage[lowest]
  }
  return null
}