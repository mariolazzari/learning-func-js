const person = {
  name: "John",
  age: 30,
  hairColor: "black",
  eyeColor: "brown",
};

const career = {
  name: "Mario",
  job: "developer",
  company: "Google",
};

const personWithCareer = {
  ...person,
  ...career,
};

console.log(personWithCareer);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [0, ...numbers, 6, 7, 8];
console.log(newNumbers);
