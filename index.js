// REST

const user = {
  name: 'Guilherme',
  age: 27,
  company: 'Crescer Informática'
};

const { name, ...rest } = user;

console.log(name, rest);