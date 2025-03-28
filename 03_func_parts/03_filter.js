const numbers = [1, 2, 3, 4, 5];

const isEven = n => n % 2 === 0;

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const words = ["hello", "world", "goodbye", "hello"];

const createLengthTest = length => word => word.length > length;
const isLongerThanFive = createLengthTest(5);

const longWords = words.filter(isLongerThanFive);
console.log(longWords);
