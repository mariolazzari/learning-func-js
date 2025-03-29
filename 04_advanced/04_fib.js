const fib = n => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(1)); // 1
console.log(fib(10)); // 55
console.log(fib(20)); // 6765
console.log(fib(-1)); // -1
