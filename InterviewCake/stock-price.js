// Source: https://www.interviewcake.com/question/python/stock-price

// Suppose we could access yesterday's stock prices as a list, where:
//   * The indices are the time in minutes past trade opening time, which
//     was 9:30am local time
//   * The values are the price in dollars of Apple stock at that time
// So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.
//
// Write an efficient function that takes stock_prices_yesterday and returns
// the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock
// yesterday.
//
// NOTE: No "shorting" - you must buy before you sell. You may not buy AND sell
// in the same time step (at least 1 minute must pass).

// BRUTE FORCE SOLN
function findMaxProfitBrute(prices) {
  var maxProfit = -Infinity;
  for (var i = 0; i < prices.length - 1; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }
  return maxProfit;
}

// MY ATTEMPT
// This is more efficient than brute force since it requires a single scan
function findMaxProfit(prices) {
  var maxProfit = 0;
  var begin = 0;

  // Terminate when begin is last index since can't buy/sell same time
  while (begin < prices.length - 1) {
    var end = begin + 1;
    var currProfit = prices[end] - prices[begin];
    while (currProfit > 0) {
      if (currProfit > maxProfit) {
        maxProfit = currProfit;
      }
      end++;
      currProfit = prices[end] - prices[begin];
    }
    begin = end;
  }
  return maxProfit;
}

// CORRECT SOLN
// The key difference is that mine doesn't throw an error, and that it
// doesn't work in cases where the best answer is a negative profit.
function findMaxProfitSoln(prices) {
  if (prices.length < 2) {
    throw new Error('profit requires buying and selling!');
  }
  var minPrice = prices[0];
  var maxProfit = prices[1] - prices[0];

  for (var i = 0; i < prices.length; i++) {
    if (i === 0) continue;
    var currPrice = prices[i];
    var potentialProfit = currPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currPrice);
  }
  return maxProfit;
}

// var stock_prices_yesterday = [11, 8, 7, 1];
var stock_prices_yesterday = [9, 1, 5, 10, 3];
console.log(findMaxProfitBrute(stock_prices_yesterday));
console.log(findMaxProfit(stock_prices_yesterday));
console.log(findMaxProfitSoln(stock_prices_yesterday));
