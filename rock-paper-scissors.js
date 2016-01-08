/*
* Write a function that generates every sequence of throws a single
* player could throw over an n-round game of rock-paper-scissors.
*
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function(n){
  if (n === 0) return [];
  if (n === 1) return [['rock'], ['paper'], ['scissors']];
  var prevThrows = rockPaperScissors(n-1);
  var result = [];

  prevThrows.forEach(function(move) {
    result.push(move.concat(['rock']));
    result.push(move.concat(['paper']));
    result.push(move.concat(['scissors']));
  });
  return result;
};

console.log(rockPaperScissors(3));
