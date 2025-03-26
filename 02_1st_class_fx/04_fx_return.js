const cretePrinter = () => () => console.log("Hello");
function createPrinter2() {
  return function () {
    console.log("Hello");
  };
}

const double = a => a * 2;
const triple = a => a * 3;
const quadruple = a => a * 4;

const multiplier = factor => number => number * factor;
const double2 = multiplier(2);
const triple2 = multiplier(3);
const quadruple2 = multiplier(4);
