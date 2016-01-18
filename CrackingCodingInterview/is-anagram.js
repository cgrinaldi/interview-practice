// Source: Cracking the Coding Interview, 1.3
//
// Given two strings, determine if they are anagrams

// Method #1: Sort Arrays and Compare
function isAnagramSort(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var sortedArr1 = str1.split('').sort();
  var sortedArr2 = str2.split('').sort();

  for (var i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagramSort('cat','act'));
console.log(isAnagramSort('cab','act'));

// Method #2: Check Character Counts
function isAnagramHash(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var charCounts = {};

  // Count character frequency
  for (var i = 0; i < str1.length; i++) {
    var char = str1[i];
    charCounts[char] = charCounts[char] || 0;
    charCounts[char]++;
  }

  // Check all of str2 characters against char freq
  for (var j = 0; j < str2.length; j++) {
    var char = str2[j];
    if (!(char in charCounts)) return false;
    charCounts[char]--;
    if (charCounts[char] < 0) return false;
  }
  return true;
}

console.log(isAnagramHash('cat','act'));
console.log(isAnagramHash('cab','act'));
