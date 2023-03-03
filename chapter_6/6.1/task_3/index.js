// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Вызов fib(77) должен занимать не более доли секунды.

const fib = (n) => {
  let prev = 1;
  let cur = 1;

  for (let i = 3; i <= n; i += 1) {
    [prev, cur] = [cur, prev + cur];
  }

  return cur;
};
