const createPrinter = () => {
  const myNumber = 42;

  return () => {
    console.log(`My number is ${myNumber}`);
  };
};

const myPrinter = createPrinter();
myPrinter(); // My number is 42
