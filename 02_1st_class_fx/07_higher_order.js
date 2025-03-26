const divide = (a, b) => {
  if (b === 0) {
    console.log("You can't divide by zero");
    return;
  }
  return a / b;
};

const secondArgIsNotZero =
  fn =>
  (...args) => {
    if (args[1] === 0) {
      console.log("You can't divide by zero");
      return;
    }
    return fn(...args);
  };

const divideSafe = secondArgIsNotZero(divide);
console.log(divideSafe(10, 2)); // 5
console.log(divideSafe(10, 0)); // You can't divide by zero
