// Напишите функцию sum, которая бы работала следующим образом:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

const sum = (...numbers) => {
  const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
  const inner = (...rest) => sum(sumOfNumbers, ...rest);
  inner.valueOf = () => sumOfNumbers;

  return inner;
};
