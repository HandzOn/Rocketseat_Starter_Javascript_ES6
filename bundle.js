"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// REST
var user = {
  name: 'Guilherme',
  age: 27,
  company: 'Crescer Informática'
};

var name = user.name,
    rest = _objectWithoutProperties(user, ["name"]);

console.log(name, rest);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a, b, c);

function sum() {
  for (var _len = arguments.length, c = new Array(_len), _key = 0; _key < _len; _key++) {
    c[_key] = arguments[_key];
  }

  return c.reduce(function (total, next) {
    return total + next;
  });
}

console.log(sum(1, 3, 4));
