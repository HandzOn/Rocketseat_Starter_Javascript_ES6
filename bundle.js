"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
