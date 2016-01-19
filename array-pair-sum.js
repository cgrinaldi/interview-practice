// Source: http://www.ardendertat.com/2011/09/17/programming-interview-questions-1-array-pair-sum/
//
// Given an array of integers, output all pairs that sum to a specific
// value of K

// Solution #1: Brute Force (O(N^2))
function arrayPairSumBrute(numbers, target) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i+1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push([numbers[i], numbers[j]]);
      }
    }
  }
  return result;
}

console.log(arrayPairSumBrute([3,5,1,2,6,4,7], 7));
console.log(arrayPairSum([3,1,5,6], 6));
console.log(arrayPairSum([3,1,5,6,3], 6));

// Solution #2: Hash Table (O(N))
function arrayPairSum(numbers, target) {
  var freq = countFreq(numbers);

  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    var x = numbers[i];
    var y = target - x;
    if (y in freq && freq[y] > 0 && freq[x] > 0) {
      if (x === y && freq[x] < 2) {
        continue;
      } else {
        result.push([x,y]);
        freq[y]--;
        freq[x]--;
      }
    }
  }
  return result;
}

function countFreq(numbers) {
  var result = {};
  numbers.forEach(num => {
    result[num] = result[num] || 0;
    result[num]++;
  });
  return result;
}

console.log(arrayPairSumBrute([3,5,1,2,6,4,7], 7));
console.log(arrayPairSum([3,1,5,6], 6));
console.log(arrayPairSum([3,1,5,6,3], 6));
