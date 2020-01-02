"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var pairs = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(pairs);
