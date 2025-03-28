const employees = [
  { name: "John", salary: 90000 },
  { name: "David", salary: 75000 },
  { name: "Olivia", salary: 80000 },
  { name: "Peter", salary: 95000 },
];

const moreThan = value => employee => employee.salary > value;
const moreThan10K = moreThan(10000);
const moreThan80K = moreThan(80000);

const allMore10K = employees.every(moreThan10K);
console.log(allMore10K);

const someMore10K = employees.some(moreThan10K);
console.log(someMore10K);

const allMore80K = employees.every(moreThan80K);
console.log(allMore80K);

const someMore80K = employees.some(moreThan80K);
console.log(someMore80K);

const formValues = ["Mario", "Maria", "Mariarosa", ""];
const isNotEmpty = val => !!val;
const isFormValid = formValues.every(isNotEmpty);
console.log("form is valid:", isFormValid);
