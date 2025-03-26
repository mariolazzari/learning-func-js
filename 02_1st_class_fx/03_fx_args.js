const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// The combine2and3 function takes a function as an argument and calls it with 2 and 3 as arguments.
// This is a higher-order function because it takes a function as an argument.
const combine2and3 = func => func(2, 3);
combine2and3(add); // 5
combine2and3(subtract); // -1
combine2and3(Math.max); // 3
