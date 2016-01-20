// Source: Cracking the Coding Interview, 1.5
//
// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2b1c5a3. If the "compressed" string would not become smaller than the
// original string, your method should return the original string. You can
// assume the string has only upper and lower case letters (a-z).

function compressString(string) {
  var result = '';
  var i = 0;
  while (i < string.length) {
    var counter = 0;
    var currLetter = string[i];
    while (string[i + counter] === currLetter) {
      counter++;
    }
    result += currLetter + counter;
    i = i + counter;
  }
  return result.length < string.length ? result : string;
}

console.log(compressString('aabcccccaaa')); // should be a2b1c5a3
console.log(compressString('abbc')); // should be abbc
