const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(3, 8));

const numbersCopy = numbers.slice();
console.log(numbersCopy);

// unmutable reverse
const reverseNumbers = numbers.slice().reverse();
console.log(reverseNumbers);
