// function
function myFunction(args1, args2) {
  // code
  console.log("Hello World", args1, args2);
}

// anonymous function
const myOtherFunction = (args1, args2) => {
  console.log("Hello World", args1, args2);
};

// arrow function
const add = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;
const double = a => a * 2;
// no args
const sayHello = () => console.log("Hello World");

// return object
const returnObject = () => ({ key: "value" });

const myArrowFunction = (a, b) => {
  console.log("Hello World", a, b);
  return a + b;
};
