const countDown = num => {
  if (num <= 0) {
    return console.log("All done!");
  }

  console.log(num);

  num--;
  countDown(num);
};

const countUp = (num, max) => {
  if (num >= max) {
    return console.log("All done!");
  }

  console.log(num);

  num++;
  countUp(num, max);
};

countDown(3);
countUp(0, 3);
