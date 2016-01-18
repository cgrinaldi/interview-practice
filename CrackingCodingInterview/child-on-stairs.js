// Source: Cracking the Coding Interview, 9.1
//
// A child is running up a staircase with n steps, and can hop either 1 step,
// 2 steps, or 3 steps at a time. Implement a method to count how many
// possible ways the child can run up the stairs.
function countWays(n) {
  // base case + cache check
  if (n in countWays) return countWays[n];
  if (n === 0) return 1;
  if (n < 0) return 0;

  // recursive calls
  var result = countWays(n-1) + countWays(n-2) + countWays(n-3);
  countWays[n] = result;
  return result;
}

console.log(countWays(4)); // === 7
console.log(countWays(50)); // cache makes it efficient
