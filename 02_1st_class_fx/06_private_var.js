const Person = ({ name, age, job }) => {
  const _name = name;
  const _age = age;
  const _job = job;

  return {
    getName() {
      return _name;
    },
    getAge() {
      return _age;
    },
    getJob() {
      return _job;
    },

    setJob(newJob) {
      _job = newJob;
    },
  };
};

const mario = Person({ name: "Mario", age: 42, job: "dev" });
console.log(mario.getName()); // Mario
console.log(mario.getJob()); // dev
mario.setJob("senior dev");
console.log(mario.getJob()); // senior dev
// console.log(mario._job); // undefined
