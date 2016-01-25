/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

function commonCharacters(a, b) {
  var result = '';
  var chars = convertStrToHT(a);
  for (var i = 0; i < b.length; i++) {
    if (b[i] in chars) {
      result += b[i];
    }
  }
  return result;
}

function convertStrToHT(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char !== ' ') {
      result[char] = null;
    }
  }
  return result;
}

console.log(commonCharacters('acexivou', 'aegihobu'));
console.log(commonCharacters('ac exi  vouaa  ', 'ae gi h obu'));

