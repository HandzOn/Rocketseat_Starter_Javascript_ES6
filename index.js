// REST

const user = {
  name: 'Guilherme',
  age: 27,
  company: 'Crescer Informática'
};

const { name, ...rest } = user;

console.log(name, rest);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;
console.log(a, b, c);

function sum(...numbers) {
  return numbers.reduce((total, next) => total + next);
}

console.log(sum(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr);

const user2 = { ...user, company: 'Blueshift'};
console.log(user2);
