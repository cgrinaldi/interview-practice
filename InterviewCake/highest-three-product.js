// Source: https://www.interviewcake.com/question/python/highest-product-of-3

// Given a list_of_ints, find the highest_product you can get from
// three integers. The input will always have at least 3 integers.

// Solution #1: O(NlogN) - sort then look at two cases
function largestProduct(numbers) {
  numbers.sort((a,b) => b - a);
  var prod1 = product(numbers.slice(0,3));
  var prod2 = product([numbers[0]].concat(numbers.slice(-2)));
  return prod1 > prod2 ? prod1 : prod2;
}

function product(numbers) {
  var result = 1;
  numbers.forEach(function(num) {
    result *= num;
  });
  return result;
}

console.log(largestProduct([3, 5, 2, 1]));
console.log(largestProduct([3, 5, -200, -1]));

// Solution #2: O(N) - linear scan
function largestProductLinear(numbers) {
  var largest3 = [];
  var largest2Neg = [];
  numbers.forEach(function(num) {
    // Track if number is < 0
    if (num < 0) {
      largest2Neg.push(num);
      largest2Neg.sort((a,b) => a-b);
      largest2Neg = largest2Neg.slice(0,2);
    }

    // Always add number to largest3, since we will always sort and slice
    // to get back down to 3
    largest3.push(num);
    largest3.sort((a,b) => b-a);
    largest3 = largest3.slice(0,3);
  });

  var prod1 = product(largest3);
  var prod2 = product([largest3[0]].concat(largest2Neg));

  // Check to make sure that we actually have enough negatives numbers
  if (largest2Neg.length < 2) return prod1;
  else return prod1 > prod2 ? prod1 : prod2;
}

console.log(largestProductLinear([3, 5, 2, 1]));
console.log(largestProductLinear([3, 5, -200, -1]));
