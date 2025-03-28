const add = (x, y, z) => x + y + z;
const addPartial = x => (y, z) => x + y + z;

const add5 = addPartial(5);
console.log(add5(10, 15)); // 30

const add10 = addPartial(10);
console.log(add10(20, 30)); // 60

const addPartial2 = x => y => z => x + y + z;
console.log(addPartial2(5)(10)(15)); // 30

const add1 = addPartial2(1);
const add1and2 = add1(2);
const sum = add1and2(3);
console.log(sum); // 6
