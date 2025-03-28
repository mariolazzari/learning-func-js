const map = (arr, fn) => {
  const res = [];
  arr.forEach(e => res.push(fn(e)));

  return res;
};

const nums = [1, 2, 3, 4, 5];
const twice = map(nums, n => n * 2);
console.log(twice);
