// Source: Cracking the Coding Interview, 1.1
//
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Method #1: Using a hash table
function isUniqueHT(str) {
  var seen = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char in seen) return false;
    seen[char] = null;
  }
  return true;
}

console.log(isUniqueHT('abc'));
console.log(isUniqueHT('abcbde'));
console.log(isUniqueHT(''));

// Method #2: No Additional Data Structure
function isUnique(str) {
  for (var i = 0; i < str.length; i++) {
    for (var j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

console.log(isUnique('abc'));
console.log(isUnique('abcbde'));
console.log(isUnique(''));

// Method #3: Sort and then check adjacent characters
function isUniqueSort(str) {
  var sortedArr = str.split('').sort();
  for (var i = 0; i < sortedArr.length; i++) {
    var currChar = sortedArr[i];
    var nextChar = sortedArr[i+1];
    if (currChar === nextChar) return false;
  }
  return true;
}

console.log(isUniqueSort('abc'));
console.log(isUniqueSort('abcbde'));
console.log(isUniqueSort(''));
