// Source: https://www.interviewcake.com/question/python/coin

// Write a function that, given an amount of money and a list of
// coin denominations, computes the number of ways to make amount of money
// with the coins available.
//
// Example:
//  - amount = 4
//  - coins = [1,2,3]
//  - result = 4 [(1,1,1,1), (1,1,2), (1,3), (2,2)]

// Solution #1: No memoization
function countWays(amount, denominations) {
  return countWaysHelper(amount, denominations, Infinity);
}

function countWaysHelper(amount, denominations, threshold) {
  if (amount === 0) return 1;
  if (amount < 0) return 0;
  var result = 0;
  var validCoins = findValidCoins(denominations, threshold);
  validCoins.forEach(function(coin) {
    result += countWaysHelper(amount - coin, denominations, coin);
  });
  return result;
}

function findValidCoins(denominations, threshold) {
  return denominations.filter(coin => {
    return coin <= threshold;
  });
}

console.log(countWays(4, [1,2]));
console.log(countWays(4, [1,2,3]));
console.log(countWays(1000, [1,2,3]));

// Solution #2: With Memoization (to reduce repeated calculations)
function memoize(func) {
  var cache = {};
  return function () {
    var result;
    // Check to see if we have seen the arguments already
    var argStr = Array.prototype.slice.call(arguments).toString();
    if (argStr in cache) {
      result = cache[argStr];
    } else {
      // If we haven't, perform computation and store result
      result = func.apply(null, arguments);
      cache[argStr] = result;
    }
    return result;
  };
}

function countWaysMemo(amount, denominations) {
  return memoize(countWaysHelper)(amount, denominations, Infinity);
}
