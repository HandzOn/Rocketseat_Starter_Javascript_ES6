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
console.log(name, age, city);
