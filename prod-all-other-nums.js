// Source: https://www.interviewcake.com/question/python/product-of-other-numbers

// You have a list of integers, and for each index you want to find the
// product of every integer except the integer at that index.
//
// Write a function get_products_of_all_ints_except_at_index() that takes
// a list of integers and returns a list of the products.
//
// For example, given [1, 7, 3, 4], your function would return [84, 12, 28, 21].

// BRUTE FORCE (O(N^2) because of the two for loops)
function getProductsOfAllIntsExceptAtIndexBRUTE (array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var prod = 1;
    for (var j = 0; j < array.length; j++) {
      if (i === j) continue;
      prod *= array[j];
    }
    result.push(prod);
  }
  return result;
}

// EFFICIENT SOLN (O(N) since only single pass)
function getProductsOfAllIntsExceptAtIndex (arr) {
  var nums = [arr.slice(1)];
  for (var i = 1; i < arr.length; i++) {
    var subSeq = nums[i-1].slice(0); // to make sure we operate on a copy
    subSeq.shift();
    subSeq.push(arr[i-1]);
    nums.push(subSeq);
  }
  return nums.map(prod);
}

// For each method
function prod(numbers) {
  var result = 1;
  numbers.forEach(function(num) {
    result *= num;
  });
  return result;
}

// Reduce method
function prod(numbers) {
  return numbers.reduce(function(acc, curr) {
    return acc * curr;
  });
}

// Reduce and arrow functions
function prod(numbers) {
  return numbers.reduce((prod, num) => prod * num);
}

console.log(getProductsOfAllIntsExceptAtIndexBRUTE([1,7,3,4]));
console.log(getProductsOfAllIntsExceptAtIndex([1,7,3,4]));

