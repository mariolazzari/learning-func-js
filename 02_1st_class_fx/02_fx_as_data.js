const sayHello = name => console.log("Hello World,", name);

const sayHello2 = sayHello;
sayHello2("Mario");

const myFunction = true
  ? () => console.log("Hello World")
  : () => console.log("Goodbye World");

myFunction();
myFunction(true);

// mockup
const DEVELOPMENT = true;

const fetchDataReal = () => {
  // long operation
};

const fetchDataFake = () => ({
  data: "some data",
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const addFive = x => x + 5;

const myNumber = 42;
const doubled = double(myNumber);
const subtracted = subtractOne(myNumber);
const tripled = triple(myNumber);
const added = addFive(myNumber);

const funcrions = [double, subtractOne, triple, addFive, Math.sqrt];
funcrions.forEach(fn => console.log(fn(myNumber)));
