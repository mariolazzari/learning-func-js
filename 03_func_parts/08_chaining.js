const employees = [
  {
    name: "John Olsen",
    age: 54,
    jobTitle: "developer",
    salary: 70000,
  },
  {
    name: "Karen Norris",
    age: 34,
    jobTitle: "engineer",
    salary: 75000,
  },
  {
    name: "Daryl Cline",
    age: 25,
    jobTitle: "secretary",
    salary: 54000,
  },
  {
    name: "Abbey Garcia",
    age: 40,
    jobTitle: "developer",
    salary: 100000,
  },
  {
    name: "Finn Smith",
    age: 29,
    jobTitle: "engineer",
    salary: 40000,
  },
  {
    name: "Eve Wordsworth",
    age: 20,
    jobTitle: "developer",
    salary: 65000,
  },
  {
    name: "Ronald Jacobs",
    age: 60,
    jobTitle: "developer",
    salary: 90000,
  },
];

const devs = employees.filter(e => e.jobTitle === "developer");

const totalDevSalary = devs
  .map(d => d.salary)
  .reduce((acc, curr) => acc + curr, 0);

const avgDevSalary = totalDevSalary / devs.length;

console.log(totalDevSalary);
console.log(avgDevSalary);
