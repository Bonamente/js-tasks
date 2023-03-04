// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
// начиная от from и заканчивая to.

// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

const printNumbers = (from, to) => {
  let cur = from;

  const timerId = setInterval(() => {
    console.log(cur);

    if (cur === to) clearInterval(timerId);

    cur += 1;
  }, 1000);
};

const printNumbers2 = (from, to) => {
  let cur = from;

  setTimeout(function f() {
    console.log(cur);

    if (cur < to) setTimeout(f, 1000);

    cur += 1;
  }, 1000);
};
