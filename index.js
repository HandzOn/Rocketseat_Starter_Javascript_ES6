const user = {
  name: 'Guilherme',
  age: 27,
  address: {
    city: 'São Paulo',
    state: 'SP'
  }
};
const { name, age, address: { city } } = user;
console.log(name, age, city);