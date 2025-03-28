const asc = (a, b) => a - b;
const desc = (a, b) => b - a;

const mixedNumebrs = [10, 2, 4, 3, 5, 9, 6, 7, 8, 1];
const sortedNumbersAsc = mixedNumebrs.slice().sort(asc);
const sortedNumbersDesc = mixedNumebrs.slice().sort(desc);

console.log(mixedNumebrs);
console.log(sortedNumbersAsc);
console.log(sortedNumbersDesc);
