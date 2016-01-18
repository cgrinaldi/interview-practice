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
// This isn't a great way to do it because it is expensive in terms of cost
function getProductsOfAllIntsExceptAtIndex (arr) {
  var beforeProducts = calcBeforeProducts(arr);
  var afterProducts = calcBeforeProducts(arr.reverse()).reverse();
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(beforeProducts[i] * afterProducts[i]);
  }
  return result;
}

function calcBeforeProducts(arr) {
  var result = [1];
  var prod = 1;
  for (var i = 0; i < arr.length-1; i++) {
    prod *= arr[i];
    result.push(prod);
  }
  return result;
}

// BETTER SOLN
function getProductsOfAllIntsExceptAtIndex(arr) {
  var result = [];
  var product_so_far = 1;
  var i = 0;

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  while (i < arr.length) {
    result.push(product_so_far);
    product_so_far *= arr[i];
    i += 1;
  }

  // For each integer, we find the product of all the integers after it.
  // Since each index in products already has the product of all the
  // integers before it, now we are storing the total product of all other ints.
  product_so_far = 1;
  i = arr.length - 1;
  while (i >= 0) {
    result[i] *= product_so_far;
    product_so_far *= arr[i];
    i -= 1;
  }

  return result;
}

console.log(getProductsOfAllIntsExceptAtIndexBRUTE([1,7,3,4]));
console.log(getProductsOfAllIntsExceptAtIndex([1,7,3,4]));

