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