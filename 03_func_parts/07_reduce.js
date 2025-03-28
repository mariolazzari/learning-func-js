const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, cur) => (acc += cur), 0);
console.log(sum); // 55

const prod = numbers.reduce((acc, cur) => (acc *= cur), 1); // 1 is the initial value to avoid 0 as result
console.log(prod); // 3628800
