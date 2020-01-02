"use strict";

var user = {
  name: 'Guilherme',
  age: 27,
  address: {
    city: 'São Paulo',
    state: 'SP'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;

function getState(_ref) {
  var state = _ref.address.state;
  return state;
}

console.log(name, age, city);
console.log(getState(user));
