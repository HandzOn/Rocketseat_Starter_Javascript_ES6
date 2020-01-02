const user = {
  name: 'Guilherme',
  age: 27,
  address: {
    city: 'São Paulo',
    state: 'SP'
  }
};
const { name, age, address: { city } } = user;


function getState({ address: { state } }) {
  return state;
}


console.log(name, age, city);
console.log(getState(user));