// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// Решение:

// С использованием цикла:
const sumTo = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
};

// С использованием рекурсии:
const recursiveSumTo = (n) => (n === 1 ? 1 : n + recursiveSumTo(n - 1));

// С использованием формулы арифметической прогрессии:
const apSumTo = (n) => (n * (n + 1)) / 2;
